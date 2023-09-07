import "bootstrap/dist/css/bootstrap.min.css"
import Calculator from "./components/calculator/Calculator"
import "./App.css"
import { useState } from "react"
function App() {
  const [background, setBackground] = useState("background")
  return (
    <section className={background}>
      <Calculator background={background} setBackground={setBackground}></Calculator>
    </section>
  )
}

export default App
