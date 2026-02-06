export class ObjectiveNotFoundError extends Error {
  constructor(public objectiveId: string) {
    super(`objective with id not found ${objectiveId}`);
  }
}
