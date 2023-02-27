import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrQ7KEVxpmZlHkMbTPGzen67Cq0jOh8-4",
  authDomain: "oauth-7a45e.firebaseapp.com",
  projectId: "oauth-7a45e",
  storageBucket: "oauth-7a45e.appspot.com",
  messagingSenderId: "290590927019",
  appId: "1:290590927019:web:302333d9c70eac28fbafee",
  measurementId: "G-8FR81N7F3Z",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.addScope("email");
const auth = getAuth(app);

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
}

