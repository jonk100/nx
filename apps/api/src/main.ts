import express from 'express';
import path from 'path';


const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});


// Serve the Astro site from the root
app.use(express.static(path.join(__dirname, '../../astro/dist')));

// Serve the React admin panel from /admin
app.use('/admin', express.static(path.join(__dirname, '../../admin-panel/build')));

// API routes
app.get('/api/endpoint', (req, res) => {
  res.send('Hello from API');
});

// Handle all other routes to serve the Astro site
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../astro/dist/index.html'));
});

app.listen(port, () => console.log(`Server running on port ${port}`));
