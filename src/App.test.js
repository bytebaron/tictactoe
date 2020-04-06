import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

afterEach(cleanup);

test('renders app', () => {
  const { getByText } = render(<App />);
  
});
