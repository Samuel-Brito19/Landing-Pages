import { screen } from '@testing-library/react'
import { NavLinks } from '.'
import { renderTheme } from '../../templates/styles/renderTheme'
import { theme } from '../../templates/styles/theme'

import mock from './mock'

describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should render links', () => {
    renderTheme(<NavLinks links={mock} />);
    screen.debug(screen.getByText(/link 10/i).parentElement)
    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule(
      "flex-flow: column wrap",

    );
  });

  it('should match snapshot', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('link')).toMatchSnapshot();
  });
});
