import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

function AppWithRoute({ routeName = '/' }) {
  return <MemoryRouter initialEntries={[routeName]} >
    <App />
  </MemoryRouter>;
}

it('should have a navbar', () => {
  render(<AppWithRoute />);

  const navbar = screen.getByRole('navigation');
  expect(navbar).toBeInTheDocument();
});

it('should load the main page by default and not the others', () => {
  render(<AppWithRoute />);

  const main = screen.getByText(/Üdvözöljük a honlapunkon!/i);
  expect(main).toBeInTheDocument();

  const scifi = screen.queryByText(/Második Alapítvány/i);
  expect(scifi).toBeNull();

  const humor = screen.queryByText(/Vadkanapó/i);
  expect(humor).toBeNull();
});

it('should load the correct page with route /scifi', () => {
  render(<AppWithRoute routeName='/scifi' />);

  const main = screen.queryByText(/Üdvözöljük a honlapunkon!/i);
  expect(main).toBeNull();

  const scifi = screen.getByText(/Második Alapítvány/i);
  expect(scifi).toBeInTheDocument();

  const humor = screen.queryByText(/Vadkanapó/i);
  expect(humor).toBeNull();
});

it('should load the correct page with route /humor', () => {
  render(<AppWithRoute routeName='/humor' />);

  const main = screen.queryByText(/Üdvözöljük a honlapunkon!/i);
  expect(main).toBeNull();

  const scifi = screen.queryByText(/Második Alapítvány/i);
  expect(scifi).toBeNull();

  const humor = screen.getByText(/Vadkanapó/i);
  expect(humor).toBeInTheDocument();
});

it('should properly navigate', () => {
  render(<AppWithRoute />);

  const main = screen.getByText(/Üdvözöljük a honlapunkon!/i);
  expect(main).toBeInTheDocument();

  const scifi = screen.queryByText(/Második Alapítvány/i);
  expect(scifi).toBeNull();

  const scifiLink = screen.getByText(/Sci-fi/i);
  fireEvent(scifiLink, new MouseEvent('click', { bubbles: true, cancelable: true }));

  const main2 = screen.queryByText(/Üdvözöljük a honlapunkon!/i);
  expect(main2).toBeNull();

  const scifi2 = screen.getByText(/Második Alapítvány/i);
  expect(scifi2).toBeInTheDocument();

  const humorLink = screen.getByText(/Humor/i);
  fireEvent(humorLink, new MouseEvent('click', { bubbles: true, cancelable: true }));

  const main3 = screen.queryByText(/Üdvözöljük a honlapunkon!/i);
  expect(main3).toBeNull();

  const scifi3 = screen.queryByText(/Második Alapítvány/i);
  expect(scifi3).toBeNull();
});

