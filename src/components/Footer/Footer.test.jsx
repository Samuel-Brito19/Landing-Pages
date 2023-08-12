import { screen } from '@testing-library/react'
import { Footer } from '.'
import { renderTheme } from '../../templates/styles/renderTheme'
describe('<Footer/>', () => {
  it('should render', () => {
    renderTheme(<Footer>children</Footer>)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
