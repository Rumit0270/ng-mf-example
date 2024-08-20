import cors from 'cors';
import helmet from 'helmet';
import express from 'express';

const app = express();
const publicPath = process.cwd() + '/public';

app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false, // Disable for now
  })
);
app.use(express.json());
app.use(express.static(publicPath));

// Define application routes here for now
app.get('/mfe1', (_, res) => {
  const mfe1Html = publicPath + '/ui/mfe1/index.html';
  return res.sendFile(mfe1Html);
});

app.get('/mfe2', (_, res) => {
  const mfe2Html = publicPath + '/ui/mfe2/index.html';
  return res.sendFile(mfe2Html);
});

app.get('/mfe3', (_, res) => {
  const mfe3Html = publicPath + '/ui/mfe2/index.html';
  return res.sendFile(mfe3Html);
});

app.get('/ui/shell/*', (_, res) => {
  const shellHtml = publicPath + '/ui/shell/index.html';
  return res.sendFile(shellHtml);
});

app.get('/', (_, res) => {
  // const shellHtml = publicPath + '/ui/shell/index.html';
  // return res.sendFile(shellHtml);
  return res.redirect('/ui/shell');
});

export { app };
