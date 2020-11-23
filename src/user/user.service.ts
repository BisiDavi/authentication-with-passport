// import { Injectable } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
import * as mongoose from 'mongoose';

config();
const MONGO_URI = process.env.MONGODB_URI;

@Injectable()
export class UserService {
  public async connectDB(): Promise<void> {
    try {
      await mongoose.connect(
        MONGO_URI,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true,
        },
        console.log('You are connected to the db!'),
      );
    } catch (err) {
      throw new Error(err);
    }
  }
}
