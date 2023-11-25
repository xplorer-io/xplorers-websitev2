import { IUser } from "../types/User";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const firebaseConfig = {
  apiKey: `${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`,
  authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}`,
  projectId: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${process.env.NEXT_PUBLIC_FIREBSE_APP_ID}`,
  measurementId: `${process.env.NEXT_PUBLIC_FIREBSE_MEASUREMENT_ID}`,
};

const firebaseApp = initializeApp(firebaseConfig);

//export auth
export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();

export const SignInWithGoogle = async (): Promise<IUser | undefined> => {
  return signInWithPopup(auth, googleAuthProvider)
    .then((result) => {
      const user = result.user;

      return {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      } as IUser;
    })
    .catch((error) => {
      console.log(error);
      return undefined;
    });
};

export const SignOutUser = async () => {
  try {
    const user = await getAuth().signOut();
    return user;
  } catch (error) {
    throw error;
  }
};

export const GetUserStatus = () => {
  try {
    return useAuthState(getAuth());
  } catch (error) {
    throw error;
  }
};
