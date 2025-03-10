import gradio as gr
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

# 定义 FastAPI 应用
app = FastAPI()

# 添加 CORS 中间件（如果需要允许其他客户端访问）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# FastAPI 路径处理
@app.post("/handle_key")
async def handle_key(request: Request):
    data = await request.json()
    print(f"按键数据接收到: {data}")
    return {"status": "success", "message": f"Key '{data}' received"}


# Gradio JavaScript 脚本
js = """
function fn() {
    var screen = document.querySelector('#KeyDownEvent');
    screen.tabIndex = -1;  // 确保图片元素可以聚焦
    screen.addEventListener('keydown', function(event) {
        console.log('键盘事件:', event);
        fetch('/handle_key', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(event.key)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Python 响应:', data);
        })
        .catch(error => console.error('错误:', error));
    });

    screen.addEventListener('click', function () {
        console.log('鼠标单击');
         fetch('/handle_key', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: '自定义传参数'
        })
        .then(response => response.json())
    });

    screen.addEventListener('mousemove', function (event) {
         console.log(`鼠标在盒子内移动，位置：(${event.offsetX}, ${event.offsetY})`);
    });
    screen.addEventListener('contextmenu', function (event) {
         event.preventDefault(); // 阻止默认的上下文菜单显示
         console.log('鼠标右键点击了盒子');
    });
}
"""


# 定义 Gradio 界面
def create_gradio_interface():
    with gr.Blocks(js=js) as demo:
        gr.Image(
            label="Real-time Environment Observation",
            interactive=False,
            show_label=False,
            streaming=True,
            elem_id="KeyDownEvent",
        )
    return demo


# 创建 Gradio 接口
gradio_app = create_gradio_interface()

# 将 Gradio 挂载到 FastAPI
app = gr.mount_gradio_app(app, gradio_app, path="/")

# 启动 FastAPI 应用
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
