import { screen } from '@testing-library/react'
import { GoTop } from '.'
import { renderTheme } from '../../templates/styles/renderTheme'
describe('<GoTop/>', () => {
  it('should render', () => {
    renderTheme(<GoTop>children</GoTop>)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
