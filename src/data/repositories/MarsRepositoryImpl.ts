import { MarsPhoto } from '../../domain/entities/MarsPhoto';
import { MarsPhotoRepository } from '../../domain/repositories/MarsRepository';
import { MarsRemoteDatasource } from '../datasources/MarsRemoteDatasource';

export class MarsRepositoryImpl implements MarsPhotoRepository {
  datasource = new MarsRemoteDatasource();

  getPhotos(date: string): Promise<MarsPhoto[]> {
    return this.datasource.getPhotosByDate(date);
  }
}
