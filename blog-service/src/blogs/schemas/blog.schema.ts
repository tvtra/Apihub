import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Category } from 'src/categories/schemas/category.schema';
import { Comment } from 'src/comments/schemas/comment.schema';
import { User } from 'src/users/schemas/user.schema';

export type BlogDocument = HydratedDocument<Blog>;

@Schema({ 
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    }
})
export class Blog {
  _id: string;

  @Prop()
  isPublished: boolean;

  @Prop({ type: [Types.ObjectId], ref: Category.name })
  category: Category[];

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  content: string;

  @Prop()
  totalViews: number;

  @Prop()
  totalShares: number;

  @Prop()
  totalFavorites: number;

  @Prop()
  totalComments: number;

  @Prop({ type: [Types.ObjectId], ref: Comment.name })
  comment: Comment[];

  @Prop({ type: Types.ObjectId, ref: User.name })
  author: User;

  @Prop({ type: [Types.ObjectId], ref: User.name })
  favoritePerson: User[];
}

export const BlogSchema = SchemaFactory.createForClass(Blog);