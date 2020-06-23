import { Injectable, NotFoundException } from '@nestjs/common';
import { Genre } from './genre.entity';
import { createGenreDto } from './dto/create-genre.dto';
import { GenreRepository } from './genre.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Movies } from 'src/movies/movies.entity';

@Injectable()
export class GenreService {
    constructor(
        @InjectRepository(GenreRepository)
        private genreRepository: GenreRepository
    ){}

    async findAll(): Promise<Genre[]>{
        return this.genreRepository.getGenre();
    }

    async get_genre_by_fav(): Promise<Genre[]>{
        return this.genreRepository.get_genre_by_fav();
    }

    async getById(id: number): Promise<Genre> {
        const found = await this.genreRepository.findOne(id);

        if (!found) {
            throw new NotFoundException(`Genero de "${id}" não foi encontrado`);
        }

        return found;
    }

    async postGenre(createGenreDto: createGenreDto): Promise<Genre>{
        return this.genreRepository.createGenre(createGenreDto);
    }

    async updateGenre(id: number, updateGenreDto: createGenreDto): Promise<Genre>{
        await this.genreRepository.update(id, updateGenreDto)
        return this.getById(id);
    }

    async removeGenre(id: number): Promise<Genre>{
        this.genreRepository.delete(id)
        return this.getById(id);
    }
}
