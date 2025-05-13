
import Contant from "./componante/Contant"
import Login from "./componante/Login"
import Nav from "./componante/nav"

function App() {
  

  return (
    <>
     <div className="main">
        <Nav />
      <div class="content">
        <Contant/>
        <Login/>
      </div>
     </div>
    
    </>
    
  )
}

export default App
