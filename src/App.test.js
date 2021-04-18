import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const linkElement = screen.getByText(/A simple RPG game made with React/i);
  expect(linkElement).toBeInTheDocument();
});
