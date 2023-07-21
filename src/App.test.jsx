/** @jest-environment jsdom */
import { renderTheme } from "./style/renderTheme"
import { screen } from '@testing-library/react';
import App from "./App"
import "jest-styled-components";
import { theme } from "./style/theme";
import '@testing-library/jest-dom'

test('should render', () => {
  const { debug } = renderTheme(<App />)
  const headingContainer = screen.getByRole('heading', { name: 'Olá!' }).parentElement
  expect(headingContainer).toHaveStyle({

    background: theme.colors.mainBg,
  });
  expect(headingContainer).toHaveStyleRule('background', 'red');
});
