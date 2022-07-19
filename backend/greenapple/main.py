"""This is the main.py file."""
from typing import Any

from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

app = FastAPI(
    title="greenapple",
    root_path="",
)
Origin = ["http://localhost:3000"]
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_headers=["*"])


@app.get("/")
def read_root() -> Any:
    """Fast API example."""
    return {"Hello": "World"}


@app.get("/hello")
def get_endpoint() -> Any:
    """Fast API example."""
    return {"Endpoint": "Was Hit!"}
