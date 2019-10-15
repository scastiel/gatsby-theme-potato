import React, { FC } from 'react'
import styled from 'styled-components'
import { Theme } from '../theme'

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
`

export interface Props {
  formUrl: string
  antispamFieldName: string
}

export const NewsletterSignUp: FC<Props> = ({ formUrl, antispamFieldName }) => {
  return (
    <Box>
      <form action={formUrl} method="post" target="_blank">
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
            <input type="text" name={antispamFieldName} tabIndex={-1} />
          </div>
          <div>
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </form>
    </Box>
  )
}
