import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { MoviesModule } from './movies/movies.module';
import { UsersModule } from './users/users.module';
import { GenreModule } from './genre/genre.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), MoviesModule, UsersModule, GenreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
  