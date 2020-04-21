import { EntityRepository, Repository, getConnection, UpdateQueryBuilder } from "typeorm";
import { Genre } from "./genre.entity";
import { createGenreDto } from "./dto/create-genre.dto";

@EntityRepository(Genre)
export class GenreRepository extends Repository<Genre> {
    async getGenre(): Promise<Genre[]> {
        const query = this.createQueryBuilder('genre');
        
        return await query.getMany();
    }

    async createGenre(createGenreDto: createGenreDto): Promise<Genre> {
        const genre = new Genre();
        genre.name = createGenreDto.name;
        
        await genre.save();
        
        return genre;
    }

}