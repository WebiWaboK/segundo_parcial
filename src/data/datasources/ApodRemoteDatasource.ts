import { apodApi } from '../api/apodApi';
import { ApodModel } from '../models/ApodModel';

export class ApodDatasource {
  async fetchApod(): Promise<ApodModel> {
    const response = await apodApi.get('/apod');
    return ApodModel.fromJson(response.data);
  }
}
