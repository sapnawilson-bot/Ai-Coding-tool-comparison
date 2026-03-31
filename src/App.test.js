import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the User Profile Card heading', () => {
  render(<App />);
  const heading = screen.getByText(/user profile card/i);
  expect(heading).toBeInTheDocument();
});

test('renders the sample user name in the App', () => {
  render(<App />);
  expect(screen.getByText('Jane Doe')).toBeInTheDocument();
});
