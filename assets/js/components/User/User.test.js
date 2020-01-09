import React from 'react';
import { render } from '@testing-library/react';
import Users from './User';

test('renders learn react link', () => {
  const { getByText } = render(<Users />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
