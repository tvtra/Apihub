import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';

@Controller()
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @MessagePattern('createBlog')
  create(@Payload() createBlogDto: CreateBlogDto) {
    return this.blogsService.create(createBlogDto);
  }

  @MessagePattern('findAllBlogs')
  findAll() {
    return this.blogsService.findAll();
  }

  @MessagePattern('findOneBlog')
  findOne(@Payload() id: string) {
    return this.blogsService.findOne(id);
  }

  @MessagePattern('updateBlog')
  update(@Payload() payload: any) {
    const id = payload.id;
    const updateUserDto = payload.updateCommentDto;
    return this.blogsService.update(id, updateUserDto);
  }

  @MessagePattern('removeBlog')
  remove(@Payload() id: string) {
    return this.blogsService.remove(id);
  }
}
