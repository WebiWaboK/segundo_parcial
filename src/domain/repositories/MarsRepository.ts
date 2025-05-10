import { MarsPhoto } from '../entities/MarsPhoto';

export interface MarsPhotoRepository {
  getPhotos(date: string): Promise<MarsPhoto[]>;
}
