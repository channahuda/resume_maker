import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextArea from './TextArea';

describe('TextArea', () => {
  it('renders the component with default props', () => {
    const { getByTestId } = render(<TextArea />);
    expect(getByTestId('text-area')).toBeInTheDocument();
  });

  it('renders the toolbar when the button is clicked', () => {
    const { getByTestId, getByRole } = render(<TextArea />);
    const button = getByTestId('toggle-toolbar-button');
    fireEvent.click(button);
    expect(getByRole('toolbar')).toBeInTheDocument();
  });

  it('calls the handleChange prop when text is entered', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<TextArea handleChange={handleChange} />);
    const editor = getByRole('textbox');
    fireEvent.change(editor, { target: { value: 'Test' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
