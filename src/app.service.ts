import { Injectable } from '@nestjs/common';
import { MovieDto } from './movies.dto';

@Injectable()
export class AppService {
  async getMovieData(title): Promise<MovieDto> {
    //convert to movieData

    return title;
  }
}
