// import { GoogleSignin } from '@react-native-google-signin/google-signin';

// GoogleSignin.configure({
//   webClientId: '100000000000-00000000000000000000000000000000.apps.googleusercontent.com',
//   iosClientId: '100000000000-00000000000000000000000000000000.apps.googleusercontent.com',
//   // androidClientId: '100000000000-00000000000000000000000000000000.apps.googleusercontent.com', // TODO: Change to the correct client id
//   forceCodeForRefreshToken: true,
//   scopes: ['email', 'profile'],
// });

const useAuthGoogle = () => {

  const signIn = async () => {
    try {
      // await GoogleSignin.configure();
      // const { type, data } = await GoogleSignin.signIn();
      // if (type === 'success') {
      //   return data.idToken;
      // }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return {
    signIn,
  }

};


export default useAuthGoogle;