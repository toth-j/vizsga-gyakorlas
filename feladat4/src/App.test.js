import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Konyvajanlo from './Konyvajanlo';

it('should display a recommendation correctly', () => {
  render(<Konyvajanlo
    nev='Test1'
    ar={1000}
  />);

  const header = screen.getByText(/Test1/);
  expect(header).toBeInTheDocument();
  expect(header.tagName).toMatch(/^h3$/i);

  const price = screen.getByText(/1000/);
  expect(price).toBeInTheDocument();
  expect(price.tagName).toMatch(/^p$/i);
  expect(price.classList).not.toContain('akcio');
});

it('should apply bargain sale class', () => {
  render(<Konyvajanlo
    nev='Test2'
    ar={123}
    akcio={true}
  />);

  const price = screen.getByText(/123/);
  expect(price).toBeInTheDocument();
  expect(price.tagName).toMatch(/^p$/i);
  expect(price.classList).toContain('akcio');
});


it('should display the test data', () => {
  render(<App />);

  const title = screen.getByText(/Gyűrű Szövetsége/i);
  expect(title).toBeInTheDocument();
  const price = screen.getByText(/999/);
  expect(price).toBeInTheDocument();
  expect(price.classList).toContain('akcio');
});


