import PlayistMenu from "./components/PlayistMenu/PlayistMenu"
import AudioPannel from "./components/AudioPannel/Parent/AudioPannel"
import React from "react"
function App() {
  return(
   <div className="bg-slate-800 h-screen w-screen flex flex-col justify-between">
    <PlayistMenu/>
    <AudioPannel/>
   </div>
  )
}

export default React.memo(App)
