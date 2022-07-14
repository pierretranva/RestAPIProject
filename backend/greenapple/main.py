"""This is the main.py file."""
from typing import Any

from fastapi import FastAPI

app = FastAPI(
    title="greenapple",
    root_path="",
)


@app.get("/")
def read_root() -> Any:
    """Fast API example."""
    return {"Hello": "World"}
