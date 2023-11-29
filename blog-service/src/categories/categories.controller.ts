import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller()
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @MessagePattern('createCategory')
  create(@Payload() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @MessagePattern('findAllCategories')
  findAll() {
    return this.categoriesService.findAll();
  }

  @MessagePattern('findOneCategory')
  async findOne(@Payload() id: string) {
    return this.categoriesService.findOne(id);
  }

  @MessagePattern('updateCategory')
  update(@Payload() payload: any) {
    const id = payload.id;
    const updateCategoryDto = payload.updateCategoryDto;
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @MessagePattern('removeCategory')
  remove(@Payload() id: string) {
    return this.categoriesService.remove(id);
  }
}
