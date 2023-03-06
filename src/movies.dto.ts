import { IsNotEmpty, IsString } from 'class-validator';

export class MovieDto {
  @IsString()
  @IsNotEmpty()
  public Title: string;

  @IsString()
  @IsNotEmpty()
  public Plot: string;

  @IsString()
  @IsNotEmpty()
  public Actors: string;

  @IsString()
  @IsNotEmpty()
  public imdbRating: string;
}
