import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// const CLIENT_ID = "1tj8rx39ifu2sun4ti1z4739s5ottx";
// const CLIENT_SECRET = "caqbf6efoba9jcfpyqadic1ic6zz4j";