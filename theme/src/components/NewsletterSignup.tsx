import React, { FC } from 'react'
import styled from 'styled-components'
import { Theme } from '../theme'

const Box = styled.div`
  background-color: ${({ theme }) => theme.lightAccentColor};
  padding: 1em;
  max-width: 18em;
  text-align: center;

  * {
    font-family: ${({ theme }) => theme.sansSerifFont};
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
    background-color: ${({ theme }: { theme: Theme }) => theme.accentColor};
    padding: 0.5em 1em;
    margin-top: 0.5em;
    font-size: 1em;
    border-width: 0;

    @media (prefers-color-scheme: dark) {
      background-color: ${({ theme }: { theme: Theme }) =>
        theme.darkAccentColor};
    }
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
