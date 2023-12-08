import PlayistMenu from "./components/PlayistMenu/PlayistMenu"
import AudioPannel from "./components/AudioPannel/Parent/AudioPannel"
import React from "react"
function App() {
  return(
   <>
    <PlayistMenu/>
    <AudioPannel/>
   </>
  )
}

export default React.memo(App)
