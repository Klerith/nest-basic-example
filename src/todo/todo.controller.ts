import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Controller('todo')
export class TodoController {

  constructor(
    private readonly todoService: TodoService,
  ) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto): Todo {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  findAll(): Todo[] {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne( @Param('id', ParseIntPipe ) id: number ): Todo {
    return this.todoService.findOne( id );
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe ) id: number, 
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return this.todoService.update( id, updateTodoDto);
  }

  @Delete(':id')
  remove( @Param('id', ParseIntPipe ) id: number ) {
    return this.todoService.remove(id);
  }
}
