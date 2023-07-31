import { renderTheme } from '../../templates/styles/renderTheme'
import { Heading } from '.'

describe('<Heading/>', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>texto</Heading>)
  })
})
