import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'

import App from './App'

test('shows Hello, world!', () => {
  render(<App />)

  expect(screen.getByText('Hello, World!')).toBeInTheDocument()
})