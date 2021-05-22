import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: 'AIzaSyB-vPbaWUh0AzbuYpGvmNUwrh8kVonZ4Sk',
   authDomain: 'crwn-db-9efab.firebaseapp.com',
   projectId: 'crwn-db-9efab',
   storageBucket: 'crwn-db-9efab.appspot.com',
   messagingSenderId: '46005818760',
   appId: '1:46005818760:web:8ae65020fac71e75e4563d'
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!!!userAuth) return;

   const userRef = await firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get();

   if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
         });
      } catch (error) {
         console.log('error creating user', error.message);
      }
   }

   return userRef;
};

export const convertCollectionSnapshotToMap = collections => {
   const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();

      return {
         routeName: encodeURI(title.toLowerCase()),
         id: doc.id,
         title,
         items
      };
   });

   return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
   }, {});
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
   const collectionRef = await firestore.collection(collectionKey);
   console.log(collectionRef);

   const batch = firestore.batch();
   objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      console.log('newDocRef');
      batch.set(newDocRef, obj);
   });

   return await batch.commit();
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
