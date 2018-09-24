import React, { Component, createRef } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  border: 1px solid #d3d3d3;
  max-width: 20em;
  padding: 0.3rem;
  font-size: 1rem;
`
const StyledTextArea = styled.textarea`
  border: 1px solid #d3d3d3;
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
  border: 1px solid #d3d3d3;
  background-color: inherit;
  padding: 0.3em 1em;
`

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.dateInput = createRef()
  }
  onSubmit = event => {
    this.dateInput.current.value = new Date().toISOString()
  }
  render() {
    const { slug } = this.props
    return (
      <form
        name="comment"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.onSubmit}
      >
        <input type="hidden" name="slug" value={slug} />
        <input type="hidden" name="form-name" value="comment" />
        <input name="date" type="hidden" ref={this.dateInput} />

        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        <p>
          <StyledLabel>
            Your name: <StyledInput required type="text" name="name" />
          </StyledLabel>
        </p>
        <p>
          <StyledLabel>
            Your email: <StyledInput required type="email" name="email" />
          </StyledLabel>
        </p>
        <p>
          <StyledLabel>
            Your website (optional): <StyledInput type="url" name="url" />
          </StyledLabel>
        </p>
        <p>
          <StyledLabel>
            Comment: <StyledTextArea required name="message" />
          </StyledLabel>
        </p>
        <div data-netlify-recaptcha="true" />
        <p>
          <StyledButton type="submit">Send</StyledButton>
        </p>
      </form>
    )
  }
}

export default CommentForm
