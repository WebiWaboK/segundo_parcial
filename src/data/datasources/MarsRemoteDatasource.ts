import { fetchMarsPhotos } from '../api/marsApi';
import { MarsPhoto } from '../../domain/entities/MarsPhoto';
import { MarsPhotoModel } from '../models/MarsPhotoModel';

export class MarsRemoteDatasource {
  async getPhotosByDate(date: string): Promise<MarsPhoto[]> {
    const data = await fetchMarsPhotos(date);
    return data.map((item: any) => MarsPhotoModel.fromJson(item));
  }
}
