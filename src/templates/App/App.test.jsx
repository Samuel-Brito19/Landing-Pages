import { screen } from '@testing-library/react';
import Home from './App';
import { renderTheme } from '../styles/renderTheme';
import { theme } from '../styles/theme';

test('should render', () => {
  renderTheme(<Home />)
  const headingContainer = screen.getByRole('heading', { name: 'Olá amigos' })
    .parentElement;
  expect(headingContainer).toHaveStyleRule("background", theme.colors.secondaryBg);
})
