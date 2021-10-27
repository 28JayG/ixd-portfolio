import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDVm-3zBal_pdfyaKQRHJ2yCZ28vLPF99k',
  authDomain: 'ixd-studios.firebaseapp.com',
  projectId: 'ixd-studios',
  storageBucket: 'ixd-studios.appspot.com',
  messagingSenderId: '386730929176',
  appId: '1:386730929176:web:3b85b8766b6a1057f0276d',
  measurementId: 'G-MJG351F09X',
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore();
