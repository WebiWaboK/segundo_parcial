import { DonkiRepository } from '../../domain/repositories/DonkiRepository';
import { SpaceAlert } from '../../domain/entities/SpaceAlert';
import { DonkiRemoteDatasource } from '../datasources/DonkiRemoteDatasource';

export class DonkiRepositoryImpl implements DonkiRepository {
  private datasource = new DonkiRemoteDatasource();

  async getAlerts(): Promise<SpaceAlert[]> {
    return await this.datasource.getAlerts();
  }
}
