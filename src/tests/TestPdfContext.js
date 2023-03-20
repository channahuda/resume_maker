import { render } from '@testing-library/react'
import PdfEventContext from './PdfEventContext'

test('renders component that uses PdfEventContext', () => {
  // Define a mock value for PdfEventContext
  const mockPdfEvent = {
    someProperty: 'some value'
  }

  // Render a component that uses PdfEventContext with the mock value
  const { getByText } = render(
    <PdfEventContext.Provider value={mockPdfEvent}>
      <MyComponent />
    </PdfEventContext.Provider>
  )

  // Verify that the component renders with the correct behavior
  expect(getByText('Education')).toBeInTheDocument()
})
