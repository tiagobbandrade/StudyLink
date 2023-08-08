export function isValidPassword(password: string): boolean {
  return password.trim().length >= 8;
}
