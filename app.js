import express from 'express';
import mongoose from 'mongoose';
import { router } from './routes/studentRouter.js';

//Conectar ao MongoDB pelo Mongoose
(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:admin@cluster0.v7dfk.mongodb.net/grades?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
  } catch (error) {
    console.log('Erro ao conectar no MongoDB');
  }
})();

const app = express();
const port = 3000;
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Api started on port ${port}`);
});
