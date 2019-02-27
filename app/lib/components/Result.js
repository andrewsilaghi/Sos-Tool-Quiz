import { h, Component } from 'preact'

import Prompt from './Prompt'

import { getScore, getLevel, getQuote, getLength } from '../utils/helpers'
import createPdf from '../utils/pdf'

class Result extends Component {
  state = {
    submitted: false,
    open: false,
    form: {
      name: '',
      name2: '',
      role: 'TBD Brian Holt',
      campus: '',
      email: ''
    }
  }

  toggle = () => {
    this.setState((prevState) => ({
      open: !prevState.open
    }))
  }

  onCreate = (form, score) => {
    this.setState({ submitted: true })
    createPdf(form, score)
  }

  onInput = (event) => {
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [event.target.name]: event.target.value
      }
    }))
  }

  render({ score, onReset }, { open, form, submitted }) {
    const total = getScore(score)
    return (
      <div className="result">
        <div className="result__title">
          <h2 className="title">SOS Level {getLevel(total)}</h2>
          <h3 className="title result__score">Total score: {total}</h3>
        </div>

        <div className="result__cards grid">
          <div>
            <em>Who's involved?</em>
            <p>{getQuote(score)}</p>
          </div>
          <div>
            <em>Length of Care:</em>
            <p>
              {getLength(score)}
            </p>
          </div>
        </div>

        <div className="grid">
          <button className="button" onClick={this.toggle}>
            Get a PDF
          </button>
          <button className="button" onClick={onReset}>
            Reset
          </button>
        </div>

        {open ? (
          <Prompt
            form={form}
            score={score}
            submitted={submitted}
            onCreate={this.onCreate}
            onInput={this.onInput}
            onClose={this.toggle}
          />
        ) : null}
      </div>
    )
  }
}

export default Result
