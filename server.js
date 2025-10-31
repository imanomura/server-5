import { Hono } from 'jsr:@hono/hono';
import { serveStatic } from 'jsr:@hono/hono/deno';
const app = new Hono();

app.use('/*', serveStatic({ root: './public' }));

// GETリクエストに対する処理
app.get('/api', async (c) => {
  return c.json({ message: 'GET' });
});

app.post('/api', async () => {
  return c.json({ message: 'POST' });
});

app.put('/api', async () => {
  return c.json({ message: 'PUT' });
});

app.delete('/api', async () => {
  return c.json({ message: 'DELETE' });
});

Deno.serve(app.fetch);
