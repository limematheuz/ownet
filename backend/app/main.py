from fastapi import FastAPI
from fastapi.responses import JSONResponse
from app.api.v1.router import api_router
from app.core.config import settings

app = FastAPI(
    title="OWNET API",
    description="API para el sistema de gestion OWNET",
    version="0.1.0"
)

app.include_router(api_router, prefix=settings.API_V1_STR)

@app.get("/health", tags=["System"])
async def health_check():
    return JSONResponse(
        content={
            "status": "ok",
            "message": "OWNET API is running"
        }, 
        status_code=200
    )