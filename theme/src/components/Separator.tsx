import styled from 'styled-components'

const Separator = styled.hr`
  border-style: none;
  border-bottom: 1px dotted ${({ theme }) => theme.separatorColor};
  margin-top: 5em;
`

export default Separator
