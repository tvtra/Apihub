import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './schemas/comment.schema';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name)
    // @Inject(forwardRef(() => UsersService))
    private commentModel: Model<Comment>
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    const createdComment = new this.commentModel(createCommentDto);
    return createdComment.save();
  }

  async findAll() {
    return this.commentModel.find().exec();
  }

  async findOne(id: string) {
    return this.commentModel.findById(id)
    .populate({ path: 'owner', select: ['username', 'avatarUrl'] })
    .populate({ path: 'tagUser', select: ['username', 'avatarUrl'] })
    .populate({ path: 'parentComment' })
    .populate({ path: 'replyComment' });
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    console.log(updateCommentDto['replyComment']);
    return this.commentModel.findByIdAndUpdate(id, updateCommentDto);
  }

  async remove(id: string) {
    return this.commentModel.findByIdAndDelete(id);
  }
}
