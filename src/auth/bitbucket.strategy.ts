/* eslint-disable @typescript-eslint/no-var-requires */ /* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
import { Strategy } from 'passport-bitbucket-oauth2';
import { PassportStrategy } from '@nestjs/passport';
import User from 'src/user/user.database';

config();
@Injectable()
export class Bitbucketstrategy extends PassportStrategy(Strategy, 'bitbucket') {
  constructor() {
    super({
      clientID: process.env.BITBUCKET_CLIENT_ID,
      clientSecret: process.env.BITBUCKET_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    });
  }

  function(_accessToken: string, _refreshToken: string, profile, done) {
    User.findOrCreate({ bitbucketId: profile.username }, function (err, user) {
      return done(err, user);
    });
  }
}
