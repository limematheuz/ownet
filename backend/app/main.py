from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI(
    title="OWNET API",
    description="API para el sistema de gestion OWNET",
    version="0.1.0"
)

@app.get("/health", tags=["System"])
async def health_check():
    return JSONResponse(
        content={
            "status": "ok",
            "message": "OWNET API is running"
        }, 
        status_code=200
    )