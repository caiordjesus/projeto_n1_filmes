import { Controller, Get, Post, UsePipes, ValidationPipe, Body, Param, ParseIntPipe, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';
import { createUsersDto } from './dto/create-users.dto';

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService
    ){}

    @Get()
    async getUsers(): Promise<Users[]> {
        return this.usersService.findAll();
    }

    @Post()
    @UsePipes(ValidationPipe)
    async postUsers(@Body() createUsersDto: createUsersDto): Promise<Users> {
        return this.usersService.postUsers(createUsersDto);
    }

    @Get('/:id')
    async getUsersById(@Param('id', ParseIntPipe) id: number): Promise<Users> {
        return this.usersService.getById(id);
    }

    @Put('/:id')    
    async updateUsers(@Param('id', ParseIntPipe) id: number, @Body()updateUsersDto: Users): Promise<Users>{
        return this.usersService.updateUsers(id, updateUsersDto);
    }

    @Delete('/:id')
    async removeUsers(@Param('id', ParseIntPipe) id: number): Promise<Users>{
        return this.usersService.removeUsers(id);
    }
}
