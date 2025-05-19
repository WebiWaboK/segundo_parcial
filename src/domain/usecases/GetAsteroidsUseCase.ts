import { AsteroidsRepository } from '../repositories/AsteroidsRepository';

export class GetAsteroidsUseCase {
  private repository: AsteroidsRepository;

  constructor(repository: AsteroidsRepository) {
    this.repository = repository;
  }

  async execute() {
    return await this.repository.getAsteroids();
  }
}
