import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Blog } from 'src/blogs/schemas/blog.schema';
import { User } from 'src/users/schemas/user.schema';

export type CommentDocument = HydratedDocument<Comment>;

@Schema({ 
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    }
})
export class Comment {
  _id: string;

  // @Prop({ type: Types.ObjectId, ref: Blog.name })
  // blog: Blog;
  
  @Prop({ type: Types.ObjectId, ref: User.name })
  owner: User;

  @Prop({ type: [Types.ObjectId], ref: User.name })
  tagUser: User[];

  @Prop()
  message: string;

  @Prop()
  isReplyComment: boolean;

  @Prop({ type: Types.ObjectId, ref: Comment.name })
  parentComment: Comment;

  @Prop({ type: [Types.ObjectId], ref: Comment.name })
  replyComment: Comment[];
}

export const CommentSchema = SchemaFactory.createForClass(Comment);