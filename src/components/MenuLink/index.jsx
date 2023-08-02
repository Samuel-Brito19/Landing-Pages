import P from 'prop-types'
import * as Styled from './styles'
export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? 'blank' : '_self'
  return (
    <Styled.Container href={link} target={target}>
      <h1>{children}</h1>
    </Styled.Container>
  )
}
MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTab: P.bool
}
