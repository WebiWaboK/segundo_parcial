import { Asteroid } from '../entities/Asteroid';

export interface AsteroidsRepository {
  getAsteroids(): Promise<Asteroid[]>;
}
