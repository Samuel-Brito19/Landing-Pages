import { screen } from '@testing-library/react'
import { TextComponent } from '.'
import { renderTheme } from '../../templates/styles/renderTheme'
describe('<TextComponent/>', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>children</TextComponent>)
    expect(screen.getByText('children')).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>children</TextComponent>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
