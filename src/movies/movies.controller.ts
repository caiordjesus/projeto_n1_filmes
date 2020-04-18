import { MoviesService } from './movies.service';
import { Controller, Get, Post, UsePipes, ValidationPipe, Body, Param, ParseIntPipe, Put, Patch } from '@nestjs/common';
import { Movies } from './movies.entity';
import { createMoviesDto } from './dto/create-movies.dto';
@Controller('movies')
export class MoviesController {
    constructor(
        private moviesService: MoviesService
    ){}

    @Get()
    async getMovies(): Promise<Movies[]> {
        return this.moviesService.findAll();
    }

    @Post()
    @UsePipes(ValidationPipe)
    async postMovies(
        @Body()
        createMoviesDto: createMoviesDto): Promise<Movies> {
        return this.moviesService.postMovies(createMoviesDto);
    }

    @Get('/:id')
    async getMoviesById(@Param('id', ParseIntPipe) id: number): Promise<Movies> {
        return this.moviesService.getById(id);
    }

    @Put('/:id')
    async updateMovies(@Param('id', ParseIntPipe) id: number, @Body()updateMoviesDto: Movies): Promise<Movies>{
        console.log('passei aqui')
        return this.moviesService.updateMovies(id, updateMoviesDto);
    }
}

