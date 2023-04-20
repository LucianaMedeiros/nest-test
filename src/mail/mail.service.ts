import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/interface/Iuser';
import { Users } from 'src/static/Users';

@Injectable()
export class MailService {

  constructor(private mailerService: MailerService) {
    
  }

  async sendUserConfirmation(  ) {
   // const url = `example.com/auth/confirm?token=${token}`;

    await this.mailerService.sendMail({
      to:  Users.email,
      subject: 'Bem vindo ao app do Nest! Confirme seu Email',
      template: './confirmation',
      context: {
        name: Users.names,
       
      },
    });
  }

  public enviaOutlook(): void {
    this.mailerService
      .sendMail({
        to: 'lu.vmedeiros@outlook.com',
        from: 'devedsonbelem@outlook.com',
        subject: 'Testing Nest MailerModule ✔',
        template: './confirmation',
        context: {
          code: 'cf1a3f828287',
          username: 'john doe',
        },
      })
      .then(() => {})
      .catch(() => {});
  }
}
