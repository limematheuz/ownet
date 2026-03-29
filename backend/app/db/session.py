from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

# Importamos la configuración que creamos en Paso 5
from app.core.config import settings

# 1. Crear el "Motor" (Es quien maneja la conexión física a la Base de Datos)
engine = create_engine(
    settings.DATABASE_URL,
    pool_pre_ping=True, # Comprueba que la conexión no se haya caído antes de usarla
)

# 2. Crear la fábrica de sesiones (Las "transacciones" individuales en base de datos)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 3. La Clase Base de la que heredarán todas nuestras Entidades / Tablas
Base = declarative_base()

# 4. Dependencia de FastAPI para obtener una sesión viva por cada petición web
def get_db():
    db = SessionLocal()
    try:
        # Usamos 'yield' para inyectar la dependencia. Cuando la petición web termina,
        # se ejecuta el bloque 'finally' y cerramos la conexión limpiamente.
        yield db
    finally:
        db.close()
