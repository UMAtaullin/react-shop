const API_KEY = import.meta.env.VITE_API_KEY;
if (!API_KEY) {
  console.error("API_KEY is not defined in .env.local");
}

const API_URL = 'https://fortniteapi.io/v2/shop?lang=en'

export {
  API_KEY,
  API_URL,
}