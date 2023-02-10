import { ChangeTodo } from './dto/change-todo.dto';
import { CreateTodo } from './dto/create-todo.dto';
import { Todo } from './model/todo.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo) private todoModel: typeof Todo) {}

  async getAll(): Promise<Todo[]> {
    return this.todoModel.findAll();
  }

  async getOne(id: string): Promise<Todo> {
    return this.todoModel.findOne({
      where: { id },
    });
  }

  async create(createTodo: CreateTodo): Promise<Todo> {
    const todo = new Todo();
    todo.title = createTodo.title;
    todo.done = createTodo.done;
    return todo.save();
  }

  update(id: string, changeTodo: ChangeTodo): Promise<[affectedCount: number]> {
    return this.todoModel.update({ ...changeTodo }, { where: { id } });
  }

  async delete(id: string): Promise<void> {
    const todo = await this.todoModel.findOne({ where: { id } });
    await todo.destroy();
  }
}
