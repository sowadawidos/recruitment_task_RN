import axios from 'axios'

const API_URL = 'https://api.json-generator.com/templates/Jd5vAyD8QY85/data'
const API_KEY = '39j3bjrfp0slqomnkv4zpvcb9wvfakenx1t6a0mp'

export default async function fetchData(method, body, path) {
  try {
    const response = await axios({
      method,
      url: `${API_URL}${path}`,
      data: body ? { ...body } : undefined,
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })

    return response
  } catch (error) {
    console.log('index.js (23) - error', error)
    return { isFetchError: true }
  }
}
