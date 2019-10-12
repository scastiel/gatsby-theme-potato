import styled from 'styled-components'
import { Theme } from '../theme'

export const Avatar = styled.img`
  width: 5em;
  height: 5em;
  border-radius: 50%;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.accentColor};

  @media (prefers-color-scheme: dark) {
    background-color: ${({ theme }: { theme: Theme }) => theme.darkAccentColor};
  }
`
