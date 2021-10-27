import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebase/firebase.utils';

/* basic flow:
     1) create collection ref(with correct collection name or path)
     2) get snapshot using ref.get()
     3) stucture docs acc. to your reqirement
     4) return it
  */

export const fetchWorksFromFirebase = async () => {
  const worksCollectionRef = collection(firestore, 'works');
  const snapshot = await getDocs(worksCollectionRef);

  return snapshot.docs.map((doc) => doc.data());
};
