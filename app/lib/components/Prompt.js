import { h } from 'preact'

const PromptForm = ({ form, score, onInput, onCreate }) => (
  <div className="prompt__form">
    <form>
      <p>
        <label>Completed by</label>
        <input
          type="text"
          name="name"
          placeholder="First and last name"
          value={form.name}
          onInput={onInput}
        />
      </p>

      <p>
        <label>Completed on behalf of (if different from above)</label>
        <input
          type="text"
          name="name2"
          placeholder="First and last name"
          value={form.name2}
          onInput={onInput}
        />
      </p>

      <div>
        <p>
          <label>My role</label>
          <select name="role" value={form.role} onInput={onInput}>
            <option value="Counselor">Counselor</option>
            <option value="Small Group Member">Small Group Member</option>
            <option value="Small Group Apprentice">Small Group Apprentice</option>
            <option value="Small Group Leader">Small Group Leader</option>
            <option value="Small Group Coach">Small Group Coach</option>
            <option value="Pastor/Director">Pastor/Director</option>
            <option value="Other">Other</option>
          </select>
        </p>
        {/*   <p>
          <label>My campus</label>
          <select name="campus" value={form.campus} onInput={onInput}>
            <option value="" selected disabled hidden>
              Choose campus
            </option>

            <option value="Rolling Meadows">Rolling Meadows</option>
            <option value="Aurora">Aurora</option>
            <option value="Chicago Cathedral">Chicago Cathedral</option>
            <option value="Crystal Lake">Crystal Lake</option>
            <option value="Deerfield Road">Deerfield Road</option>
            <option value="Elgin">Elgin</option>
            <option value="Niles">Niles</option>
            <option value="Rolling Meadows">Rolling Meadows</option>
          </select>
        </p>    */}
      </div>

      {/* <p>
        <label>Share to this email</label>
        <input type="text" name="email" value={form.email} onInput={onInput} />
      </p> */}
    </form>
    <button
      className="button"
      onClick={() => onCreate(form, score)}
      disabled={!form.name /* || !form.email || !form.campus */}
    >
      Print
    </button>
  </div>
)

const PromptSuccess = ({ onClose }) => (
  <div className="prompt__success">
    <h2 className="title">Done</h2>
    <p>
      You have successfully submitted a report request; you may find your PDF
      report with your downloads.
    </p>
    <button className="button" onClick={onClose}>
      Back
    </button>
  </div>
)

const Prompt = ({ submitted, form, score, onInput, onClose, onCreate }) => (
  <div className="prompt grid">
    <div className="prompt__content">
      {submitted ? (
        <PromptSuccess onClose={onClose} />
      ) : (
        <PromptForm
          form={form}
          score={score}
          onInput={onInput}
          onCreate={onCreate}
        />
      )}
    </div>
  </div>
)

export default Prompt
