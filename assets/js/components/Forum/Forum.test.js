import React from 'react';
import { render } from '@testing-library/react';
import Forum from './Forum';

test('renders learn react link', () => {
  const { getByText } = render(<Forum />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
