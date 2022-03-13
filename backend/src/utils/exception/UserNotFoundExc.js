export class UserNotFoundExc extends Error {
  constructor() {
    super("user not found");
  }
}
