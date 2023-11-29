import { Module, forwardRef } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from './schemas/comment.schema';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    // forwardRef(() => UsersModule),
    MongooseModule.forFeature([{
    name: Comment.name,
    schema: CommentSchema,
  }]),
],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
