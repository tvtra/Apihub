import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';

@Controller('blog')
export class BlogController {
  constructor() {}

  @Client({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'blog_service_queue',
      queueOptions: {
        durable: false
      },
    },
  })
  client: ClientProxy;

  // Category Api
  @Post('category')
  createCategory(@Body() payload: any) {
    return this.client.send('createCategory', payload)
  }

  @Get('category')
  findAllCategories() {
    return this.client.send('findAllCategories', {})
  }
  
  @Get('category/:id')
  findOneCategory(@Param('id') id: string) {
    return this.client.send('findOneCategory', id);
  }

  @Patch('category/:id')
  updateCategory(@Param('id') id: string, @Body() updateCategoryDto: any) {
    const payload = {
      'id': id,
      'updateCategoryDto': updateCategoryDto
    }
    return this.client.send('updateCategory', payload);
  }

  @Delete('category/:id')
  removeCategory(@Param('id') id: string) {
    return this.client.send('removeCategory', id);
  }

  // User Api
  @Post('user')
  createUser(@Body() payload: any) {
    return this.client.send('createUser', payload)
  }

  @Get('user')
  findAllUsers() {
    return this.client.send('findAllUsers', {})
  }
  
  @Get('user/:id')
  findOneUser(@Param('id') id: string) {
    return this.client.send('findOneUser', id);
  }

  @Patch('user/:id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: any) {
    const payload = {
      'id': id,
      'updateUserDto': updateUserDto
    }
    return this.client.send('updateUser', payload);
  }

  @Delete('user/:id')
  removeUser(@Param('id') id: string) {
    return this.client.send('removeUser', id);
  }

  // Comment Api
  @Post('comment')
  createComment(@Body() payload: any) {
    return this.client.send('createComment', payload)
  }

  @Get('comment')
  findAllComments() {
    return this.client.send('findAllComments', {})
  }
  
  @Get('comment/:id')
  findOneComment(@Param('id') id: string) {
    return this.client.send('findOneComment', id);
  }

  @Patch('comment/:id')
  updateComment(@Param('id') id: string, @Body() updateCommentDto: any) {
    const payload = {
      'id': id,
      'updateCommentDto': updateCommentDto
    }
    return this.client.send('updateComment', payload);
  }

  @Delete('comment/:id')
  removeComment(@Param('id') id: string) {
    return this.client.send('removeComment', id);
  }

    // Blog Api
    @Post('blog')
    createBlog(@Body() payload: any) {
      return this.client.send('createBlog', payload)
    }
  
    @Get('blog')
    findAllBlogs() {
      return this.client.send('findAllBlogs', {})
    }
    
    @Get('blog/:id')
    findOneBlog(@Param('id') id: string) {
      return this.client.send('findOneBlog', id);
    }
  
    @Patch('blog/:id')
    updateBlog(@Param('id') id: string, @Body() updateBlogDto: any) {
      const payload = {
        'id': id,
        'updateBlogDto': updateBlogDto
      }
      return this.client.send('updateBlog', payload);
    }
  
    @Delete('blog/:id')
    removeBlog(@Param('id') id: string) {
      return this.client.send('removeBlog', id);
    }
}