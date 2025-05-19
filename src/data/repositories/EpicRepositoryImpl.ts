import { EpicRepository } from '../../domain/repositories/EpicRepository';
import { EpicImage } from '../../domain/entities/EpicImage';
import { EpicRemoteDatasource } from '../datasources/EpicRemoteDatasource';

export class EpicRepositoryImpl implements EpicRepository {
  private datasource = new EpicRemoteDatasource();

  async getEpicImage(): Promise<EpicImage> {
    return this.datasource.getEpicImage();
  }
}
