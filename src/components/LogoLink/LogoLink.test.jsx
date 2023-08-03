import { screen } from '@testing-library/react'
import { LogoLink } from '.'
import { renderTheme } from '../../templates/styles/renderTheme'
describe('<LogoLink/>', () => {
  it('should render', () => {
    renderTheme(<LogoLink>children</LogoLink>)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
