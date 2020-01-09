import React from 'react';
import { render } from '@testing-library/react';
import Postslist from './Postslist';

test('renders learn react link', () => {
  const { getByText } = render(<Postslist />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
