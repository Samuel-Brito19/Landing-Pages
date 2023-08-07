import { screen } from '@testing-library/react'
import { Menu } from '.'
import { renderTheme } from '../../templates/styles/renderTheme'

import linksMock from '../NavLinks/mock'
import { theme } from '../../templates/styles/theme'
const logoData = {
  text: 'Logo',
  link: '#target'
}
describe('<Menu/>', () => {
  it('should render Logo and Main Menu', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />)
    expect(screen.getByRole('heading', { name: 'LOGO' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: '' })).toBeInTheDocument()
  })

  it('should render Logo and Main Menu', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />)

    const button = screen.getByLabelText('Open/Close menu')
    const manuContainer = button.nextSibling

    expect(button).toHaveStyleRule('display', 'none')
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium
    })
  })
})
