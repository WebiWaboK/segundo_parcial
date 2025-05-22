import { NasaImageDataSource } from '../repositories/NasaImageRepository';
import { NasaImage } from '../entities/NasaImage';

export class SearchImagesUseCase {
  constructor(private repo: NasaImageDataSource) {}

  execute(query: string): Promise<NasaImage[]> {
    return this.repo.searchByQuery(query);
  }
}
