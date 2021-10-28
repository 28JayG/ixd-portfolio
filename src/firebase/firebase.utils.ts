import { initializeApp } from 'firebase/app';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';

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
export const firestore = getFirestore(app);
export const cloudFucntions = getFunctions(app);

// connectFirestoreEmulator(firestore, 'localhost', 8080);
// connectFunctionsEmulator(cloudFucntions, 'localhost', 5001);
