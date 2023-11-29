import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModule } from './blogs/blogs.module';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/apihub'),
    CategoriesModule, 
    UsersModule, 
    CommentsModule,
    BlogsModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
