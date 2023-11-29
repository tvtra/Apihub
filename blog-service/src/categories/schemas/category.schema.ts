import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@Schema({ 
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    }
})
export class Category {
  _id: string;

  @Prop()
  categoryName: string;

  @Prop()
  categoryDescription: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);