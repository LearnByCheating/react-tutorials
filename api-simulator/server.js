import express from 'express';
import cors from 'cors';
import router from './routes.js';

const PORT = 4000;

const app = express();
// Allow all access to API routes.
app.use(cors());

// Allow access to the body of POST/PUT requests in our route handlers (as req.body)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
