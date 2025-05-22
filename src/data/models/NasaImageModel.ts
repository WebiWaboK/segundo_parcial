import { NasaImage } from '../../domain/entities/NasaImage';

export class NasaImageModel implements NasaImage {
  title: string;
  description: string;
  imageUrl: string;

  constructor(data: any) {
    this.title = data.data[0]?.title || '';
    this.description = data.data[0]?.description || '';
    this.imageUrl = data.links[0]?.href || '';
  }

  static fromJson(json: any): NasaImageModel {
    return new NasaImageModel(json);
  }
}
