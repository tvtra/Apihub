import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';

@Controller('stripe')
export class StripeController {
  constructor() {}

  @Client({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'wallet_service_queue',
      queueOptions: {
        durable: false
      },
    },
  })
  client: ClientProxy;

  @Post('checkout')
  checkout(@Body() payload: any) {
    return this.client.send('stripeCheckout', payload)
  }

  @Post('webhook')
  stripeCallback(@Req() req) {
    console.log(req.body);
    return req.body;
  }
}