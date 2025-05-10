import { MarsPhoto } from '../../domain/entities/MarsPhoto';

export class MarsPhotoModel {
  static fromJson(json: any): MarsPhoto {
    return {
      id: json.id,
      img_src: json.img_src,
      earth_date: json.earth_date,
      rover_name: json.rover.name,
      camera_name: json.camera.full_name,
    };
  }
}
