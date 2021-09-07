/* eslint-disable jest/no-conditional-expect */
import React, { useEffect, useRef } from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
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
  render(
    <CodeMirror
      autoFocus
      value="console.log('Hello world!')"
      onChange={(value) => {
        expect(value).toEqual(`console.log('Hello world!')`);
      }}
    />,
  );
  // const cont = document.querySelector('.cm-content');
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
