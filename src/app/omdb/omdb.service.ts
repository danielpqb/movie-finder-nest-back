import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class OmdbService {
  constructor(private readonly httpService: HttpService) {}

  async getOmdbData(title: string) {
    const res = this.httpService.get(
      `http://www.omdbapi.com/?s=${title}&apikey=36b1e6c6`,
    );

    const result = (await lastValueFrom(res)).data;

    const getFirst = result['Search'][0];

    return getFirst;
  }
}
