import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { Users } from './users.entity';
import { createUsersDto } from './dto/create-users.dto';
import { GenreRepository } from 'src/genre/genre.repository';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersRepository)
        @InjectRepository(GenreRepository)
        private usersRepository: UsersRepository,
        private genreRepository: GenreRepository
        
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
        let lista_genres = []

        // [1, 2]
        for(let id_genre of createUsersDto.fgenre){
            let found = await this.genreRepository.findOne(id_genre);
            if (found) {
                lista_genres.push(found)
            }
        }
        return this.usersRepository.createUsers(createUsersDto, lista_genres);
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
