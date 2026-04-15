import { render, screen } from '@testing-library/react';
import About from './page';

test('renders about us data', () => {
  render(<About />);
  expect(
    screen.getByText(/welcome to our movie database website!/i)
  ).toBeInTheDocument();
});
