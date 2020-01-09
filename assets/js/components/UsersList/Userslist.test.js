import React from 'react';
import { render } from '@testing-library/react';
import Userslist from './Userslist';

test('renders learn react link', () => {
  const { getByText } = render(<Userslist />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
