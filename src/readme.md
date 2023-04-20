npm install --save @nestjs-modules/mailer nodemailer handlebars
npm install --save-dev @types/nodemailer

nest g module mail
nest g service mail

mkdir src/mail/templates

configurar mail.module
alterar nest-cli.json
configurar mail.service

nest g module auth
nest g service auth
nest g controller auth

configurar auth.module

npm i --save @nestjs/config
alterar app.module

criar .env na raiz do projeto
configurar .env

alterar configurar no mail.module, inserir configs .env

https://github.com/notiz-dev/nestjs-mailer







