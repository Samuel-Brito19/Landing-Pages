import * as Styled from './styles'
import P from 'prop-types'

export const Heading = ({ children, as = 'h1', size = 'huge', upperCase = false, colorDark = true }) => {
  return <Styled.Title as={as} size={size} upperCase={upperCase} colorDark={colorDark}>{children}</Styled.Title>
}

Heading.propTypes = {
  children: P.node.isRequired,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: P.bool

}
