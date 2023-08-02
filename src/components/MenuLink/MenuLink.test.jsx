import { screen } from '@testing-library/react'
import { MenuLink } from '.'
import { renderTheme } from '../../templates/styles/renderTheme'
describe('<MenuLink/>', () => {
  it('should render', () => {
    renderTheme(<MenuLink>children</MenuLink>)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
