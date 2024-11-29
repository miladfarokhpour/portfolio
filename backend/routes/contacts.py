from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from ..database import get_db
from ..models import Contact
from ..schemas import ContactCreate, ContactResponse

router = APIRouter()

@router.post("/", response_model=ContactResponse)
async def create_contact(
    contact: ContactCreate,
    db: AsyncSession = Depends(get_db)
):
    db_contact = Contact(**contact.dict())
    db.add(db_contact)
    await db.commit()
    await db.refresh(db_contact)
    return db_contact