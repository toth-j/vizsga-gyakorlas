import { render, screen } from '@testing-library/react';
import App from './App';

it('should contain a main section', () => {
  render(<App />);
  const mainElement = screen.getByRole('main');
  expect(mainElement).toBeInTheDocument();
  expect(mainElement.tagName).toMatch(/^main$/i);
});

it('should contain the expected text', () => {
  render(<App />);
  const mainElement = screen.getByRole('main');
  const lastParagraph = screen.getByText(/^Sed efficitur finibus tellus/);
  expect(lastParagraph.tagName).toMatch(/^p$/i);
  expect(mainElement).toContainElement(lastParagraph);
});

it('should contain the footer', () => {
  render(<App />);
  const footerElement = screen.getByRole('contentinfo');
  expect(footerElement).toBeInTheDocument();
  expect(footerElement.textContent).toMatch(/^Készítette:/i);
  expect(footerElement.tagName).toMatch(/^footer$/i);
});

it('should contain the header', () => {
  render(<App />);
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();
  expect(headerElement.tagName).toMatch(/^header$/i);

  const imageElement = screen.getByAltText('Antikvárium logó');
  expect(headerElement).toContainElement(imageElement);

  const headingElement = screen.getByText('Antikvárium');
  expect(headingElement.tagName).toMatch(/^h1$/i);
  expect(headerElement).toContainElement(headingElement);
});

