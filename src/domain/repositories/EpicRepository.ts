import { EpicImage } from '../entities/EpicImage';

export interface EpicRepository {
  getEpicImage(): Promise<EpicImage>;
}
