import { Controller, Get, Post } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';
import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService, 
    public service: MailService) {

  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('envia')
  envioDeEmail(): string{
	 this.service.sendUserConfirmation();
	 return 'Email enviado'
  }
  
}
