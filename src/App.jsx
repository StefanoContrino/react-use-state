import { useState } from 'react'
import languages from "./docs/languages.js"


function App() {
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(null)

  function change(who) {
    console.log("Cliccato", who);
    setCount(who);
  }

  return <>

    <h1 className="title">Learn Web development</h1>

    <div className="btn-container">
      {languages.map((Language, index) => {
        return <button onClick={() => {
          change(index)
          setActive(index)
        }}
          className={active === index ? "btn-pressed" : "btn"}
          key={Language.id}>{Language.title}</button>
      })}
    </div>

    <div className="card">

      <h3 className="card-text">{languages[count].title}</h3>
      <p className="card-description">{languages[count].description}</p>

    </div>
  </>

}

export default App
