export function passwordIsValid(password: string | undefined) {
  if (password && password?.length >= 8) return true;
  return false;
}
