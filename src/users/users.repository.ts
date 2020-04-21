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
        user.name = createUsersDto.name;
        user.dirth = createUsersDto.dirth;
        user.gender = createUsersDto.gender;
        user.favorite_genre = createUsersDto.favorite_genre;
        user.email = createUsersDto.email;
        user.phone_number = createUsersDto.phone_number;
        await user.save();
        
        return user;
    }
}