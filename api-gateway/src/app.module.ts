import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaypalController } from './paypal.controller';
import { StripeController } from './stripe.controller';
import { BlogController } from './blog.controller';

@Module({
  imports: [],
  controllers: [
    AppController, 
    PaypalController, 
    StripeController, 
    BlogController
  ],
  providers: [AppService],
})
export class AppModule {}
