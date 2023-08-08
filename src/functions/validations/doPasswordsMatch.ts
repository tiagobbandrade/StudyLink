export function doPasswordsMatch(
  password: string,
  confirmPassword: string
): boolean {
  return password == confirmPassword;
}
