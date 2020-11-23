import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  githubLogin(req) {
    if (!req.user) {
      return 'This user is not registered with github';
    }
    return {
      message: "User's information from github",
      user: req.user,
    };
  }

  googleLogin(req) {
    if (!req.user) {
      return 'This user is not registered with github';
    }
    return {
      message: "User's information from github",
      user: req.user,
    };
  }
}
