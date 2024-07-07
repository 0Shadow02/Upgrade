import { Hono } from 'hono'

const app = new Hono()


app.get('/', async (c) => {
  const body = await c.req.json()
  return body
})



export default app
