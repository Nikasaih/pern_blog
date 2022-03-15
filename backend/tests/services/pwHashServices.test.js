import { hashPassword } from "../../src/services/pwHashServices.js";

/* eslint-disable no-undef */
describe("pwHashServices", () => {
  // BASIC AUTHORITY
  it("test hashPassword", () => {
    const password = "test_pwd";
    const [hash] = hashPassword(password);
    expect(hash !== password).toBe(true);
  });

  it("test can match hashed pwd with input password", () => {
    const password = "test_pwd";
    const [hash, salt] = hashPassword(password);
    const [rehash] = hashPassword(password, salt);
    expect(hash === rehash).toBe(true);
  });
});
