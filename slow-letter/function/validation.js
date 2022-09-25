export function LengthCheck(pswValue) {
  const checkLength = /.{8,16}/;
  if (!checkLength.test(pswValue.length)) {
    // errMsg = "Password need to be 8~16 letters";
  }
  return checkLength.test(pswValue);
}
export function CapCheck(pswValue) {
  const checkUpper = /(?=.*?[A-Z])/;
  if (!checkUpper.test(pswValue)) {
    //errMsg = "You nedd to have at least one Uppecase letter";s
  }
  return checkUpper.test(pswValue);
}
export function LowCheck(pswValue) {
  const checkLower = /(?=.*?[a-z])/;
  if (!checkLower.test(pswValue)) {
    // errMsg = "You need to have at least one Lowercase letter";
  }
  return checkLower.test(pswValue);
}
export function SpecialLetterCheck(pswValue) {
  const checkSpecial = /(?=.*?[#?!@$%^&*-])/;
  if (!checkSpecial.test(pswValue)) {
    // errMsg = "You need to have  #?!@$%^&*-";
  }
  return checkSpecial.test(pswValue);
}

export function EmailCheck(emailInput) {
  const checkEmail = /(?=.*?[@])/;
  if (!checkEmail.test(emailInput)) {
    //errMsg = "Your Email is not in email format"
  }
  return checkEmail.test(emailInput);
}
