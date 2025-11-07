import { Hono } from 'jsr:@hono/hono';
import { serveStatic } from 'jsr:@hono/hono/deno';
const app = new Hono();

app.use('/*', serveStatic({ root: './public' }));

// GETリクエストに対する処理
//クエリーパラメーター
app.get('/api', async (c) => {
  const query = new URLSearchParams({
    name: this.name,
    rank: this.rank
  });
  const name = c.req.query('name');
  const rank = c.req.query('rank');
  return c.json({ message: 'GET', query: { name, rank } });
});
// app.get('/api/:name/:rank', async (c) => {
//   const name = c.req.param('name');
//   const rank = c.req.param('rank');
//   return c.json({ message: 'GET', param: { name, rank } });
// });

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
