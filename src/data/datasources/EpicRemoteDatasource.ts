// src/data/datasources/EpicRemoteDatasource.ts
export class EpicRemoteDatasource {
  private readonly baseURL: string = 'https://epic.gsfc.nasa.gov/api/';

  public async fetchSolarImage(): Promise<any> {
    try {
      const response = await fetch(`${this.baseURL}natural/earth/0.jpg?api_key=DEMO_KEY`);
      if (!response.ok) {
        throw new Error('Error fetching solar image');
      }
      return await response.json();
    } catch (error) {
      throw new Error('Error fetching solar image');
    }
  }
}
