from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    # Definimos los tipos de datos que esperamos de nuestro entorno
    PROJECT_NAME: str
    VERSION: str
    API_V1_STR: str
    DATABASE_URL: str
    
    # Le decimos a pydantic que busque el archivo .env dos carpetas arriba
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True
    )

# Instanciamos la clase una sola vez para que todo el proyecto la use (Singleton implícito)
settings = Settings()
