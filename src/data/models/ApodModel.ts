import { Apod } from '../../domain/entities/Apod';

export class ApodModel implements Apod {
  title: string;
  explanation: string;
  url: string;
  date: string;

  constructor(data: any) {
    this.title = data.title;
    this.explanation = data.explanation;
    this.url = data.url;
    this.date = data.date;
  }

  static fromJson(json: any): ApodModel {
    return new ApodModel(json);
  }
}

// Aqui estamos usando el patron de diseño Factory para crear instancias de ApodModel