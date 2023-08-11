import P from 'prop-types'
import * as Styled from './styles'
export const GridImage = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  )
}
GridImage.propTypes = {
  children: P.node.isRequired
}
