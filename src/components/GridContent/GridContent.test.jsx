import { screen } from '@testing-library/react'
import { GridContent } from '.'
import { renderTheme } from '../../templates/styles/renderTheme'
describe('<GridContent/>', () => {
  it('should render', () => {
    renderTheme(<GridContent>children</GridContent>)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
