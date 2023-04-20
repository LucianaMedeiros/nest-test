import { Module } from '@nestjs/common';
import { MailModule } from 'src/mail/mail.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [MailModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
