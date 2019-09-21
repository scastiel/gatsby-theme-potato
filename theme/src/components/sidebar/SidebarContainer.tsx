import styled from 'styled-components'

const hiddenSidebarStyle = `
  position: fixed;
  right: -17rem;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  width: 17rem;
  background-color: var(--backgroundColor);
  border-left-style: none;
`

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px dotted var(--separatorColor);
  font-size: 0.8em;
  font-family: var(--sansSerifFont);
  flex-shrink: 0;
  margin-left: 3em;
  padding: 1em;
  text-align: center;

  ${({ hidden }) => hidden && hiddenSidebarStyle};

  @media (max-width: 45rem) {
    ${hiddenSidebarStyle};
  }
`
