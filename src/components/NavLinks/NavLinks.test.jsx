import { screen } from '@testing-library/react'
import { NavLinks } from '.'
import { renderTheme } from '../../templates/styles/renderTheme'
describe('<NavLinks/>', () => {
  it('should render', () => {
    renderTheme(<NavLinks>children</NavLinks>)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
