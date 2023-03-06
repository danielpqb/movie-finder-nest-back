import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { OmdbService } from './omdb.service';

@Module({
  imports: [HttpModule],
  providers: [OmdbService],
})
export class OmdbModule {}
