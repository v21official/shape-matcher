import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Board from '../components/Board'

describe('Board Component', () => {
  render(<Board />);
  test('displays board game', async () => {
    const cells = await screen.findAllByTestId("cell-element");
    await waitFor(() => [
      expect(cells).toHaveLength(16)
    ]);
  })
})

