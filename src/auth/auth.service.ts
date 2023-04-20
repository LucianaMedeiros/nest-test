import { Injectable } from '@nestjs/common';
import { User } from 'src/interface/Iuser';
import { MailService } from 'src/mail/mail.service';
import { Users } from 'src/static/Users';

@Injectable()
export class AuthService {
  constructor(private mailService: MailService) {}

  async signUp() {
    let user = Users;
    const token = Math.floor(1000 + Math.random() * 9000).toString();
    // create user in db
    // ...
    // send confirmation mail
    await this.mailService.sendUserConfirmation();
  }
}
