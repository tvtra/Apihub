import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';

@Controller('paypal')
export class PaypalController {
  constructor() {}
  
  @Post('callback')
  async paypalCallback(@Req() req) {
    console.log(req.body);
    return req.body
  }
  
}