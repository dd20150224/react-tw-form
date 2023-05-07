import { render } from '@testing-library/react';

import Counter from './counter';

describe(Counter, () => {
  it("counter displays correct ionitial count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const countValue = getByTestId('count').textContent;
    expect(countValue).toEqual('0');
  });
});