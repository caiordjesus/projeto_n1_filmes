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

    async get_genre_by_fav(): Promise<Genre[]>{
        const _query = `
            select 
                name, 
                count(*) as qtd_fav
            from 
                genre g
            inner join 
                users_fgenre_genre fgenre on fgenre.genreId = g.id
            group by 
                g.id
        `;
        const result = await this.query(_query)
        let ret_list = []
        for(let row of result){
            ret_list.push({
                genre: row.name,
                qtd: row.qtd_fav
            })
        }
        return Promise.resolve(ret_list)
    }

}