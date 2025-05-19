import { fetchAsteroids } from '../api/asteroidsApi';

export class AsteroidsRemoteDatasource {
  async getAsteroids() {
    try {
      const data = await fetchAsteroids();
      return data;
    } catch (error) {
      throw new Error('Error in AsteroidsRemoteDatasource');
    }
  }
}
