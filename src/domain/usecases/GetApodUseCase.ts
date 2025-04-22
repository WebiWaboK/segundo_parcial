import { ApodRepository } from '../repositories/ApodRepository';
import { Apod } from '../entities/Apod';

export class GetApodUseCase {
  constructor(private repository: ApodRepository) {}

  async execute(): Promise<Apod> {
    return this.repository.getApod();
  }
}
