import { screen } from '@testing-library/react'
import { MenuLink } from '.'
import { renderTheme } from '../../templates/styles/renderTheme'
describe('<MenuLink/>', () => {
  it('should render', () => {
    renderTheme(<MenuLink link='http://localhost'>children</MenuLink>)
    expect(screen.getByRole('link', { name: 'children' })).toHaveAttribute(
      'target',
      '_self'
    )
  })
})
