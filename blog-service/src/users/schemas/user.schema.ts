import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Comment } from 'src/comments/schemas/comment.schema';

export type UserDocument = HydratedDocument<User>;

@Schema({ 
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    }
})
export class User {
  _id: string;

  @Prop()
  username: string;

  @Prop()
  avatarUrl: string;

  @Prop({ type: [Types.ObjectId], ref: 'Comment' })
  comment: Comment[];
}

export const UserSchema = SchemaFactory.createForClass(User);