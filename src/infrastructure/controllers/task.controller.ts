import {Controller, Get} from '@nestjs/common';
import { Task } from 'src/domain/model/task.model';

@Controller('tasks')
export class TaskController{
    @Get()
    getTasks() : any[] {
        const tasks: Task[] = [
            { id: 1, name: 'Task 1', dueDate: new Date('2024-10-29'), status: true },
            { id: 2, name: 'Task 2', dueDate: new Date('2024-10-30'), status: false },
            { id: 3, name: 'Task 3', dueDate: new Date('2024-11-02'), status: false },
            { id: 4, name: 'Task 4', dueDate: new Date('2024-11-03'), status: false },
        ];

        return tasks.map(tasks => ({
            ...tasks,
                dueDate: tasks.dueDate.toISOString().split('T')[0],
                status: tasks.status ? 'Complete' : 'Incomplete'
        }));
    }
}