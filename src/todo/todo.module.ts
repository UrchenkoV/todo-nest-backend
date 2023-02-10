import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { Todo } from './model/todo.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize/dist';

@Module({
  imports: [SequelizeModule.forFeature([Todo])],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
