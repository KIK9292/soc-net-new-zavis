import React from "react"
import s from "app/App.module.css"
import { Login } from "features/auth/ui/Login"
import { Progress } from "antd"
import Users from "features/users/ui/Users"

function App() {
  //useEffect()=>me=>isInitial,isLogin
  ///1.slice app
  //2. me
  //3. Обертачная компонента для самой соц сети
  //4. по возможности крутилка
  //5. в обертке соц сети мы делаем лаяут и сайдбар и в ретерне пишим роутинги на нши страницы
  return (
    <div className={s.appWrapper}>
      <Progress percent={100} />
      <Users />
    </div>
  )
}

export default App
