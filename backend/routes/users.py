from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from ..database import get_db
from ..models import User
from ..schemas import UserCreate, UserResponse
from ..auth import get_password_hash, create_access_token

router = APIRouter()

@router.post("/", response_model=UserResponse)
async def create_user(
    user: UserCreate,
    db: AsyncSession = Depends(get_db)
):
    db_user = await db.query(User).filter(User.email == user.email).first()
    if db_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )
    
    hashed_password = get_password_hash(user.password)
    db_user = User(email=user.email, hashed_password=hashed_password)
    db.add(db_user)
    await db.commit()
    await db.refresh(db_user)
    return db_user