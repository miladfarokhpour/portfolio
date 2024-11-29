from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

class UserBase(BaseModel):
    email: EmailStr

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int
    is_admin: bool
    created_at: datetime

    class Config:
        from_attributes = True

class ProjectBase(BaseModel):
    title: str
    description: str
    image_url: str
    category: str
    technologies: List[str]
    link: Optional[str] = None

class ProjectCreate(ProjectBase):
    pass

class ProjectResponse(ProjectBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    message: str

class ContactResponse(ContactCreate):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True