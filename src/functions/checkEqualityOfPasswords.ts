export function checkEqualityOfPasswords(
  password: string | undefined,
  confirmPassword: string | undefined
) {
  return confirmPassword === password;
}
