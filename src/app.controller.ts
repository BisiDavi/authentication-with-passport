/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Bind,
  Get,
  Req,
  Res,
  Render,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { GoogleGuard } from './common/guard/google.guard';
import { GithubGuard } from './common/guard/github.guard';
import { BitbucketGuard } from './common/guard/bitbucket.guard';
import { AuthenticatedGuard } from './common/guard/authenticated.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  index(@Req() req) {
    return { user: req.user, message: this.appService.getHello() };
  }
  /* login with google */
  @UseGuards(GoogleGuard)
  @Get('/auth/google/login')
  @Bind()
  async googleAuth(@Res() res: Response) {
    res.redirect('/account');
    return res.render('/account');
  }
  /* login with github */
  @UseGuards(GithubGuard)
  @Get('/auth/github/login')
  @Bind()
  async githubAuth(@Res() res: Response) {
    res.redirect('/account');
    return res.render('/accoint');
  }
  @UseGuards(BitbucketGuard)
  @Get('/auth/bitbucket/login')
  @Bind()
  async bitbucketAuth(@Res() res: Response) {
    res.redirect('/account');
    return res.render('/account');
  }

  @UseGuards(AuthenticatedGuard)
  @Get('account')
  @Render('account')
  userAccount(@Req() req) {
    return { user: req.user, message: this.appService.devprofileAccount() };
  }
}
