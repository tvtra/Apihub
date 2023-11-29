import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller()
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @MessagePattern('createComment')
  create(@Payload() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @MessagePattern('findAllComments')
  findAll() {
    return this.commentsService.findAll();
  }

  @MessagePattern('findOneComment')
  findOne(@Payload() id: string) {
    return this.commentsService.findOne(id);
  }

  @MessagePattern('updateComment')
  update(@Payload() payload: any) {
    const id = payload.id;
    const updateUserDto = payload.updateCommentDto;
    return this.commentsService.update(id, updateUserDto);
  }

  @MessagePattern('removeComment')
  remove(@Payload() id: string) {
    return this.commentsService.remove(id);
  }
}
