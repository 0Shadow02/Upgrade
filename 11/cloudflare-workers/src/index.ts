import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => {
	c.res.json({msg:"hello there"})
})

export default app