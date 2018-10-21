import { create } from 'apisauce';

const api = create({
  baseURL: process.env.NODE_ENV === 'production' ? null : 'http://localhost:5000',
  headers: { 'Content-Type': 'application/json' }
});

api.addResponseTransform(response => {
  response.body = {...response}
  response.data = null
})

export default api
