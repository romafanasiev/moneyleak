/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { initializeApp } from 'firebase/app';
import {
  doc,
  getDoc,
  getFirestore,
  QueryDocumentSnapshot,
  setDoc,
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  UserInfo,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export type AdditionalInformation = {
  displayName?: string;
};

export interface UserData {
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  displayName: string;
  email: string;
  uid: string;
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDnBTdhhzmLcUvF3jV29M-eFMXWJvuqH0E',
  authDomain: 'moneyleak-ba161.firebaseapp.com',
  projectId: 'moneyleak-ba161',
  storageBucket: 'moneyleak-ba161.appspot.com',
  messagingSenderId: '1006296637333',
  appId: '1:1006296637333:web:47ee853afb229a0f08e09c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();

export async function createUserDocumentFromAuth(
  userAuth: UserInfo,
  additionalInformation = {} as AdditionalInformation,
): Promise<void | QueryDocumentSnapshot<UserData>> {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error);
    }
  }
  return userSnapshot as QueryDocumentSnapshot<UserData>;
}

export async function createAuthUserWithEmailAndPassword(
  email: string | undefined,
  password: string | undefined,
) {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function signInAuthUserWithEmailAndPassword(
  email: string | undefined,
  password: string | undefined,
) {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);
