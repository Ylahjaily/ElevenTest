import React from 'react';
import { render } from '@testing-library/react';
import Message from './Message';

test('renders learn react link', () => {
  const { getByText } = render(<Message />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
