import { Module } from '@nestjs/common';
import User from './user.database';
import { UserService } from './user.service';

@Module({
  imports: [User],
  providers: [UserService, User],
})
export class UserModule {}
