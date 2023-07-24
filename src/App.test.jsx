/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { renderTheme } from "./style/renderTheme"
import { screen } from '@testing-library/react';
import App from "./App"
import "jest-styled-components";
import { theme } from "./style/theme";


test('should render', () => {
  const { debug } = renderTheme(<App />)
  debug()
  const headingContainer = screen.getByRole('heading', { name: 'Olá!' }).parentElement;

  /*expect(headingContainer).toHaveStyle({
    background: theme.colors.mainBg,
  });*/
  expect(headingContainer).toHaveStyleRule('background', 'red')
});
