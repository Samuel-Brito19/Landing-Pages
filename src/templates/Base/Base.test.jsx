import { screen } from '@testing-library/react'
import { Base } from '.'
import { renderTheme } from '../../templates/styles/renderTheme'
describe('<Base/>', () => {
  it('should render', () => {
    renderTheme(<Base>children</Base>)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
