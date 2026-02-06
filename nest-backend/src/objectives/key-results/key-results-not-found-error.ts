export class KeyResultsNotFoundError extends Error {
  constructor(public keyResultId: string) {
    super(`Key result with id ${keyResultId} not found`);
  }
}
