import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { TaskModule } from './task/task.module';
import { MoviesRepository } from './task/movies.repository';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TaskModule, TypeOrmModule.forFeature([MoviesRepository])],
  controllers: [],
  providers: [],
})
export class AppModule {}
