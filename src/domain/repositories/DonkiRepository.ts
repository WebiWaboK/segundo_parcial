import { SpaceAlert } from '../entities/SpaceAlert';

export interface DonkiRepository {
  getAlerts(): Promise<SpaceAlert[]>;
}
