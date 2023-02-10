import { ChangeTodo } from './dto/change-todo.dto';
import { CreateTodo } from './dto/create-todo.dto';
import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  HttpCode,
  Header,
  HttpStatus,
  Patch,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAll() {
    return this.todoService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.todoService.getOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Content Type', 'application/json')
  create(@Body() createTodo: CreateTodo) {
    return this.todoService.create(createTodo);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() changeTodo: ChangeTodo) {
    return this.todoService.update(id, changeTodo);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.todoService.delete(id);
  }
}
