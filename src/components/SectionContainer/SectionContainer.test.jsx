import { screen } from '@testing-library/react'
import { SectionContainer } from '.'
import { renderTheme } from '../../templates/styles/renderTheme'
describe('<SectionContainer/>', () => {
  it('should render', () => {
    renderTheme(<SectionContainer><h1>children</h1></SectionContainer>)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
