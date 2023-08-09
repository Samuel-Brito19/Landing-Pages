import P from 'prop-types'
import * as Styled from './styles'
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'

export const GridSection = ({ title }) => {
  return (
    <SectionBackground>
      <Styled.Container>
        <Heading>
          {title}
        </Heading>
      </Styled.Container>
    </SectionBackground>

  )
}
GridSection.propTypes = {
  title: P.string.isRequired
}
