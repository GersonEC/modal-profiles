import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('<Button />', () => {
  it('should render correctly', () => {
    const jestFn = jest.fn;
    render(
      <Button size='medium' variant='fill' onClick={jestFn}>
        Hello Edreams
      </Button>
    );
    const label = screen.getByText(/hello edreams/i);
    expect(label).toBeInTheDocument();
  });

  it('should call the callback on click', () => {
    const fnMock = jest.fn();
    render(
      <Button size='medium' variant='fill' onClick={fnMock}>
        Hello Edreams
      </Button>
    );
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(fnMock).toHaveBeenCalled();
    expect(fnMock).toHaveBeenCalledTimes(1);
  });

  it('should not call the callback if button is disabled', () => {
    const fnMock = jest.fn();
    render(
      <Button disabled={true} size='medium' variant='fill' onClick={fnMock}>
        Hello Edreams
      </Button>
    );
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(fnMock).not.toHaveBeenCalled();
    expect(fnMock).toHaveBeenCalledTimes(0);
  });
});
