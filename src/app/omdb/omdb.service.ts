import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OmdbService {
  constructor(private readonly httpService: HttpService) {}

  async getOmdbData(title: string): Promise<boolean> {
    const res = this.httpService.get(
      'http://www.omdbapi.com/?i=tt3896198&apikey=36b1e6c6',
    );
    console.log(res);

    return false;
  }
}
