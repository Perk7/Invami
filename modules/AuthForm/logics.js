import auth from "@react-native-firebase/auth"

export async function sendVerificationCode(number) {
  const confirm = await auth().signInWithPhoneNumber(number);
  return confirm
}

export async function confirmVerificationCode(confirmObj, code) {
  const credentials = await confirmObj.confirm(code);
  return credentials
} 