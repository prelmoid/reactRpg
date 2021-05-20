import { render, screen } from '@testing-library/react';
import WeatherDisplay from '../components/weatherapi/WeatherDisplay';

test('renders weather div', () => {
  render(<WeatherDisplay />);
  const linkElement = screen.getByText(/The temperature at your current location/i);
  expect(linkElement).toBeInTheDocument();
});
