import { DonkiRepository } from '../repositories/DonkiRepository';

export class GetSpaceAlertsUseCase {
  constructor(private repository: DonkiRepository) {}

  async execute() {
    return await this.repository.getAlerts();
  }
}
