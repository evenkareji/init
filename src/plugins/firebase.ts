import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';

import 'firebase/firestore';

const firebaseConfig: {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
} = {
  apiKey: 'AIzaSyB7c5Uh4IaJfb_Iy2vwpggPu0b87-Dm4SE',
  authDomain: 'vue-sns-65a9a.firebaseapp.com',
  projectId: 'vue-sns-65a9a',
  storageBucket: 'vue-sns-65a9a.appspot.com',
  messagingSenderId: '380540569265',
  appId: '1:380540569265:web:c939d233389957bc784490',
  measurementId: 'G-MQPN5FQMJE',
};

const app = initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(app);
