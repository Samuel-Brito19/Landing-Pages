import P from 'prop-types'
import * as Styled from './styles'
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'
import { TextComponent } from '../TextComponent'

export const GridSection = ({ title, description, background = false, grid }) => {
  return (
    <SectionBackground>
      <Styled.Container>
        <Heading size='huge' upperCase as='h2'>{title}</Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>{grid.map(el => (
          <Styled.GridElement key={el.title}>
            <Heading size='medium' as='h3'>{el.title}</Heading>
            <TextComponent>{el.description}</TextComponent>
          </Styled.GridElement>
        ))}</Styled.Grid>
      </Styled.Container>
    </SectionBackground>

  )
}
GridSection.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  background: P.bool,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
}