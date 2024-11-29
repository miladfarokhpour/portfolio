from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List

from .database import get_db
from .models import Base, engine
from .schemas import ProjectCreate, ProjectResponse, UserCreate, UserResponse, ContactCreate
from .routes import projects, users, contacts
from .auth import create_access_token, get_current_user

app = FastAPI(title="Portfolio API")

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite's default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(projects.router, prefix="/api/projects", tags=["projects"])
app.include_router(users.router, prefix="/api/users", tags=["users"])
app.include_router(contacts.router, prefix="/api/contacts", tags=["contacts"])

@app.on_event("startup")
async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="0.0.0.0", port=8000, reload=True)