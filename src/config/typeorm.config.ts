import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'projeto_n1',
    entities: [__dirname + '/../**/*.entity.{js, ts}'], // caso não coloque {js, ts} não funciona!!!
    synchronize: true,
    logging: true,
    logger: 'file', 
    cache: false, 
} 