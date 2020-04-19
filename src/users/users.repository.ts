import { EntityRepository, Repository } from "typeorm";
import { Users } from "./users.entity";
import { createUsersDto } from "./dto/create-users.dto";

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {
    async getUsers(): Promise<Users[]> {
        const query = this.createQueryBuilder('users');
        
        return await query.getMany();
    }

    async createUsers(createUsersDto: createUsersDto): Promise<Users> {
        const user = new Users();
        user.nome = createUsersDto.nome;
        user.genero = createUsersDto.genero;
        user.genero_favorito = createUsersDto.genero_favorito;
        user.email = createUsersDto.email;
        user.telefone = createUsersDto.telefone;
        await user.save();
        
        return user;
    }
}