import { ApodRepository } from '../../domain/repositories/ApodRepository';
import { Apod } from '../../domain/entities/Apod';
import { ApodDatasource } from '../datasources/ApodRemoteDatasource';
import { storageService } from '../../services/storageService';

export class ApodRepositoryImpl implements ApodRepository {
  private datasource = new ApodDatasource();

  async getApod(): Promise<Apod> {
    try {
      const apod = await this.datasource.fetchApod();
      await storageService.save('apod', apod);
      return apod;
    } catch (error) {
      const cached = await storageService.load('apod');
      if (cached) return cached;
      throw new Error('No data available');
    }
  }
}
