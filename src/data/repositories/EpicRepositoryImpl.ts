// src/data/repositories/EpicRepositoryImpl.ts
import { fetchSolarImage } from '../api/epicApi';
import { EpicRepository } from '../../domain/repositories/EpicRepository';

export class EpicRepositoryImpl implements EpicRepository {
  public async getSolarImage(): Promise<any> {
    return fetchSolarImage();
  }
}
