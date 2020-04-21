import { EntityRepository, Repository, getConnection, UpdateQueryBuilder } from "typeorm";
import { Movies } from "./movies.entity";
import { createMoviesDto } from "./dto/create-movies.dto";
import { Genre } from "src/genre/genre.entity";

@EntityRepository(Movies)
export class MoviesRepository extends Repository<Movies> {
    async getMovies(): Promise<Movies[]> {
        const query = this.createQueryBuilder('movies')
            .leftJoinAndSelect("movies.genres", "genre");
        
        return await query.getMany();
    }

    async createMovies(
        createMoviesDto: createMoviesDto,
        lista_genres: Array<Genre>
    ): Promise<Movies> {
        const movie = new Movies();
        movie.name = createMoviesDto.name;
        movie.classification = createMoviesDto.classification;
        movie.genres = lista_genres;
        await movie.save();
        
        return movie;
    }
    
}