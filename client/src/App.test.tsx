import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe( '')
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/State Of Mind/i);
  expect(headerElement).toBeInTheDocument();
});
