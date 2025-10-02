import { Context, Hono, Next } from 'hono'

const app = new Hono()

async function authMiddleware(c:Context, next:Next){
  try {
    next()
  } catch (error) {
    next()
  }
}

app.get('/', authMiddleware, (c) => {
  console.log("hello")
  return c.json({message:"Hello from hono"})
})

export default app