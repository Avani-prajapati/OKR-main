export class KeyResultDuplicateError extends Error {
  constructor(description: string) {
    super(`Key result with description already exists: ${description}`);
  }
}
