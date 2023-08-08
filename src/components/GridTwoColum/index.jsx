import P from 'prop-types'
import * as Styled from './styles'
export const GridTwoColum = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  )
}
GridTwoColum.propTypes = {
  children: P.node.isRequired
}
