import { screen } from '@testing-library/react'
import { GridTwoColum } from '.'
import { renderTheme } from '../../templates/styles/renderTheme'
describe('<GridTwoColum/>', () => {
  it('should render', () => {
    renderTheme(<GridTwoColum>children</GridTwoColum>)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
