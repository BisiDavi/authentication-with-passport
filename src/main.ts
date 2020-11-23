import { NestFactory } from '@nestjs/core';
import * as passport from 'passport';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as flash from 'connect-flash';
import * as session from 'express-session';
import { join } from 'path';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { UserService } from './user/user.service';

config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const userService: UserService = new UserService();

  userService.connectDB();

  app.use(
    session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'public/views'));
  app.setViewEngine('ejs');
  await app.listen(3000);
}
bootstrap();
