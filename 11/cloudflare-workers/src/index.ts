import { Hono } from 'hono'
const app = new Hono()

app.get('/',(c)=> {
	return c.json("hello")
})

export default app