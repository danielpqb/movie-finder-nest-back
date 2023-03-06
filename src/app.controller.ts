import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/v1')
  async getMovieData(@Query('title') title: string) {
    //consume API
    // return 'this.appService.getMovieData(title)';
  }
}
