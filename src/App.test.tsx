import { render, screen } from '@testing-library/react'
import { App } from './App'

test('renders hello', () => {
  render(<App />)
  const el = screen.getByText('hello', { exact: false })
  expect(el).toHaveTextContent('Hello app')
})
