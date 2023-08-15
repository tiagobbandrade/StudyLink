import { cert, getApps, initializeApp } from "firebase-admin/app";

const firebaseAdminConfiguration = {
  credential: cert({
    clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY?.replace(
      /\\n/g,
      "\n"
    ),
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  }),
};

export function initializeFirebase() {
  if (getApps().length <= 0) {
    initializeApp(firebaseAdminConfiguration);
  }
}
