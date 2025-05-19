import { AsteroidsRemoteDatasource } from '../datasources/AsteroidsRemoteDatasource';
import { AsteroidsRepository } from '../../domain/repositories/AsteroidsRepository';

export class AsteroidsRepositoryImpl implements AsteroidsRepository {
  private datasource: AsteroidsRemoteDatasource;

  constructor() {
    this.datasource = new AsteroidsRemoteDatasource();
  }

  async getAsteroids() {
    return await this.datasource.getAsteroids();
  }
}
