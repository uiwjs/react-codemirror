/* eslint-disable jest/no-conditional-expect */
import React, { useEffect, useRef } from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import '@testing-library/jest-dom';
// import userEvent from '@testing-library/user-event';
import CodeMirror, { ReactCodeMirrorRef } from '../src';

it('CodeMirror', async () => {
  const component = renderer.create(<CodeMirror />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('cm-theme-light');
  }
});

it('CodeMirror onChange', async () => {
  const handleChange = jest.fn((value) => {
    expect(value).toEqual('# title');
    return Array.isArray(value) ? value.join() : value;
  });
  const { findByRole, queryByText } = render(
    <CodeMirror autoFocus value="console.log('Hello world!')" onChange={handleChange} />,
  );
  const input = await findByRole('textbox');
  fireEvent.change(input, { target: { textContent: '# title' } });
  const elm = queryByText('# title');
  expect((elm as any).cmView.dom.innerHTML).toEqual('# title');
});

it('CodeMirror onUpdate', async () => {
  render(
    <CodeMirror
      value="console.log('Hello world!')"
      autoFocus
      onUpdate={(viewUpdate) => {
        expect(viewUpdate.state.doc.length).toEqual(27);
      }}
    />,
  );
});

it('CodeMirror ref', async () => {
  function Demo() {
    const ref = useRef<ReactCodeMirrorRef>(null);
    useEffect(() => {
      expect(Object.keys(ref.current!)).toEqual(['editor', 'state', 'view']);
    }, [ref]);

    return <CodeMirror ref={ref} value="console.log('Hello world!')" />;
  }
  render(<Demo />);
});

it('CodeMirror theme', async () => {
  const component = renderer.create(<CodeMirror theme="dark" />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('cm-theme-dark');
  }
});

it('CodeMirror className', async () => {
  const component = renderer.create(<CodeMirror className="test" />);
  let tree = component.toJSON();
  if (tree && !Array.isArray(tree)) {
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('cm-theme-light test');
  }
});

it('CodeMirror placeholder', async () => {
  const { findByText } = render(<CodeMirror placeholder="Hello World" className="test" />);
  const text = await findByText('Hello World');
  expect(text.className).toEqual('cm-placeholder');
  expect(text.contentEditable).toEqual('false');
});

it('CodeMirror editable', async () => {
  const { getByRole } = render(<CodeMirror editable={false} className="test" />);
  const text = getByRole('textbox');
  expect(text.className).toEqual('cm-content');
  expect(text.tagName).toEqual('DIV');
});
