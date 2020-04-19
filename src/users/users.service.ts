import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { Users } from './users.entity';
import { createUsersDto } from './dto/create-users.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersRepository)
        private usersRepository: UsersRepository
    ){}

    async findAll(): Promise<Users[]>{
        return this.usersRepository.getUsers();
    }

    async getById(id: number): Promise<Users> {
        const found = await this.usersRepository.findOne(id);

        if (!found) {
            throw new NotFoundException(`Usuário de "${id}" não foi encontrado`);
        }

        return found;
    }

    async postUsers(createUsersDto: createUsersDto): Promise<Users>{
        return this.usersRepository.createUsers(createUsersDto);
    }

    async updateUsers(id: number, updateUsersDto: createUsersDto): Promise<Users>{
        await this.usersRepository.update(id, updateUsersDto)
        return this.getById(id);
    }

    async removeUsers(id: number): Promise<Users>{
        this.usersRepository.delete(id)
        return this.getById(id);
    }


}
