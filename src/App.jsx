import { Header } from "./Components";
import {Outlet} from "react-router-dom";

function App() {

  return (
    <div className="max-w-screen min-h-screen flex flex-col">

    <Header/>
    <main className="w-full flex-1">
    <Outlet/>
    </main>

    </div>
  )
}

export default App;
