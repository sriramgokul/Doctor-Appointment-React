
import './App.css'
import Main from './Components/Main'
import SideBar from './Components/SideBar'
import TopBar from './Components/TopBar'

import WorkSpace from './Components/WorkSpace'

function App() {

  return (
    <div className='app'>
      <WorkSpace>
        <TopBar>TopBar</TopBar>
        <SideBar>SideBar</SideBar>
        <Main>MainBarr</Main>
      </WorkSpace>
    </div>
  )
}

export default App
