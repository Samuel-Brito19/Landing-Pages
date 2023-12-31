import P from 'prop-types'
import * as Styled from './styles'
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'
import { TextComponent } from '../TextComponent'

export const GridImage = ({ title, description, background = false, grid, sectionId = '' }) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size='huge' upperCase as='h2' colorDark={!background}>{title}</Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>{grid.map(el => (
          <Styled.GridElement key={`${el.srcImg}${el.altText}`}>
            <Styled.Image src={el.srcImg} alt={el.altText} />
          </Styled.GridElement>
        ))}</Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  )
}
GridImage.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  background: P.bool,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    }),
  ).isRequired,
  sectionId: P.string
}
