import os
from typing import Any
from dotenv import load_dotenv



load_dotenv("config.env")


class Config:
    LOGGER = True
    API_ID = int(os.environ.get("API_ID"))
    API_HASH = os.environ.get("API_HASH")
    BOT_TOKEN = os.environ.get("BOT_TOKEN")
    

def get_env_var(var_name: str) -> str:
    from app import LOGGER
    value = os.getenv(var_name)
    if value is None:
        LOGGER.error(f"Environment variable {var_name} is missing!")
        raise ValueError(f"Missing required environment variable: {var_name}")
    return value

class ConfigSingleton:
    _instance: Any = None

    def __new__(cls) -> 'ConfigSingleton':
        if cls._instance is None:
            cls._instance = super(ConfigSingleton, cls).__new__(cls)
            cls._instance.API_ID = get_env_var('API_ID')
            cls._instance.API_HASH = get_env_var('API_HASH')
            cls._instance.BOT_TOKEN = get_env_var('BOT_TOKEN')
        return cls._instance