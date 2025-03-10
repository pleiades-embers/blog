import gradio as gr
import numpy as np
import time
import cv2
from gradio_client import Client  # 保留导入
import json
from enum import Enum

# 定义方向枚举，后续扩展更简单
class Direction(Enum):
    UP = "w"
    DOWN = "s"
    LEFT = "a"
    RIGHT = "d"

# 初始化参数
img_size = 512
cursor_pos = [img_size // 2, img_size // 2]  # 光标初始位置
log = []  # 日志记录

# 全局客户端，延迟初始化
client = None

def get_client():
    """延迟初始化外部 API 客户端"""
    global client
    if client is None:
        client = Client("http://localhost:7860")
    return client

def draw_image():
    """绘制带有光标的图像"""
    img = np.ones((img_size, img_size, 3), dtype=np.uint8) * 255
    cv2.circle(img, tuple(cursor_pos), 10, (0, 0, 255), -1)
    return img

# 定义每个方向对应的移动增量
move_delta = {
    Direction.UP: (0, -10),
    Direction.DOWN: (0, 10),
    Direction.LEFT: (-10, 0),
    Direction.RIGHT: (10, 0)
}

def handle_move(key: str, *args):
    print(key,'222')
    """
    处理移动逻辑：
      - 将传入的 key 转换为 Direction 枚举（如果不合法，则不处理）
      - 更新光标位置（使用边界检查）
      - 当方向为 DOWN 时，调用外部 API（示例中仅对 DOWN 有特殊处理）
      - 记录移动日志，并返回最新图像和日志内容
    """
    global cursor_pos, log

    try:
        direction = Direction(key)
    except ValueError:
        # 非法按键，不做任何处理
        return draw_image(), "\n".join(log[-5:])

    dx, dy = move_delta[direction]
    # 更新坐标，确保不越界
    cursor_pos[0] = int(np.clip(cursor_pos[0] + dx, 0, img_size - 1))
    cursor_pos[1] = int(np.clip(cursor_pos[1] + dy, 0, img_size - 1))

    # 当向下移动时调用外部 API（示例处理）
    if direction == Direction.DOWN:
        try:
            get_client().predict(None, api_name="/btnA")
        except Exception as e:
            print("调用外部 API 失败:", e)

    timestamp = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())
    log.append(f"{timestamp} - Moved {direction.name} to: {cursor_pos}")
    return draw_image(), "\n".join(log[-5:])

# 获取允许的按键列表（用于前端校验）
valid_keys = [d.value for d in Direction]
valid_keys_json = json.dumps(valid_keys)

# 构建 Gradio 界面，只显示图像和日志，不显示按钮
with gr.Blocks() as demo:
    gr.Markdown("# 图像光标控制 (仅支持键盘操作)")
    with gr.Row():
        image = gr.Image(value=draw_image(), interactive=False)
        log_output = gr.Textbox(value="日志记录", interactive=False)

    # 添加两个隐藏组件：
    # key_input 用于接收前端传来的按键值
    # hidden_btn 用于触发后端函数
    key_input = gr.Textbox(visible=True, elem_id="key_input")
    hidden_btn = gr.Button(visible=False, elem_id="hidden_btn")

    print(key_input.value,111)
    # 隐藏按钮绑定后端函数，当点击时，将传入 key_input 的值进行处理
    hidden_btn.click(fn=handle_move, inputs=key_input, outputs=[image, log_output])

    # 添加前端 JS 脚本，监听键盘事件，并触发隐藏组件
    demo.load(
        None,
        None,
        js=f"""
        () => {{
            const validKeys = {valid_keys_json};
            document.addEventListener('keydown', (e) => {{
                const key = e.key.toLowerCase();
                if (validKeys.includes(key)) {{
                    e.preventDefault();
                    // 设置隐藏输入框的值
                    const keyInput = document.querySelector("#key_input textarea")
                    if (keyInput) {{
                        keyInput.value = key;
                        keyInput.dispatchEvent(new Event('input', {{ bubbles: true }}));
                    }}
                    // 模拟点击隐藏按钮，触发后端函数
                    const btn = document.getElementById("hidden_btn");
                    if (btn) {{
                        btn.click();
                    }}
                }}
            }});
        }}
        """
    )

if __name__ == '__main__':
    demo.launch()