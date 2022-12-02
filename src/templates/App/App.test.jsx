import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Home from './index';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', {
    name: 'HELLOOO WORD!!!',
  }).parentElement;
  expect(headingContainer).toHaveStyle({
    background: 'blue',
  });
  expect(headingContainer).toHaveStyleRule('background', 'blue');
});
