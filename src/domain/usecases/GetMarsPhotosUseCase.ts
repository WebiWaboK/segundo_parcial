import { MarsPhotoRepository } from '../repositories/MarsRepository';
import { MarsPhoto } from '../entities/MarsPhoto';

export class GetMarsPhotosUseCase {
  constructor(private repository: MarsPhotoRepository) {}

  execute(date: string): Promise<MarsPhoto[]> {
    return this.repository.getPhotos(date);
  }
}
