import Nav from "./components/nav/nav.jsx"
import Main from "./components/main/main"
import Card from "./components/card/card.jsx"
import data from "./assets/data"

function App() {
 

  return (
    <div className="App">
      <Nav/>
      <Main/>
      <div className="cards">
        {
          data.map(c=><Card key={c.id} data={c}/>)
        }
      </div>
    </div>
  )
}

export default App
