import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Githubstrategy } from './github.strategy';
import { Googlestrategy } from './google.strategy';
import { Bitbucketstrategy } from './bitbucket.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
  imports: [PassportModule],
  providers: [
    AuthService,
    Googlestrategy,
    Githubstrategy,
    Bitbucketstrategy,
    SessionSerializer,
  ],
})
export class AuthModule {}
