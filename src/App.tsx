import React from "react";
import s from "app/App.module.css";
import { Login } from "features/auth/ui/Login";

function App() {
  return (
    <div className={s.appWrapper}>
      <Login />
    </div>
  );
}

export default App;
