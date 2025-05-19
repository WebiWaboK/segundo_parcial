import { fetchEpicData } from '../api/epicApi';

export class EpicRemoteDatasource {
  async getEpicImage() {
    const data = await fetchEpicData();
    if (data.length === 0) throw new Error('No data');

    const image = data[0]; // Tomamos la primera imagen
    const dateParts = image.date.split(' ')[0].split('-');
    const [year, month, day] = dateParts;

    const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/jpg/${image.image}.jpg`;

    return {
      url: imageUrl,
      caption: image.caption,
    };
  }
}
