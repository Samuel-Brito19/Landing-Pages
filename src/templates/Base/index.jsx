import P from 'prop-types'
import * as Styled from './styles'
import { Menu } from '../../components/Menu'
import { Footer } from '../../components/Footer'
import { GoTop } from '../../components/GoTop'


export const Base = ({ links, LogoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} LogoData={LogoData} />
      <Styled.Container>
        {children}
        <Footer html={footerHtml} />
      </Styled.Container>
      <GoTop />
    </>
  )
}
Base.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  footerHtml: P.string.isRequired
}
