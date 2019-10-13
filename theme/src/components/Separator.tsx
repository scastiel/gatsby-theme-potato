import styled from 'styled-components'
import { Theme } from '../theme'

const Separator = styled.hr`
  border-style: none;
  border-bottom: 1px dotted
    ${({ theme }: { theme: Theme }) => theme.separatorColor};
  margin-top: 5em;
`

export default Separator
