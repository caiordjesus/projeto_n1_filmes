import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';
import { Movies } from './task.entity';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Get()
    async getMovies(): Promise<Movies[]> {
        return this.taskService.findAll();
    }
}
