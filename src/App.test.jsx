/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { renderTheme } from "./style/renderTheme"
import { screen } from '@testing-library/react';
import "jest-styled-components";
import { theme } from "./style/theme";
import { Home } from './App'

describe('App/>', () => {
  it('should render home', () => {
    renderTheme(<Home />)
  })
})
