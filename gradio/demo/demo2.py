from fastapi import FastAPI
import gradio as gr
import uvicorn
from gradio.utils import mount_gradio_app

app = FastAPI()
external_data = "初始数据"


def get_data():
    return external_data


with gr.Blocks() as demo:
    textbox = gr.Textbox()
    demo.load(fn=get_data, outputs=textbox, every=1)


@app.post("/update_data")
def update_data(new_data: str):
    global external_data
    external_data = new_data
    return {"status": "success"}


gr.mount_gradio_app(app, demo, path="/")
uvicorn.run(app)
