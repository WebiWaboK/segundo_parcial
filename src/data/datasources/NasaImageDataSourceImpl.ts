import { NasaImageDataSource } from '../../domain/repositories/NasaImageRepository';
import { nasaImageApi } from '../api/nasaImageApi';
import { NasaImageModel } from '../models/NasaImageModel';

export class NasaImageDataSourceImpl implements NasaImageDataSource {
  async searchByQuery(query: string) {
    const response = await nasaImageApi.get('/search', { params: { q: query, media_type: 'image' } });
    return response.data.collection.items.map((item: any) => NasaImageModel.fromJson(item));
  }
}
