// src/strategies/SearchByTitleStrategy.ts
export interface SearchStrategy {
  execute(query: string): Promise<any[]>;
}
