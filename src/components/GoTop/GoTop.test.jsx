import { screen } from '@testing-library/react'
import { GoTop } from '.'
import { renderTheme } from '../../templates/styles/renderTheme'
describe('<GoTop/>', () => {
  it('should render', () => {
    renderTheme(<GoTop />)
    expect(screen.getByRole('link', { name: 'Go to top' })).toBeInTheDocument()
  })
})
