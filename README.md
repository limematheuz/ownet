# OWNET Enterprise System

OWNET es un sistema de gestión empresarial diseñado con una arquitectura moderna.

## Estructura del Proyecto
- **backend/**: API desarrollada en Python con FastAPI.
- **docker-compose.yml**: Configuración de los servicios de infraestructura (Base de Datos).

## Requisitos Previos
- Docker y Docker Compose
- Python 3.12+ (o la versión recomendada)

## Configuración y Ejecución

### 1. Levantar la Base de Datos
El proyecto utiliza PostgreSQL. Para iniciar la base de datos a través de Docker, ejecuta desde la raíz del proyecto:
```bash
docker-compose up -d
```

### 2. Configurar el Backend
Navega a la carpeta del backend y configura un entorno virtual:
```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # En Mac/Linux
# .\venv\Scripts\activate  # En Windows

# Instalar dependencias
pip install -r requirements.txt
```

### 3. Levantar el Servidor (Backend)
Con el entorno virtual activado y desde la carpeta `backend/`, ejecuta el siguiente comando para levantar la aplicación en modo desarrollo (con recarga automática):
```bash
uvicorn app.main:app --reload
```

El servidor estará corriendo en `http://localhost:8000`.

## Documentación de la API (Swagger)
FastAPI genera automáticamente la documentación interactiva de tus endpoints. Una vez que el servidor esté corriendo, puedes acceder a ella en las siguientes URLs:

- **Swagger UI**: [http://localhost:8000/docs](http://localhost:8000/docs)  (Interfaz interactiva recomendada para probar la API)
- **ReDoc**: [http://localhost:8000/redoc](http://localhost:8000/redoc) (Interfaz alternativa orientada a lectura)
