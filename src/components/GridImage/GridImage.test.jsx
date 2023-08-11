import { screen } from '@testing-library/react'
import { GridImage } from '.'
import { renderTheme } from '../../templates/styles/renderTheme'
describe('<GridImage/>', () => {
  it('should render', () => {
    renderTheme(<GridImage>children</GridImage>)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
