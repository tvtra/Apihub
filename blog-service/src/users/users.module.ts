import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { CommentsModule } from 'src/comments/comments.module';

@Module({
  imports: [
    // forwardRef(() => CommentsModule),
    MongooseModule.forFeature([{
      name: User.name,
      schema: UserSchema,
  }]),
],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
