# needed to appropriately, select ENV vars / Config vars
import os

# the logging things
import logging

from app.config import Config, ConfigSingleton


logging.basicConfig(
    level=logging.DEBUG, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logging.getLogger("pyrogram").setLevel(logging.WARNING)


# TODO: found a better way
LOGGER = logging.getLogger(__name__)
config = ConfigSingleton()

APP_ID: str = config.API_ID
API_HASH: str = config.API_HASH
BOT_TOKEN: str = config.BOT_TOKEN
