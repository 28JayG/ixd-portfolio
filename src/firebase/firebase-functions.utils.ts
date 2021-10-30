import { httpsCallable } from '@firebase/functions';
import { cloudFucntions } from './firebase.utils';

export const FirebaseFunctions = {
  sendEnquiryEmail: httpsCallable(cloudFucntions, 'sendEnquiryEmail'),
};
