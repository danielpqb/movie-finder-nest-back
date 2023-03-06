import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OmdbModule } from './app/omdb/omdb.module';
import { OmdbService } from './app/omdb/omdb.service';

@Module({
  imports: [OmdbModule],
  controllers: [AppController],
  providers: [AppService, OmdbService],
})
export class AppModule {}
