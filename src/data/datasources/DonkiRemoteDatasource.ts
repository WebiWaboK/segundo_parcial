import { fetchSpaceAlerts } from '../api/donkiApi';

export class DonkiRemoteDatasource {
  async getAlerts() {
    return await fetchSpaceAlerts();
  }
}
