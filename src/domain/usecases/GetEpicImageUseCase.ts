// src/domain/usecases/GetEpicImageUseCase.ts
import { EpicRepository } from '../repositories/EpicRepository';

export class GetEpicImageUseCase {
  private repository: EpicRepository;

  constructor(repository: EpicRepository) {
    this.repository = repository;
  }

  public async execute(): Promise<any> {
    return this.repository.getSolarImage();
  }
}
