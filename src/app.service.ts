import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to devprofile. Get authenticated with google, github or bitbuket account';
  }
  devprofileAccount(): { message: string } {
    return { message: 'You are currently logged in' };
  }
}
