
import { auth, db } from "./firebase.js";

import {
  doc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const testButton = document.getElementById("firestore-test");
const testResult = document.getElementById("firestore-result");

testButton.addEventListener("click", async () => {
  testResult.textContent = "接続確認中...";

  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error("ログインしていません。");
    }

    await setDoc(
      doc(db, "system", "health"),
      {
        status: "connected",
        lastAdminCheck: serverTimestamp(),
        checkedBy: user.uid
      },
      { merge: true }
    );

    testResult.textContent = "Firestoreへの接続に成功しました！";
  } catch (error) {
    console.error(error);
    testResult.textContent = "接続失敗：" + error.message;
  }
});
