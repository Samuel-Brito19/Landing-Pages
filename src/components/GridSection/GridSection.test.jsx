import { screen } from '@testing-library/react'
import { GridSection } from '.'
import { renderTheme } from '../../templates/styles/renderTheme'
describe('<GridSection/>', () => {
  it('should render', () => {
    renderTheme(<GridSection>children</GridSection>)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
