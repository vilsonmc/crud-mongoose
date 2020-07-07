import express from 'express';
import mongoose from 'mongoose';
import { router } from './routes/studentRouter.js';
import dotenv from 'dotenv';

dotenv.config();

//Conectar ao MongoDB pelo Mongoose
(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@cluster0.v7dfk.mongodb.net/grades?retryWrites=true&w=majority`,
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
app.use(express.json());

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Api started on port ${process.env.PORT}`);
});
