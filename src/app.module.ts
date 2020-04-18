import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { TaskModule } from './task/task.module';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TaskModule, MoviesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
