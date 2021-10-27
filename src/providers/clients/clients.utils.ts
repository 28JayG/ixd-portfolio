import { collection, getDocs } from 'firebase/firestore';

import { firestore } from '../../firebase/firebase.utils';

/* basic flow:
     1) create collection ref(with correct collection name or path)
     2) get snapshot using ref.get()
     3) stucture docs acc. to your reqirement
     4) return it
  */

export const fetchClientsFromFirebase = async () => {
  const clientsRef = collection(firestore, 'clients');
  const querySnapshot = await getDocs(clientsRef);

  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
