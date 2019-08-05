import React from "react"
import "./App.css"
import MapEditor from "./components/MapEditor"
import MapPreview from "./components/MapPreview"

const App: React.FC = () => {
  return (
    <div className="App">
      <MapEditor></MapEditor>
      <MapPreview></MapPreview>
    </div>
  )
}

export default App
