import os
from typing import Any, Dict, Optional, Union
import aiohttp

from dotenv import load_dotenv
load_dotenv()


API_URL = os.getenv("BASE_URL", "http://localhost:5100")


class BaseService:
    def __init__(self):
        self.base_url = API_URL
        self.session: aiohttp.ClientSession = None

    async def _ensure_session(self):
        if not self.session:
            self.session = aiohttp.ClientSession()

    async def _request(self, method: str, endpoint: str, **kwargs: Any) -> Union[Dict[str, Any], Any]:
        async with aiohttp.ClientSession() as session:
            url = f'{self.base_url}{endpoint}'
            async with session.request(method, url, **kwargs) as response:
                if response.status == 200:
                    return await response.json()
                else:
                    raise Exception(f"Request failed: {response.status}")

    async def close_session(self):
        if self.session:
            await self.session.close()
            self.session = None