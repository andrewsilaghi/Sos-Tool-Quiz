import { h, Component } from 'preact'

import Quiz from './Quiz'
import Result from './Result'

import { screens } from '../utils/enums'

class App extends Component {
  state = {
    screen: screens.quiz,
    score: {
      severity: 1,
      ownership: 1,
      support: 1
    }
  }

  onSubmit = () => {
    this.setState({ screen: screens.result })
  }

  onReset = () => {
    this.setState({
      screen: screens.quiz,
      score: {
        severity: 1,
        ownership: 1,
        support: 1
      }
    })
  }

  onChange = (name, value) => {
    this.setState((prevState) => ({
      score: {
        ...prevState.score,
        [name]: value
      }
    }))
  }

  render(props, { score, screen }) {
    return (
      <div className="container">
        {screen === screens.quiz ? (
          <Quiz
            score={score}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
          />
        ) : (
          <Result score={score} onReset={this.onReset} />
        )}
      </div>
    )
  }
}

export default App
