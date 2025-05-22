import { NasaImage } from '../entities/NasaImage';

export interface NasaImageDataSource {
  searchByQuery(query: string): Promise<NasaImage[]>;
}
