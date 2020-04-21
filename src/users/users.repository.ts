import { EntityRepository, Repository } from "typeorm";
import { Users } from "./users.entity";
import { createUsersDto } from "./dto/create-users.dto";
import { Genre } from "src/genre/genre.entity";

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {
    async getUsers(): Promise<Users[]> {
        const query = this.createQueryBuilder('users')
        .leftJoinAndSelect("users.fgenre", "genre");
        
        return await query.getMany();
    }

    async createUsers(
        createUsersDto: createUsersDto, 
        lista_genres: Array<Genre>
    ): Promise<Users> {
        try {
            const user = new Users();

            user.name   = createUsersDto.name;
            user.genero = createUsersDto.genero;
            user.email  = createUsersDto.email;
            user.fgenre = lista_genres;

            await user.save();

            return user;
        } catch(err){
            return Promise.reject(err)
        }
    }
}