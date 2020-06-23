import { Controller, Get, Post, Put, Delete, Param, UsePipes, Body, ValidationPipe, ParseIntPipe, Query } from '@nestjs/common';
import { GenreService } from './genre.service';
import { Genre } from './genre.entity';
import { createGenreDto } from './dto/create-genre.dto';

@Controller('genre')
export class GenreController {
    constructor(
        private genreService: GenreService
    ){}

    @Get()
    async getGenre(@Query('grouped') grouped: boolean): Promise<Genre[]> {
        if(grouped){
            return this.genreService.get_genre_by_fav();    
        } else {
            return this.genreService.findAll();
        }
    }

    @Post()
    @UsePipes(ValidationPipe)
    async postGenre(@Body() createGenreDto: createGenreDto): Promise<Genre> {
        return this.genreService.postGenre(createGenreDto);
    }

    @Get('/:id')
    async getGenreById(@Param('id', ParseIntPipe) id: number): Promise<Genre> {
        return this.genreService.getById(id);
    }

    @Put('/:id')
    async updateGenre(
        @Param('id', ParseIntPipe) id: number, 
        @Body()updateGenreDto: Genre
    ): Promise<Genre>{
        return this.genreService.updateGenre(id, updateGenreDto);
    }

    @Delete('/:id')
    async removeGenre(@Param('id', ParseIntPipe) id: number): Promise<Genre>{
        return this.genreService.removeGenre(id);
    }
}
