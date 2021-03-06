/* eslint-env jasmine, jest */
/* eslint-disable react/jsx-no-bind */

import React from 'react';
import { render } from '@testing-library/react';
import Text from '../';

describe('components/Text', () => {
  test('default', () => {
    const { container } = render(<Text />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('nested', () => {
    const { container } = render(<Text children={<Text testID="child" />} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('allows "dir" to be overridden', () => {
    const { container } = render(<Text dir="rtl" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('prop "numberOfLines"', () => {});
});
