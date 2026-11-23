
import { auth } from "./firebase.js";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const ADMIN_UID = "c4teFQDlUxMTCZ4zaiWG4enm25f2";

const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginMessage = document.getElementById("login-message");

const loginSection = document.getElementById("login-section");
const dashboard = document.getElementById("dashboard");
const adminEmail = document.getElementById("admin-email");
const logoutButton = document.getElementById("logout-button");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  loginMessage.textContent = "ログイン中...";

  try {
    const result = await signInWithEmailAndPassword(
      auth,
      emailInput.value,
      passwordInput.value
    );

    if (result.user.uid !== ADMIN_UID) {
      await signOut(auth);
      loginMessage.textContent = "管理者権限がありません。";
      return;
    }

    loginMessage.textContent = "";
  } catch (error) {
    console.error(error);
    loginMessage.textContent = "ログインに失敗しました。入力内容を確認してください。";
  }
});

onAuthStateChanged(auth, (user) => {
  if (user && user.uid === ADMIN_UID) {
    loginSection.hidden = true;
    dashboard.hidden = false;
    adminEmail.textContent = user.email || "管理者";
  } else {
    loginSection.hidden = false;
    dashboard.hidden = true;
  }
});

logoutButton.addEventListener("click", async () => {
  await signOut(auth);
});
js/admin-auth.js
