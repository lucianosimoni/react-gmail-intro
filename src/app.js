import './styles/app.css'

import Header from './Header.js'
import LeftMenu from './LeftMenu.js'
import EmailView from './EmailView.js'

function App() {
  return (
    <div className="app">
      <Header />

      <LeftMenu />

      <EmailView />
    </div>
  )
}

export default App
