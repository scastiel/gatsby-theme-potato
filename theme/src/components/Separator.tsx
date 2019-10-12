import styled from 'styled-components'
import { Theme } from '../theme'

const Separator = styled.hr`
  border-style: none;
  border-bottom: 1px dotted
    ${({ theme }: { theme: Theme }) => theme.separatorColor};
  margin-top: 5em;

  @media (prefers-color-scheme: dark) {
    border-bottom-color: ${({ theme }: { theme: Theme }) =>
      theme.darkSeparatorColor};
  }
`

export default Separator
