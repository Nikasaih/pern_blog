export class CredentialNotMatchExc extends Error {
  constructor() {
    super("credential not match maybe one of them is bad");
  }
}
