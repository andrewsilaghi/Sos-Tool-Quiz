import { h, render } from 'preact'

// root component
import App from './components/App'

// styles
import '../styles/style.scss'
import 'preact-range-slider/assets/index.scss'

// render app
render(<App />, document.querySelector('#root'))
