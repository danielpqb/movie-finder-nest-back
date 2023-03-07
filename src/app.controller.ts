import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { OmdbService } from './app/omdb/omdb.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly omdbService: OmdbService,
  ) {}

  @Get('/api/v1')
  async getMovieData(@Query('title') title: string) {
    const imdbId = await this.omdbService.getImdbIdWithTitle(title);
    const data = this.omdbService.getOmdbData(imdbId);

    return data;
  }
}
