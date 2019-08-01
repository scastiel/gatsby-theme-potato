import React from 'react'
import styled from 'styled-components'

const MAILCHIMP_FORM_URL =
  'https://castiel.us3.list-manage.com/subscribe/post?u=3f8160c351d7f192baaedec25&amp;id=66249e8919'

const Box = styled.div`
  background-color: var(--lightAccentColor);
  padding: 1em;
  max-width: 18em;
  text-align: center;

  * {
    font-family: var(--sansSerifFont);
    font-size: 1em;
  }

  p {
    margin-top: 0;
  }

  input {
    padding: 0.5em;
    width: 100%;
    font-size: 1em;
  }

  button {
    background-color: var(--accentColor);
    padding: 0.5em 1em;
    margin-top: 0.5em;
    font-size: 1em;
    border-width: 0;
  }
`

export default function NewsletterSignUp() {
  return (
    <Box>
      <form action={MAILCHIMP_FORM_URL} method="post" target="_blank">
        <div>
          <p>Get the latest articles from my blog in your inbox:</p>
          <div>
            <input
              type="email"
              name="EMAIL"
              placeholder="your@email.com"
              aria-label="Email address"
              required={true}
            />
          </div>
          <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
            <input
              type="text"
              name="b_3f8160c351d7f192baaedec25_66249e8919"
              tabIndex="-1"
            />
          </div>
          <div>
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </form>
    </Box>
  )
}
