from typing import Any, Dict
import aiohttp

from app.services.base_service import BaseService


class UserService(BaseService):
    async def get_users(self) -> Dict[str, Any]:
        return await self._request('GET', '/users')

    async def create_user(self, user_data: Dict[str, Any]) -> Dict[str, Any]:
        return await self._request('POST', '/users/create', json=user_data)