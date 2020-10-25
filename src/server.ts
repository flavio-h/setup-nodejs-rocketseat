import express from 'express';

import '@controllers/UsersController';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.status(200).json({ hello: "Hello World" });
});

app.listen(3333);