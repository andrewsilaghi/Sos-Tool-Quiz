import { h } from 'preact'

import Question from './Question'

const Quiz = ({ score, onSubmit, onChange }) => (
  <div className="quiz">
    <h1 className="title">Use the SOS slider bars to assess your experience</h1>

    <div className="quiz__tutorial">
      <div className="grid">
        <iframe src="https://player.vimeo.com/video/242296332" width="175" height="100" frameborder="0" allowfullscreen="allowfullscreen" />
        <p>
          Select a handle and drag to select a number between one and ten. This
          descriptions will change as you drag and may help you determine a
          score.
        </p>
      </div>
    </div>

    <div className="quiz__questions">
      <Question name="severity" value={score.severity} onChange={onChange} />
      <Question name="ownership" value={score.ownership} onChange={onChange} />
      <Question name="support" value={score.support} onChange={onChange} />
    </div>

    <button
      className="button"
      onClick={onSubmit}
      disabled={!score.severity || !score.ownership || !score.support}
    >
      See results
    </button>
  </div>
)

export default Quiz
