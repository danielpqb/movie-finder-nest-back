import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class OmdbService {
  constructor(private readonly httpService: HttpService) {}

  async getImdbIdWithTitle(title: string) {
    const res = this.httpService.get(
      `http://www.omdbapi.com/?s=${title}&apikey=36b1e6c6`,
    );

    const result = (await lastValueFrom(res)).data;

    const getFirst = result['Search'][0];

    return getFirst['imdbID'];
  }

  async getOmdbData(imdbId: string) {
    const res = this.httpService.get(
      `http://www.omdbapi.com/?i=${imdbId}&apikey=36b1e6c6`,
    );

    const result = (await lastValueFrom(res)).data;

    return {
      title: result.Title,
      description: result.Plot,
      img: result.Poster,
      actors: result.Actors,
      rating: result.imdbRating,
    };
  }
}
