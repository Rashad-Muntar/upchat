import React, { useState } from "react";
import { db } from "../firebase";
import { useSelector } from "react-redux";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const styles = {
  form: "self-end flex w-[100%] justify-center py-[10px]",
  input: "w-[70%] rounded-md px-[10px] focus:outline-none ",
  button: "w-[20%] bg-white ml-[10px] rounded-md color-gray",
  buttonDisale: "w-[20%] bg-gray ml-[10px] rounded-md color-gray",
};
function NewChat() {
  const [msg, setMsg] = useState("");
  const currentUser = useSelector((state) => state.user);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (msg === "") {
      alert("Please enter a valid message");
      return;
    }

    await addDoc(collection(db, "messages"), {
      text: msg,
      name: currentUser.username,
      timestamp: serverTimestamp(),
    });
    setMsg("");
  };

  const onChangeMsg = (e) => {
    setMsg(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={sendMessage}>
      <input
        type="text"
        placeholder="Message"
        className={styles.input}
        autoFocus={true}
        value={msg}
        onChange={onChangeMsg}
        name="newMessage"
      />
      <button
        disabled={!msg}
        type="submit"
        className={msg.length > 0 ? styles.button : styles.buttonDisale}
      >
        Send
      </button>
    </form>
  );
}

export default NewChat;
