import { useState, useEffect, useContext } from "react";
import User from "./User";
import Post from "./Post";
import DialogContext from "./context/DialogProvider";
import UserContext from "./context/UserProvider";
import DialogTransition from "./DialogTransition";
import useFetch from "./useFetch";

function App() {
  const [userURL, setUserURL] = useState("/users");
  const [postURL, setPostURL] = useState("/posts");
  const [data] = useFetch(userURL);

  const dialogCtx = useContext(DialogContext);
  const userCtx = useContext(UserContext);

  console.log("App called");
  console.log("Ctx.dialog:", dialogCtx.dialog);

  useEffect(() => {
    console.log("APP MOUNTED");
    return () => {
      console.log("APP UNMOUNTED");
    };
  }, []);

  const handleUserRequest = (event) => {
    event.preventDefault();
    console.log("Toggle Clicked");

    userCtx.setUserData(data);
    console.log("Set user data to dialog");
    
    dialogCtx.setDialog((prev) => !prev);
  };

  return (
      <div>
        <Post urlEnd={postURL} />
        <User urlEnd={userURL} />
        {/* <User urlEnd={userURL} key={Math.floor(Math.random() * 101)} /> */}
        <div>
          <button onClick={handleUserRequest}>Toggle</button>
        </div>
        <DialogTransition />
      </div>
  );
}

export default App;
