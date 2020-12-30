react-codemirror
===

![Build & Deploy](https://github.com/uiwjs/react-codemirror/workflows/Build%20&%20Deploy/badge.svg)

CodeMirror component for React. demo @[uiwjs.github.io/react-codemirror/](https://uiwjs.github.io/react-codemirror/)

<a href="https://uiwjs.github.io/react-codemirror/"><img src="https://raw.githubusercontent.com/uiwjs/react-codemirror/master/react-codemirror.png" /></a>

<!--dividing-->

**Features:**

🌱 Automatically load `mode` files based on configuration.  
🚀 Quickly and easily configure the API.  

## Install

```bash
# Not dependent on uiw.
npm install @uiw/react-codemirror --save
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

const code = 'const a = 0;';

<CodeMirror
  value={code}
  options={{
    theme: 'monokai',
    keyMap: 'sublime',
    mode: 'jsx',
  }}
/>
```

requiring codemirror resources, This is often the case when specifying certain language modes and themes. Just set the mode, the language resources will automatically lazy loading.

```jsx
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

const code = 'const a = 0;';

<CodeMirror
  value={code}
  options={{
    theme: 'monokai',
    tabSize: 2,
    keyMap: 'sublime',
    mode: 'jsx',
  }}
/>
```

## Change Theme

```diff
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
+ import 'codemirror/theme/monokai.css';

const code = 'const a = 0;';

  <CodeMirror
    value={code}
    options={{
+    theme: 'monokai',
      keyMap: 'sublime',
      mode: 'jsx',
    }}
  />
```

## Properties

- `width` width of editor. Defaults to `100%`.
- `height` height of editor. Defaults to `100%`.
- `value` value of the auto created model in the editor.
- `options` refer to [codemirror options](https://codemirror.net/doc/manual.html#config).

## Props Events

[codemirror events](https://codemirror.net/doc/manual.html#events)

```tsx
import React from 'react';
import CodeMirror from 'codemirror';
export type DOMEvent = 'onMouseDown' | 'onDblClick' | 'onTouchStart' | 'onContextMenu' | 'onKeyDown' | 'onKeyPress'
  | 'onKeyUp' | 'onCut' | 'onCopy' | 'onPaste' | 'onDragStart' | 'onDragEnter' | 'onDragOver' | 'onDragLeave' | 'onDrop';

export type IDOMEvent = {
  [P in DOMEvent]?: (instance: CodeMirror.Editor, event: Event) => void;
}

export type Editor = CodeMirror.Editor;
export interface IReactCodemirror extends IDOMEvent {
  /**
   * Fired whenever a change occurs to the document.
   * changeObj has a similar type as the object passed to the editor's "change" event,
   * but it never has a next property, because document change events are not batched (whereas editor change events are).
   */
  onChange?: (instance: CodeMirror.Editor, change: CodeMirror.EditorChangeLinkedList[]) => void;
  /**
   * Like the "change" event, but batched per operation, passing an
   * array containing all the changes that happened in the operation.
   * This event is fired after the operation finished, and display
   * changes it makes will trigger a new operation.
   * */
  onChanges?: (instance: CodeMirror.Editor, change: CodeMirror.EditorChangeLinkedList[]) => void;
  /**
   * This event is fired before a change is applied, and its handler may choose to modify or cancel the change.
   * The changeObj never has a next property, since this is fired for each individual change, and not batched per operation.
   * Note: you may not do anything from a "beforeChange" handler that would cause changes to the document or its visualization.
   * Doing so will, since this handler is called directly from the bowels of the CodeMirror implementation,
   * probably cause the editor to become corrupted.
   */
  onBeforeChange?: (instance: CodeMirror.Editor, change: CodeMirror.EditorChangeCancellable) => void;
  /**
   * Will be fired when the cursor or selection moves, or any change is made to the editor content.
   */
  onCursorActivity?: (instance: CodeMirror.Editor) => void;
  /**
   * This event is fired before the selection is moved. Its handler may modify the resulting selection head and anchor.
   * Handlers for this event have the same restriction as "beforeChange" handlers they should not do anything to directly update the state of the editor.
   */
  onBeforeSelectionChange?: (instance: CodeMirror.Editor, selection: { head: Position; anchor: Position; }) => void;
  /**
   * Fires whenever the view port of the editor changes (due to scrolling, editing, or any other factor).
   * The from and to arguments give the new start and end of the viewport. 
   */
  onViewportChange?: (instance: CodeMirror.Editor, from: number, to: number) => void;
  /** Fires when the editor gutter (the line-number area) is clicked. Will pass the editor instance as first argument,
   * the (zero-based) number of the line that was clicked as second argument, the CSS class of the gutter that was clicked as third argument,
   * and the raw mousedown event object as fourth argument.
   */
  onGutterClick?: (instance: CodeMirror.Editor, line: number, gutter: string, clickEvent: Event) => void;

  /** Fires whenever the editor is focused. */
  onFocus?: (instance: CodeMirror.Editor) => void;

  /** Fires whenever the editor is unfocused. */
  onBlur?: (instance: CodeMirror.Editor) => void;

  /** Fires when the editor is scrolled. */
  onScroll?: (instance: CodeMirror.Editor) => void;

  /** Will be fired whenever CodeMirror updates its DOM display. */
  onUpdate?: (instance: CodeMirror.Editor) => void;

  /** Fired whenever a line is (re-)rendered to the DOM. Fired right after the DOM element is built, before it is added to the document.
   * The handler may mess with the style of the resulting element, or add event handlers, but should not try to change the state of the editor.
   */
  onRenderLine?: (instance: CodeMirror.Editor, line: CodeMirror.LineHandle, element: HTMLElement) => void;
  /**
   * Fires when the overwrite flag is flipped.
   * */
  onOverwriteToggle?: (instance: CodeMirror.Editor, overwrite: boolean) => void;
  /**
   * Fired whenever the cursor or selection in this document changes.
   * */
  onCursorActivity?(instance: CodeMirror.Editor): void;
  /**
   * Will be fired when the line object is deleted. A line object is associated with the start of the line.
   * Mostly useful when you need to find out when your gutter markers on a given line are removed.
   * */
  onDelete?(): void;
  /**
   * Fired when the cursor enters the marked range.
   * From this event handler, the editor state may be inspected but not modified,
   * with the exception that the range on which the event fires may be cleared.
   * */
  onBeforeCursorEnter?(): void;
  /**
   * Fired when the cursor enters the marked range.
   * From this event handler, the editor state may be inspected but not modified,
   * with the exception that the range on which the event fires may be cleared.
   * */
  onClear?(): void;
  /**
   * Fired when the last part of the marker is removed from the document by editing operations.
   * */
  onHide?(): void;
  /**
   * Fired when, after the marker was removed by editing, a undo operation brought the marker back.
   * */
  onUnhide?(): void;
  /**
   * Fired whenever the editor re-adds the widget to the DOM.
   * This will happen once right after the widget is added (if it is scrolled into view),
   * and then again whenever it is scrolled out of view and back in again, or when changes to the editor options
   * or the line the widget is on require the widget to be redrawn.
   * */
  onRedraw?(): void;
}
```

## Options

[codemirror options](https://codemirror.net/doc/manual.html#config)

```js
/** string| The starting value of the editor. Can be a string, or a document object. */
value?: any;

/** string|object. The mode to use. When not given, this will default to the first mode that was loaded.
It may be a string, which either simply names the mode or is a MIME type associated with the mode.
Alternatively, it may be an object containing configuration options for the mode,
with a name property that names the mode (for example {name: "javascript", json: true}). */
mode?: any;

/** The theme to style the editor with. You must make sure the CSS file defining the corresponding .cm-s-[name] styles is loaded.
The default is "default". */
theme?: string;

/** How many spaces a block (whatever that means in the edited language) should be indented. The default is 2. */
indentUnit?: number;

/** Whether to use the context-sensitive indentation that the mode provides (or just indent the same as the line before). Defaults to true. */
smartIndent?: boolean;

/** The width of a tab character. Defaults to 4. */
tabSize?: number;

/** Whether, when indenting, the first N*tabSize spaces should be replaced by N tabs. Default is false. */
indentWithTabs?: boolean;

/** Configures whether the editor should re-indent the current line when a character is typed
that might change its proper indentation (only works if the mode supports indentation). Default is true. */
electricChars?: boolean;

/** Determines whether horizontal cursor movement through right-to-left (Arabic, Hebrew) text
is visual (pressing the left arrow moves the cursor left)
or logical (pressing the left arrow moves to the next lower index in the string, which is visually right in right-to-left text).
The default is false on Windows, and true on other platforms. */
rtlMoveVisually?: boolean;

/** Configures the keymap to use. The default is "default", which is the only keymap defined in codemirror.js itself.
Extra keymaps are found in the keymap directory. See the section on keymaps for more information. */
keyMap?: string;

/** Can be used to specify extra keybindings for the editor, alongside the ones defined by keyMap. Should be either null, or a valid keymap value. */
extraKeys?: any;

/** Whether CodeMirror should scroll or wrap for long lines. Defaults to false (scroll). */
lineWrapping?: boolean;

/** Whether to show line numbers to the left of the editor. */
lineNumbers?: boolean;

/** At which number to start counting lines. Default is 1. */
firstLineNumber?: number;

/** A function used to format line numbers. The function is passed the line number, and should return a string that will be shown in the gutter. */
lineNumberFormatter?: (line: number) => string;

/** Can be used to add extra gutters (beyond or instead of the line number gutter).
Should be an array of CSS class names, each of which defines a width (and optionally a background),
and which will be used to draw the background of the gutters.
May include the CodeMirror-linenumbers class, in order to explicitly set the position of the line number gutter
(it will default to be to the right of all other gutters). These class names are the keys passed to setGutterMarker. */
gutters?: string[];

/** Provides an option foldGutter, which can be used to create a gutter with markers indicating the blocks that can be folded. */
foldGutter?: boolean;

/** Determines whether the gutter scrolls along with the content horizontally (false)
or whether it stays fixed during horizontal scrolling (true, the default). */
fixedGutter?: boolean;

/**
  * Chooses a scrollbar implementation. The default is "native", showing native scrollbars. The core library also
  * provides the "null" style, which completely hides the scrollbars. Addons can implement additional scrollbar models.
  */
scrollbarStyle?: string;

/** boolean|string. This disables editing of the editor content by the user. If the special value "nocursor" is given (instead of simply true), focusing of the editor is also disallowed. */
readOnly?: any;

/**Whether the cursor should be drawn when a selection is active. Defaults to false. */
showCursorWhenSelecting?: boolean;

/** The maximum number of undo levels that the editor stores. Defaults to 40. */
undoDepth?: number;

/** The period of inactivity (in milliseconds) that will cause a new history event to be started when typing or deleting. Defaults to 500. */
historyEventDelay?: number;

/** The tab index to assign to the editor. If not given, no tab index will be assigned. */
tabindex?: number;

/** Can be used to make CodeMirror focus itself on initialization. Defaults to off.
When fromTextArea is used, and no explicit value is given for this option, it will be set to true when either the source textarea is focused,
or it has an autofocus attribute and no other element is focused. */
autofocus?: boolean;

/** Controls whether drag-and - drop is enabled. On by default. */
dragDrop?: boolean;

/** When given , this will be called when the editor is handling a dragenter , dragover , or drop event.
It will be passed the editor instance and the event object as arguments.
The callback can choose to handle the event itself , in which case it should return true to indicate that CodeMirror should not do anything further. */
onDragEvent?: (instance: CodeMirror.Editor, event: Event) => boolean;

/** This provides a rather low - level hook into CodeMirror's key handling.
If provided, this function will be called on every keydown, keyup, and keypress event that CodeMirror captures.
It will be passed two arguments, the editor instance and the key event.
This key event is pretty much the raw key event, except that a stop() method is always added to it.
You could feed it to, for example, jQuery.Event to further normalize it.
This function can inspect the key event, and handle it if it wants to.
It may return true to tell CodeMirror to ignore the event.
Be wary that, on some browsers, stopping a keydown does not stop the keypress from firing, whereas on others it does.
If you respond to an event, you should probably inspect its type property and only do something when it is keydown
(or keypress for actions that need character data). */
onKeyEvent?: (instance: CodeMirror.Editor, event: Event) => boolean;

/** Half - period in milliseconds used for cursor blinking. The default blink rate is 530ms. */
cursorBlinkRate?: number;

/** Determines the height of the cursor. Default is 1 , meaning it spans the whole height of the line.
For some fonts (and by some tastes) a smaller height (for example 0.85),
which causes the cursor to not reach all the way to the bottom of the line, looks better */
cursorHeight?: number;

/** Highlighting is done by a pseudo background - thread that will work for workTime milliseconds,
and then use timeout to sleep for workDelay milliseconds.
The defaults are 200 and 300, you can change these options to make the highlighting more or less aggressive. */
workTime?: number;

/** See workTime. */
workDelay?: number;

/** Indicates how quickly CodeMirror should poll its input textarea for changes(when focused).
Most input is captured by events, but some things, like IME input on some browsers, don't generate events that allow CodeMirror to properly detect it.
Thus, it polls. Default is 100 milliseconds. */
pollInterval?: number

/** By default, CodeMirror will combine adjacent tokens into a single span if they have the same class.
This will result in a simpler DOM tree, and thus perform better. With some kinds of styling(such as rounded corners),
this will change the way the document looks. You can set this option to false to disable this behavior. */
flattenSpans?: boolean;

/** When highlighting long lines, in order to stay responsive, the editor will give up and simply style
the rest of the line as plain text when it reaches a certain position. The default is 10000.
You can set this to Infinity to turn off this behavior. */
maxHighlightLength?: number;

/** Specifies the amount of lines that are rendered above and below the part of the document that's currently scrolled into view.
This affects the amount of updates needed when scrolling, and the amount of work that such an update does.
You should usually leave it at its default, 10. Can be set to Infinity to make sure the whole document is always rendered,
and thus the browser's text search works on it. This will have bad effects on performance of big documents. */
viewportMargin?: number;

/** Optional lint configuration to be used in conjunction with CodeMirror's linter addon. */
lint?: boolean | LintOptions;

/** Optional value to be used in conjunction with CodeMirror’s placeholder add-on. */
placeholder?: string;
```

## Editor

```js
/** Tells you whether the editor currently has focus. */
hasFocus(): boolean;

/** Used to find the target position for horizontal cursor motion.start is a { line , ch } object,
amount an integer(may be negative), and unit one of the string "char", "column", or "word".
Will return a position that is produced by moving amount times the distance specified by unit.
When visually is true , motion in right - to - left text will be visual rather than logical.
When the motion was clipped by hitting the end or start of the document, the returned value will have a hitSide property set to true. */
findPosH(start: CodeMirror.Position, amount: number, unit: string, visually: boolean): { line: number; ch: number; hitSide?: boolean; };

/** Similar to findPosH , but used for vertical motion.unit may be "line" or "page".
The other arguments and the returned value have the same interpretation as they have in findPosH. */
findPosV(start: CodeMirror.Position, amount: number, unit: string): { line: number; ch: number; hitSide?: boolean; };

/** Returns the start and end of the 'word' (the stretch of letters, whitespace, or punctuation) at the given position. */
findWordAt(pos: CodeMirror.Position): CodeMirror.Range;

/** Change the configuration of the editor. option should the name of an option, and value should be a valid value for that option. */
setOption(option: string, value: any): void;

/** Retrieves the current value of the given option for this editor instance. */
getOption(option: string): any;

/** Attach an additional keymap to the editor.
This is mostly useful for add - ons that need to register some key handlers without trampling on the extraKeys option.
Maps added in this way have a higher precedence than the extraKeys and keyMap options, and between them,
the maps added earlier have a lower precedence than those added later, unless the bottom argument was passed,
in which case they end up below other keymaps added with this method. */
addKeyMap(map: any, bottom?: boolean): void;

/** Disable a keymap added with addKeyMap.Either pass in the keymap object itself , or a string,
which will be compared against the name property of the active keymaps. */
removeKeyMap(map: any): void;

/** Enable a highlighting overlay.This is a stateless mini - mode that can be used to add extra highlighting.
For example, the search add - on uses it to highlight the term that's currently being searched.
mode can be a mode spec or a mode object (an object with a token method). The options parameter is optional. If given, it should be an object.
Currently, only the opaque option is recognized. This defaults to off, but can be given to allow the overlay styling, when not null,
to override the styling of the base mode entirely, instead of the two being applied together. */
addOverlay(mode: any, options?: any): void;

/** Pass this the exact argument passed for the mode parameter to addOverlay to remove an overlay again. */
removeOverlay(mode: any): void;


/** Retrieve the currently active document from an editor. */
getDoc(): CodeMirror.Doc;

/** Attach a new document to the editor. Returns the old document, which is now no longer associated with an editor. */
swapDoc(doc: CodeMirror.Doc): CodeMirror.Doc;

/** Get the content of the current editor document. You can pass it an optional argument to specify the string to be used to separate lines (defaults to "\n"). */
getValue(seperator?: string): string;

/** Set the content of the current editor document. */
setValue(content: string): void;

/** Sets the gutter marker for the given gutter (identified by its CSS class, see the gutters option) to the given value.
Value can be either null, to clear the marker, or a DOM element, to set it. The DOM element will be shown in the specified gutter next to the specified line. */
setGutterMarker(line: any, gutterID: string, value: HTMLElement | null): CodeMirror.LineHandle;

/** Remove all gutter markers in the gutter with the given ID. */
clearGutter(gutterID: string): void;

/** Set a CSS class name for the given line.line can be a number or a line handle.
where determines to which element this class should be applied, can can be one of "text" (the text element, which lies in front of the selection),
"background"(a background element that will be behind the selection),
or "wrap" (the wrapper node that wraps all of the line's elements, including gutter elements).
class should be the name of the class to apply. */
addLineClass(line: any, where: string, _class_: string): CodeMirror.LineHandle;

/** Remove a CSS class from a line.line can be a line handle or number.
where should be one of "text", "background", or "wrap"(see addLineClass).
class can be left off to remove all classes for the specified node, or be a string to remove only a specific class. */
removeLineClass(line: any, where: string, class_?: string): CodeMirror.LineHandle;

/** Compute the line at the given pixel height. mode is the relative element
to use to compute this line, it may be "window", "page" (the default), or "local" */
lineAtHeight(height: number, mode?: CoordsMode): number;

/** Computes the height of the top of a line, in the coordinate system specified by mode, it may be "window",
"page" (the default), or "local". When a line below the bottom of the document is specified, the returned value
is the bottom of the last line in the document. By default, the position of the actual text is returned.
If includeWidgets is true and the line has line widgets, the position above the first line widget is returned. */
heightAtLine(line: any, mode?: CoordsMode, includeWidgets?: boolean): number;

/** Returns the line number, text content, and marker status of the given line, which can be either a number or a line handle. */
lineInfo(line: any): {
    line: any;
    handle: any;
    text: string;
    /** Object mapping gutter IDs to marker elements. */
    gutterMarkers: any;
    textClass: string;
    bgClass: string;
    wrapClass: string;
    /** Array of line widgets attached to this line. */
    widgets: any;
};

/** Puts node, which should be an absolutely positioned DOM node, into the editor, positioned right below the given { line , ch } position.
When scrollIntoView is true, the editor will ensure that the entire node is visible (if possible).
To remove the widget again, simply use DOM methods (move it somewhere else, or call removeChild on its parent). */
addWidget(pos: CodeMirror.Position, node: HTMLElement, scrollIntoView: boolean): void;

/** Adds a line widget, an element shown below a line, spanning the whole of the editor's width, and moving the lines below it downwards.
line should be either an integer or a line handle, and node should be a DOM node, which will be displayed below the given line.
options, when given, should be an object that configures the behavior of the widget.
Note that the widget node will become a descendant of nodes with CodeMirror-specific CSS classes, and those classes might in some cases affect it. */
addLineWidget(line: any, node: HTMLElement, options?: {
    /** Whether the widget should cover the gutter. */
    coverGutter: boolean;
    /** Whether the widget should stay fixed in the face of horizontal scrolling. */
    noHScroll: boolean;
    /** Causes the widget to be placed above instead of below the text of the line. */
    above: boolean;
    /** When true, will cause the widget to be rendered even if the line it is associated with is hidden. */
    showIfHidden: boolean;
}): CodeMirror.LineWidget;


/** Programatically set the size of the editor (overriding the applicable CSS rules).
width and height height can be either numbers(interpreted as pixels) or CSS units ("100%", for example).
You can pass null for either of them to indicate that that dimension should not be changed. */
setSize(width: any, height: any): void;

/** Scroll the editor to a given(pixel) position.Both arguments may be left as null or undefined to have no effect. */
scrollTo(x?: number | null, y?: number | null): void;

/** Get an { left , top , width , height , clientWidth , clientHeight } object that represents the current scroll position, the size of the scrollable area,
and the size of the visible area(minus scrollbars). */
getScrollInfo(): CodeMirror.ScrollInfo;

/** Scrolls the given element into view. pos is a { line , ch } position, referring to a given character, null, to refer to the cursor.
The margin parameter is optional. When given, it indicates the amount of pixels around the given area that should be made visible as well. */
scrollIntoView(pos: CodeMirror.Position | null, margin?: number): void;

/** Scrolls the given element into view. pos is a { left , top , right , bottom } object, in editor-local coordinates.
The margin parameter is optional. When given, it indicates the amount of pixels around the given area that should be made visible as well. */
scrollIntoView(pos: { left: number; top: number; right: number; bottom: number; }, margin: number): void;

/** Scrolls the given element into view. pos is a { line, ch } object, in editor-local coordinates.
The margin parameter is optional. When given, it indicates the amount of pixels around the given area that should be made visible as well. */
scrollIntoView(pos: { line: number, ch: number }, margin?: number): void;

/** Scrolls the given element into view. pos is a { from, to } object, in editor-local coordinates.
The margin parameter is optional. When given, it indicates the amount of pixels around the given area that should be made visible as well. */
scrollIntoView(pos: { from: CodeMirror.Position, to: CodeMirror.Position }, margin: number): void;

/** Returns an { left , top , bottom } object containing the coordinates of the cursor position.
If mode is "local", they will be relative to the top-left corner of the editable document.
If it is "page" or not given, they are relative to the top-left corner of the page.
where is a boolean indicating whether you want the start(true) or the end(false) of the selection. */
cursorCoords(where: boolean, mode?: CoordsMode): { left: number; top: number; bottom: number; };

/** Returns an { left , top , bottom } object containing the coordinates of the cursor position.
If mode is "local", they will be relative to the top-left corner of the editable document.
If it is "page" or not given, they are relative to the top-left corner of the page.
where specifies the precise position at which you want to measure. */
cursorCoords(where: CodeMirror.Position, mode?: CoordsMode): { left: number; top: number; bottom: number; };

/** Returns the position and dimensions of an arbitrary character. pos should be a { line , ch } object.
If mode is "local", they will be relative to the top-left corner of the editable document.
If it is "page" or not given, they are relative to the top-left corner of the page.
This differs from cursorCoords in that it'll give the size of the whole character,
rather than just the position that the cursor would have when it would sit at that position. */
charCoords(pos: CodeMirror.Position, mode?: CoordsMode): { left: number; right: number; top: number; bottom: number; };

/** Given an { left , top } object , returns the { line , ch } position that corresponds to it.
The optional mode parameter determines relative to what the coordinates are interpreted.
It may be "window", "page" (the default), or "local". */
coordsChar(object: { left: number; top: number; }, mode?: CoordsMode): CodeMirror.Position;

/** Returns the line height of the default font for the editor. */
defaultTextHeight(): number;

/** Returns the pixel width of an 'x' in the default font for the editor.
(Note that for non - monospace fonts , this is mostly useless, and even for monospace fonts, non - ascii characters might have a different width). */
defaultCharWidth(): number;

/** Returns a { from , to } object indicating the start (inclusive) and end (exclusive) of the currently rendered part of the document.
In big documents, when most content is scrolled out of view, CodeMirror will only render the visible part, and a margin around it.
See also the viewportChange event. */
getViewport(): { from: number; to: number };

/** If your code does something to change the size of the editor element (window resizes are already listened for), or unhides it,
you should probably follow up by calling this method to ensure CodeMirror is still looking as intended. */
refresh(): void;

/** Retrieves information about the token the current mode found before the given position (a {line, ch} object). */
getTokenAt(pos: CodeMirror.Position, precise?: boolean): Token;

/** This is a (much) cheaper version of getTokenAt useful for when you just need the type of the token at a given position, 
and no other information. Will return null for unstyled tokens, and a string, potentially containing multiple 
space-separated style names, otherwise. */
getTokenTypeAt(pos: CodeMirror.Position): string;

/** This is similar to getTokenAt, but collects all tokens for a given line into an array. */
getLineTokens(line: number, precise?: boolean): Token[];

/** Returns the mode's parser state, if any, at the end of the given line number.
If no line number is given, the state at the end of the document is returned.
This can be useful for storing parsing errors in the state, or getting other kinds of contextual information for a line. */
getStateAfter(line?: number): any;

/** CodeMirror internally buffers changes and only updates its DOM structure after it has finished performing some operation.
If you need to perform a lot of operations on a CodeMirror instance, you can call this method with a function argument.
It will call the function, buffering up all changes, and only doing the expensive update after the function returns.
This can be a lot faster. The return value from this method will be the return value of your function. */
operation<T>(fn: ()=> T): T;

/** Adjust the indentation of the given line.
The second argument (which defaults to "smart") may be one of:
"prev" Base indentation on the indentation of the previous line.
"smart" Use the mode's smart indentation if available, behave like "prev" otherwise.
"add" Increase the indentation of the line by one indent unit.
"subtract" Reduce the indentation of the line. */
indentLine(line: number, dir?: string): void;

/** Tells you whether the editor's content can be edited by the user. */
isReadOnly(): boolean;

/** Runs the command with the given name on the editor. */
execCommand(name: string): void;

/** Give the editor focus. */
focus(): void;

/** Returns the hidden textarea used to read input. */
getInputField(): HTMLTextAreaElement;

/** Returns the DOM node that represents the editor, and controls its size. Remove this from your tree to delete an editor instance. */
getWrapperElement(): HTMLElement;

/** Returns the DOM node that is responsible for the scrolling of the editor. */
getScrollerElement(): HTMLElement;

/** Fetches the DOM node that contains the editor gutters. */
getGutterElement(): HTMLElement;



/** Events are registered with the on method (and removed with the off method).
These are the events that fire on the instance object. The name of the event is followed by the arguments that will be passed to the handler.
The instance argument always refers to the editor instance. */
on(eventName: string, handler: (instance: CodeMirror.Editor) => void ): void;
off(eventName: string, handler: (instance: CodeMirror.Editor) => void ): void;

/** Fires every time the content of the editor is changed. */
on(eventName: 'change', handler: (instance: CodeMirror.Editor, change: CodeMirror.EditorChangeLinkedList) => void ): void;
off(eventName: 'change', handler: (instance: CodeMirror.Editor, change: CodeMirror.EditorChangeLinkedList) => void ): void;

/** Like the "change" event, but batched per operation, passing an
  * array containing all the changes that happened in the operation.
  * This event is fired after the operation finished, and display
  * changes it makes will trigger a new operation. */
on(eventName: 'changes', handler: (instance: CodeMirror.Editor, change: CodeMirror.EditorChangeLinkedList[]) => void ): void;
off(eventName: 'changes', handler: (instance: CodeMirror.Editor, change: CodeMirror.EditorChangeLinkedList[]) => void ): void;

/** This event is fired before a change is applied, and its handler may choose to modify or cancel the change.
The changeObj never has a next property, since this is fired for each individual change, and not batched per operation.
Note: you may not do anything from a "beforeChange" handler that would cause changes to the document or its visualization.
Doing so will, since this handler is called directly from the bowels of the CodeMirror implementation,
probably cause the editor to become corrupted. */
on(eventName: 'beforeChange', handler: (instance: CodeMirror.Editor, change: CodeMirror.EditorChangeCancellable) => void ): void;
off(eventName: 'beforeChange', handler: (instance: CodeMirror.Editor, change: CodeMirror.EditorChangeCancellable) => void ): void;

/** Will be fired when the cursor or selection moves, or any change is made to the editor content. */
on(eventName: 'cursorActivity', handler: (instance: CodeMirror.Editor) => void ): void;
off(eventName: 'cursorActivity', handler: (instance: CodeMirror.Editor) => void ): void;

/** This event is fired before the selection is moved. Its handler may modify the resulting selection head and anchor.
Handlers for this event have the same restriction as "beforeChange" handlers � they should not do anything to directly update the state of the editor. */
on(eventName: 'beforeSelectionChange', handler: (instance: CodeMirror.Editor, selection: { head: CodeMirror.Position; anchor: CodeMirror.Position; }) => void ): void;
off(eventName: 'beforeSelectionChange', handler: (instance: CodeMirror.Editor, selection: { head: CodeMirror.Position; anchor: CodeMirror.Position; }) => void ): void;

/** Fires whenever the view port of the editor changes (due to scrolling, editing, or any other factor).
The from and to arguments give the new start and end of the viewport. */
on(eventName: 'viewportChange', handler: (instance: CodeMirror.Editor, from: number, to: number) => void ): void;
off(eventName: 'viewportChange', handler: (instance: CodeMirror.Editor, from: number, to: number) => void ): void;

/** Fires when the editor gutter (the line-number area) is clicked. Will pass the editor instance as first argument,
the (zero-based) number of the line that was clicked as second argument, the CSS class of the gutter that was clicked as third argument,
and the raw mousedown event object as fourth argument. */
on(eventName: 'gutterClick', handler: (instance: CodeMirror.Editor, line: number, gutter: string, clickEvent: Event) => void ): void;
off(eventName: 'gutterClick', handler: (instance: CodeMirror.Editor, line: number, gutter: string, clickEvent: Event) => void ): void;

/** Fires whenever the editor is focused. */
on(eventName: 'focus', handler: (instance: CodeMirror.Editor) => void ): void;
off(eventName: 'focus', handler: (instance: CodeMirror.Editor) => void ): void;

/** Fires whenever the editor is unfocused. */
on(eventName: 'blur', handler: (instance: CodeMirror.Editor) => void ): void;
off(eventName: 'blur', handler: (instance: CodeMirror.Editor) => void ): void;

/** Fires when the editor is scrolled. */
on(eventName: 'scroll', handler: (instance: CodeMirror.Editor) => void ): void;
off(eventName: 'scroll', handler: (instance: CodeMirror.Editor) => void ): void;

/** Will be fired whenever CodeMirror updates its DOM display. */
on(eventName: 'update', handler: (instance: CodeMirror.Editor) => void ): void;
off(eventName: 'update', handler: (instance: CodeMirror.Editor) => void ): void;

/** Fired whenever a line is (re-)rendered to the DOM. Fired right after the DOM element is built, before it is added to the document.
The handler may mess with the style of the resulting element, or add event handlers, but should not try to change the state of the editor. */
on(eventName: 'renderLine', handler: (instance: CodeMirror.Editor, line: CodeMirror.LineHandle, element: HTMLElement) => void ): void;
off(eventName: 'renderLine', handler: (instance: CodeMirror.Editor, line: CodeMirror.LineHandle, element: HTMLElement) => void ): void;

/** Fires when one of the DOM events fires. */
on(eventName: DOMEvent, handler: (instance: CodeMirror.Editor, event: Event) => void ): void;
off(eventName: DOMEvent, handler: (instance: CodeMirror.Editor, event: Event) => void ): void;

/** Expose the state object, so that the Editor.state.completionActive property is reachable*/
state: any;
```

## Other

- [@uiw/react-monacoeditor](https://github.com/jaywcjlove/react-monacoeditor): Monaco Editor component for React.
- [@uiw/react-markdown-editor](https://github.com/uiwjs/react-markdown-editor): A markdown editor with preview, implemented with React.js and TypeScript.
- [@uiw/react-md-editor](https://github.com/uiwjs/react-md-editor): A simple markdown editor with preview, implemented with React.js and TypeScript.

## License

Licensed under the MIT License.
