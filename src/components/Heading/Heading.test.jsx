import { renderTheme } from '../../templates/styles/renderTheme'
import { Heading } from '.'
import { screen } from '@testing-library/react'
import { theme } from '../../templates/styles/theme'

describe('<Heading/>', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>texto</Heading>)
    const heading = screen.getByRole('heading', { name: 'texto' })
    expect(heading).toHaveStyle({
      color: ' rgb(10, 17, 40)',

    })
  })
})
