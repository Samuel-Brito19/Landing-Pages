import { screen } from '@testing-library/react'
import { GridSection } from '.'
import { renderTheme } from '../../templates/styles/renderTheme'
import mock from './mock'


describe('<GridSection/>', () => {
  it('should render', () => {
    const { container } = renderTheme(<GridSection {...mock} />)
    expect(container).toBeInTheDocument()
  })
})
