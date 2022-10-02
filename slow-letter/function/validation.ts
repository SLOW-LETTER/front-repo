export function lengthCheck(pswValue: string) {
  const checkLength = /.{8,16}/;

  return checkLength.test(pswValue);
}
export function capCheck(pswValue: string) {
  const checkUpper = /(?=.*?[A-Z])/;

  return checkUpper.test(pswValue);
}
export function lowCheck(pswValue: string) {
  const checkLower = /(?=.*?[a-z])/;

  return checkLower.test(pswValue);
}
export function specialLetterCheck(pswValue: string) {
  const checkSpecial = /(?=.*?[#?!@$%^&*-])/;

  return checkSpecial.test(pswValue);
}

export function emailValid(emailInput: string) {
  const checkEmail = /(?=.*?[@])/;

  return checkEmail.test(emailInput);
}
