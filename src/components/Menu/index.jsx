import P from 'prop-types'
import * as Styled from './styles'
import { SectionContainer } from '../SectionContainer'
import { LogoLink } from '../LogoLink'
import { NavLinks } from '../NavLinks'
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu'

export const Menu = ({ links = [], logoData }) => {
  return (
    <>

      <Styled.Container>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink text={'Hello world'} link={'Home'} />
            <NavLinks links={[
              {
                children: 'BBC',
                link: '/ababa'
              },
              {
                children: 'Kaká',
                link: '/brasil'
              },
              {
                children: 'Pânico',
                link: '/barbacena'
              },


            ]} />
          </Styled.MenuContainer>

        </SectionContainer>

      </Styled.Container>
    </>
  )
}
Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes)
}
