export class EmailUnavailableExc extends Error {
  constructor() {
    super("Email not available");
  }
}
