from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List
from ..database import get_db
from ..models import Project
from ..schemas import ProjectCreate, ProjectResponse
from ..auth import get_current_user

router = APIRouter()

@router.get("/", response_model=List[ProjectResponse])
async def get_projects(
    skip: int = 0,
    limit: int = 10,
    db: AsyncSession = Depends(get_db)
):
    projects = await db.query(Project).offset(skip).limit(limit).all()
    return projects

@router.post("/", response_model=ProjectResponse)
async def create_project(
    project: ProjectCreate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    if not current_user.is_admin:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized to create projects"
        )
    
    db_project = Project(**project.dict())
    db.add(db_project)
    await db.commit()
    await db.refresh(db_project)
    return db_project