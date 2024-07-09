from pyrogram import __version__
from pyrogram.client import Client
from pyrogram.raw.all import layer
from app import (
    APP_ID,
    API_HASH,
    BOT_TOKEN,
    LOGGER
)

class Bot(Client):

    def __init__(self):
        self.name = self.__class__.__name__.lower()
        super().__init__(
            name=self.name,
            plugins=dict(root=f"app/plugins"),
            api_id=APP_ID,
            api_hash=API_HASH,
            bot_token=BOT_TOKEN,
            in_memory=False
        )

    async def start(self):
        await super().start()
        bot = self.me
        LOGGER.info(
            f"Bot based on Pyrogram v{__version__} "
            f"(Layer {layer}) started on @{bot.username if bot else self.name}. "
        )

    async def stop(self):
        await super().stop()
        LOGGER.info("Bot stopped. Bye.")

    