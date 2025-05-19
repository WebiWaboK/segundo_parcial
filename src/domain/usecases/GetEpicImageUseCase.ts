import { EpicRepository } from '../repositories/EpicRepository';

export class GetEpicImageUseCase {
  constructor(private repository: EpicRepository) {}

  async execute() {
    return this.repository.getEpicImage();
  }
}
