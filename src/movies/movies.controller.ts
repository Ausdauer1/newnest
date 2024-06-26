import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/Movie.entity';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {

    }

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll()
    }
    
    @Get(":id")
    getOne(@Param("id") movieId: string) : Movie {
        return this.moviesService.getOne(movieId)
    }
    
    @Post()
    create(@Body() movieData) {
        console.log(movieData)
        return movieData
    }
    
    @Delete(":id") 
    remove(@Param("id") movieId:string,) {
        return this.moviesService.deleteOne(movieId)
    }
    
    @Patch('/:id')
    path(@Param('id') movieId:string, @Body() updateData) {
        return {
            updatedMovie: movieId,
            ...updateData
        }
    }
    
    @Get("search")
    search(@Query("year") searchingYear : string) {
        return `We are searching for a movie made after ${searchingYear}`
    }
    
}
