import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  deleteDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDr-yVR-bLkhsmGl30RQdXRx1VE6ilJ0zw",
  authDomain: "fir-demo-7158d.firebaseapp.com",
  projectId: "fir-demo-7158d",
  storageBucket: "fir-demo-7158d.appspot.com",
  messagingSenderId: "381712395784",
  appId: "1:381712395784:web:7584aae932bee970bfabbd",
};

// init app
initializeApp(firebaseConfig);

// init db, auth
const db = getFirestore();
const auth = getAuth();

// collection ref
const colRef = collection(db, "books");

// query
const q = query(colRef, orderBy("createdAt"));

// get data
const unSubCol = onSnapshot(q, (snapshot) => {
  let books = [];
  snapshot.docs.forEach((doc) => {
    books.push({ ...doc.data(), id: doc.id });
  });
  console.log(books);
});

const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addDoc(colRef, {
    name: addBookForm.name.value,
    title: addBookForm.title.value,
    year: addBookForm.year.value,
    createdAt: serverTimestamp(),
  }).then(() => addBookForm.reset());
});

const deletedBookForm = document.querySelector(".delete");
deletedBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const docRef = doc(db, "books", deletedBookForm.id.value);

  deleteDoc(docRef).then(() => deletedBookForm.reset());
});

// get a single record

const docRef = doc(db, "books", "HSuC3j0sazl0kecxRK30");

// getDoc(docRef).then((doc) => {
//   console.log(doc.data(), doc.id);
// });

// using snapshot

const unSubDoc = onSnapshot(docRef, (doc) => {
  console.log(doc.data(), doc.id);
});

// updating doc

const updateBookForm = document.querySelector(".update");
updateBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const docRef = doc(db, "books", updateBookForm.id.value);

  updateDoc(docRef, {
    title: "New title",
  });
});

// signup user

const signup = document.querySelector(".signup");
signup.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = signup.email.value;
  let password = signup.email.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      //   console.log(cred);
      signup.reset();
    })
    .catch((err) => console.log(err.meesage));
});

// logout
const logout = document.querySelector(".logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();

  signOut(auth).catch((err) => console.log(err.message));
});

// login
const login = document.querySelector(".login");
login.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = login.email.value;
  let password = login.email.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      //   console.log(cred);
      login.reset();
    })
    .catch((err) => console.log(err.message));
});

// suscribing to auth state change

const unSubAuth = onAuthStateChanged(auth, (user) => {
  console.log("state change:", user);
});
