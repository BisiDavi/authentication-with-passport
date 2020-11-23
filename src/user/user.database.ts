/* eslint-disable prettier/prettier */
import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  userName: String,
  email: String,
  devSubDomain: String,
});

const User = model('user', userSchema);
export default User;
