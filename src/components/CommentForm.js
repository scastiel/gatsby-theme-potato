import React, { Component, createRef } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  border-color: var(--inputBorderColor);
  border-width: 1px;
  border-style: solid;
  background-color: var(--backgroundColor);
  color: var(--textColor);
  max-width: 20em;
  padding: 0.3rem;
  font-size: 1rem;
`
const StyledTextArea = styled.textarea`
  border-color: var(--inputBorderColor);
  border-width: 1px;
  border-style: solid;
  background-color: var(--backgroundColor);
  color: var(--textColor);
  padding: 0.3rem;
  font-size: 1rem;
  resize: vertical;
  height: 5em;
`
const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`
const StyledButton = styled.button`
  font-size: 1rem;
  font-family: inherit;
  border: 1px solid var(--inputBorderColor);
  color: var(--textColor);
  background-color: inherit;
  padding: 0.3em 1em;
`

const STATUS = {
  INITIAL: 'INITIAL',
  ERROR: 'ERROR',
  POSTING: 'POSTING',
  DONE: 'DONE'
}

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.formRef = createRef()
    this.state = { status: STATUS.INITIAL }
  }
  onSubmit = async event => {
    event.preventDefault()
    this.setState({ status: STATUS.POSTING })
    try {
      const form = this.formRef.current
      const { action, method } = form
      const body = new URLSearchParams(new FormData(form))
      await fetch(action, { method, body })
      form.reset()
      this.setState({ status: STATUS.DONE })
    } catch (err) {
      console.error(err)
      this.setState({ status: STATUS.ERROR })
    }
  }
  render() {
    const { slug } = this.props
    const { status } = this.state
    return (
      <form
        name="comment"
        method="POST"
        action="https://scastiel-blog-comments.herokuapp.com/v2/entry/scastiel/new-blog/master/comments"
        onSubmit={this.onSubmit}
        ref={this.formRef}
      >
        <input type="hidden" name="fields[slug]" value={slug} />

        <p>
          <StyledLabel>
            Your name: <StyledInput required type="text" name="fields[name]" />
          </StyledLabel>
        </p>
        <p>
          <StyledLabel>
            Your email:{' '}
            <StyledInput required type="email" name="fields[email]" />
          </StyledLabel>
        </p>
        <p>
          <StyledLabel>
            Your website (optional):{' '}
            <StyledInput type="url" name="fields[url]" />
          </StyledLabel>
        </p>
        <p>
          <StyledLabel>
            Comment: <StyledTextArea required name="fields[message]" />
          </StyledLabel>
        </p>
        {status === STATUS.DONE && (
          <p>Thanks for your comment! It will appear after being approved.</p>
        )}
        {status === STATUS.ERROR && (
          <p>Someting happened… Please retry in a moment, or contact me.</p>
        )}
        <p>
          <StyledButton disabled={status === STATUS.POSTING} type="submit">
            {status === STATUS.POSTING ? 'Sending…' : 'Send'}
          </StyledButton>
        </p>
      </form>
    )
  }
}

export default CommentForm
