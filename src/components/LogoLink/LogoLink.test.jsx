import { screen } from '@testing-library/react'
import { LogoLink } from '.'
import { renderTheme } from '../../templates/styles/renderTheme'
describe('<LogoLink/>', () => {
  it('should render', () => {
    renderTheme(<LogoLink link='#target' text='Olá mundo' />)
    const heading = screen.getByRole('heading', { name: 'Olá mundo' })
    expect(heading.firstChild).toHaveAttribute('href', '#target')
  })
})
