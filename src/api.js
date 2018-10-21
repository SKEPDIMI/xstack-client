import { create } from 'apisauce';

const api = create({
  baseURL: process.env.NODE_ENV === 'production' ? null : 'http://localhost:5000',
  headers: { 'Content-Type': 'application/json' }
});

api.addResponseTransform(response => {
  // this puts all of the response.data into response.body
  // this is to avoid accessing response's data like `response.data.data`, but rather `response.body.data`

  response.body = {...response.data}
  response.data = null
})

export default api
