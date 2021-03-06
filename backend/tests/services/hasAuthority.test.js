import {
  hasAdminAuthority,
  hasAuthorAuthority,
  hasBasicAuthority,
} from "../../src/services/hasAuthorityServices.js";
import { UserRole } from "../../src/utils/userRoleEnum.js";

/* eslint-disable no-undef */
describe("hasAuthorityServices", () => {
  // BASIC AUTHORITY
  it("basic user hasBasicAuthority", () => {
    const user = { role: UserRole.BASIC };
    expect(hasBasicAuthority(user.role)).toBe(true);
  });

  it("author user hasBasicAuthority", () => {
    const user = { role: UserRole.AUTHOR };
    expect(hasBasicAuthority(user.role)).toBe(true);
  });

  it("admin user hasBasicAuthority", () => {
    const user = { role: UserRole.ADMIN };
    expect(hasBasicAuthority(user.role)).toBe(true);
  });

  // AUTHOR AUTHORITY
  it("basic user !hasAuthorAuthority", () => {
    const user = { role: UserRole.BASIC };
    expect(hasAuthorAuthority(user.role)).toBe(false);
  });

  it("author user hasAuthorAuthority", () => {
    const user = { role: UserRole.AUTHOR };
    expect(hasAuthorAuthority(user.role)).toBe(true);
  });

  it("admin user hasAuthorAuthority", () => {
    const user = { role: UserRole.ADMIN };
    expect(hasAuthorAuthority(user.role)).toBe(true);
  });

  // ADMIN AUTHORITY
  it("basic user !hasAdminAuthority", () => {
    const user = { role: UserRole.BASIC };
    expect(hasAdminAuthority(user.role)).toBe(false);
  });

  it("author user !hasAdminAuthority", () => {
    const user = { role: UserRole.AUTHOR };
    expect(hasAdminAuthority(user.role)).toBe(false);
  });

  it("admin user hasAdminAuthority", () => {
    const user = { role: UserRole.ADMIN };
    expect(hasAdminAuthority(user.role)).toBe(true);
  });
});
