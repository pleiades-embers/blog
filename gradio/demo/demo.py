import gradio as gr
import numpy as np
import time
import cv2
from gradio_client import Client
import uvicorn
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 初始化参数
img_size = 512
cursor_pos = [img_size // 2, img_size // 2]  # 光标初始位置
log = []  # 轨迹日志


def draw_image():
    """绘制带有光标的图像"""
    img = np.ones((img_size, img_size, 3), dtype=np.uint8) * 255  # 白色背景
    cv2.circle(img, tuple(cursor_pos), 10, (0, 0, 255), -1)  # 红色光标
    return img


# Gradio JavaScript 脚本
js = """
function fn() {
    var screen = document.querySelector('#KeyDownEvent');
    screen.tabIndex = -1;  // 确保图片元素可以聚焦
    screen.addEventListener('keydown', function(event) {
        if(screen){
            screen.click()
        }
 
    });
}
"""


def move_cursor(key):
    """根据按键移动光标"""
    global cursor_pos, log
    step = 10  # 每次移动步长

    if key == 'w':
        cursor_pos[1] = max(0, cursor_pos[1] - step)
    elif key == 's':
        client = Client("http://localhost:7862")
        client.predict(
            None,
            api_name="/btnA")
    elif key == 'a':
        cursor_pos[0] = max(0, cursor_pos[0] - step)
    elif key == 'd':
        cursor_pos[0] = min(img_size - 1, cursor_pos[0] + step)

    timestamp = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())
    log.append(f"{timestamp} - Moved to: {cursor_pos}")
    return draw_image(), "\n".join(log[-5:])  # 返回最新图像和最近5条日志




# @app.post("/handle_key")
# async def handle_key(request: Request):

#     global global_action_key
#     if action_key != global_action_key:
#         global_action_key = action_key
#         on_action_key_change(action_key)

#     try:
#         data = await request.json()
#         print(f"按键数据接收到: {data}")
#         key = data.get("key")
#         print(f"按键数据接收到数据转小写: {key}")
#     except Exception as e:
#         return {"status": "error", "message": f"解析按键数据失败: {e}"}

#     # 键盘按键映射到动作
#     key_action_map = {
#         # 87 对应 W 键，向前
#         87: 'forward',
#         # 65 对应 A 键，向左
#         65: 'left',
#         # 83 对应 S 键，向后
#         83: 'back',
#         # 68 对应 D 键，向右
#         68: 'right',
#         # 32 对应空格键，跳跃
#         32: 'jump',
#         # 27 对应 Esc 键
#         27: 'inventory',
#         # 81 对应 Q 键，丢弃物品
#         81: 'drop',
#         # 16 对应 Shift 键，潜行
#         16: 'sneak',
#         # 17 对应 Ctrl 键，疾跑
#         17: 'sprint',
#     }

#     action_key = key_action_map.get(key, "null")
#     print("当前事件", action_key)

#     # 更新全局变量并触发函数

#     if action_key != "null":
#         return {"status": "success", "message": f"Action '{action_key}' executed"}
#     else:
#         return {"status": "ignored", "message": f"Key '{key}' has no mapped action"}


# Gradio 界面
with gr.Blocks(js=js) as demo:
    gr.Markdown("# 图像光标控制")
    image = gr.Image(value=draw_image(), interactive=False,
                     elem_id="KeyDownEvent")
    log_output = gr.Textbox(value="日志记录", interactive=False)

    # with gr.Row():
    #     btn_w = gr.Button("W")
    # with gr.Row():
    #     btn_a = gr.Button("A")
    #     btn_s = gr.Button("S")
    #     btn_d = gr.Button("D")

    # btn_w.click(lambda: move_cursor('w'), api_name='btnW',
    #             outputs=[image, log_output])
    # btn_a.click(lambda: move_cursor('a'), api_name='btnA',
    #             outputs=[image, log_output])
    # btn_s.click(lambda: move_cursor('s'), outputs=[image, log_output])
    # btn_d.click(lambda: move_cursor('d'), outputs=[image, log_output])

    image.change(None, outputs=[image])

    # demo.load(fn=get_data, outputs=image, every=1)

demo.launch()

appserver = gr.mount_gradio_app(app, demo, path="/")
uvicorn.run(appserver)
