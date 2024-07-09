from pyrogram import filters, types
from app.bot import Bot as app
from app.services.user_service import UserService


async def get_start(message) -> types.Message:
    user_service = UserService()

    try:
        users = await user_service.get_users()
        await message.reply('Users:', users)
    except Exception as e:
        print(e)


@app.on_message(filters.command(['start'], prefixes=['!', '/', '']))
async def start(_, message):
    await get_start(message)
    