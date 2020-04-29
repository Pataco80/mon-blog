import styled from 'styled-components'

import { setPxToRem } from '../../styles/helpers'
import { Link } from 'gatsby'

export const MenuLinksrWrapper = styled.nav`
`

export const MenuLinksList = styled.ul`
  font-size:${setPxToRem(18)};
  font-weight:300;
`

export const MenuLinksItem = styled.li`
  padding :${setPxToRem(8)} 0;

  .active {
   color:var(--highlight);
  }

`
export const MenuLinkLink = styled(Link)`
  color:var(--texts);
  text-decoration:none;

  &:hover {
    color:var(--highlight);
  }
`
