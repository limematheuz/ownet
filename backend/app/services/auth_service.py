from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from app.models.user import User
from app.schemas.user import UserCreate
from app.repositories.user import get_user_by_email, create_user
from app.core.security import verify_password

def register_user(db: Session, user_data: UserCreate) -> User:
    user = get_user_by_email(db, user_data.email)
    if user:
        raise HTTPException( 
            status_code = status.HTTP_409_CONFLICT,
            detail="Email already registered",
            headers={"WWW-Authenticate": "Bearer"}
        )
    return create_user(db, user_data)

def authenticate_user(db:Session, email: str, password: str) -> User:
    user = get_user_by_email(db, email)
    if not user or not verify_password(password, user.hashed_password):
        raise HTTPException(
            status_code = status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"}
        )
    return user

