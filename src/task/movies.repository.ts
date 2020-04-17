import { EntityRepository, Repository } from "typeorm";
import { Movies } from "./task.entity";

@EntityRepository(Movies)
export class MoviesRepository extends Repository<Movies> {
    async getMovies(): Promise<Movies[]> {
        const query = this.createQueryBuilder('movies');
        return await query.getMany();
    }

}