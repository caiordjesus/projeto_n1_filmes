import { EntityRepository, Repository, getConnection, UpdateQueryBuilder } from "typeorm";
import { Movies } from "./movies.entity";
import { createMoviesDto } from "./dto/create-movies.dto";
import { updateMoviesDto } from "./dto/update-movies.dto";

@EntityRepository(Movies)
export class MoviesRepository extends Repository<Movies> {
    async getMovies(): Promise<Movies[]> {
        const query = this.createQueryBuilder('movies');
        return await query.getMany();
    }

    async createMovies(createMoviesDto: createMoviesDto): Promise<Movies> {
        const movie = new Movies();
        movie.name = createMoviesDto.name;
        movie.classification = createMoviesDto.classification;
        movie.genre = createMoviesDto.genre;
        movie.director = createMoviesDto.director;
        movie.duration = createMoviesDto.duration;
        movie.main_cast = createMoviesDto.main_cast;
        movie.favorite = createMoviesDto.favorite;
        await movie.save();
        
        return movie;
    }
}