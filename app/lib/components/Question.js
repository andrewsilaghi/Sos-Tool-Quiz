import { h, Component } from 'preact'
import classNames from 'classnames'
import { Slider as RangeSlider } from 'preact-range-slider'

import { intensities } from '../utils/enums'
import { getIntensity } from '../utils/helpers'

const config = {
  [intensities.minimum]: {
    className: 'question--minimum',
    description: 'Wisdom issue, mild stress, everyday problems.'
  },
  [intensities.medium]: {
    className: 'question--medium',
    description:
      'Moderate conflict, distressed but functioning, more complex issues.'
  },
  [intensities.maximum]: {
    className: 'question--maximum',
    description: 'Crisis, stronghold sin, significant suffering.'
  }
}

class Question extends Component {
  state = {
    open: false
  }

  toggle = () =>
    this.setState((prevState) => ({
      open: !prevState.open
    }))

  render({ name, value, onChange }, { open }) {
    const intensity = getIntensity(value)
    return (
      <div
        className={classNames([
          'question',
          `question--${name}`,
          config[intensity].className,
          { 'question--open': open }
        ])}
      >
        <div className="question__title">
          <div className="grid">
            <h2 className="title">{name}</h2>
            <button className="button button--dense" onClick={this.toggle}>
              {open ? 'Hide details' : 'Show details'}
            </button>
          </div>

          <p>
            Drag the slider to rate the <i>{name}</i> of the situation. Some
            good questions to ask might be: How difficult is for you right now?
            How long has it been going on? Is it getting better or worse?
          </p>
        </div>

        <div className="question__slider">
          <RangeSlider
            min={1}
            max={10}
            step={1}
            value={value}
            onChange={(value) => onChange(name, value)}
          />
        </div>

        <strong className="question__intensity">
          {config[intensity].description}
        </strong>
      </div>
    )
  }
}

export default Question
