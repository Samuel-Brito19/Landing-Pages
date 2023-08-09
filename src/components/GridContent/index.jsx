import P from 'prop-types'
import * as Styled from './styles'
import mock from './mock'
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'
import { TextComponent } from '../TextComponent'

export const GridContent = ({ title, html, background = false }) => {
  return (
    <SectionBackground>
      <Styled.Container>
        <Heading upperCase>
          {title}
        </Heading>
        <Styled.Html>
          <TextComponent>{html}</TextComponent>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>

  )
}
GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool
}
