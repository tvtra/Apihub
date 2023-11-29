import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog } from './schemas/blog.schema';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogsService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<Blog>) {}

  async create(createBlogDto: CreateBlogDto) {
    const createdBlog = new this.blogModel(createBlogDto);
    return createdBlog.save();
  }

  async findAll() {
    return this.blogModel.find().exec();
  }

  async findOne(id: string) {
    return this.blogModel.findById(id)
    .populate({ path: 'owner', select: ['username', 'avatarUrl'] })
    .populate({ path: 'tagUser', select: ['username', 'avatarUrl'] })
    .populate({ path: 'replyBlog' });
  }

  async update(id: string, updateBlogDto: UpdateBlogDto) {
    console.log(updateBlogDto);
    return this.blogModel.findByIdAndUpdate(id, updateBlogDto);
  }

  async remove(id: string) {
    return this.blogModel.findByIdAndDelete(id);
  }
}
