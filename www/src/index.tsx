import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import '@wcj/dark-mode';
import { createGlobalStyle } from 'styled-components';
import Home from './pages/home';
import { ThemeEditor } from './pages/theme/editor';
import { ThemeLayout } from './pages/theme';
import { ThemesHome } from './pages/theme/home';
import { ThemeDoc } from './pages/theme/docs';
import { ThemeOkaidia } from './pages/theme/themes';
import { ExtensionsLayout } from './pages/extensions';
import { EventsDoc } from './pages/extensions/events';
import { LineNumbersRelativeDoc } from './pages/extensions/line-numbers-relative';
import { LangsDoc } from './pages/extensions/langs';
import { HyperLinkDoc } from './pages/extensions/hyper-link';
import { BasicSetupDoc } from './pages/extensions/basic-setup';
import { ColorDoc } from './pages/extensions/color';
import { ClassNameDoc } from './pages/extensions/classname';
import { MentionsDoc } from './pages/extensions/mentions';
import { ThemesAllDoc } from './pages/extensions/themes';
import { ZebraStripesDoc } from './pages/extensions/zebra-stripes';
import { PageExample431 } from './pages/examples/Example431';

export const GlobalStyle = createGlobalStyle`
  [data-color-mode*='dark'], [data-color-mode*='dark'] body {
    --color-fg-default: #c9d1d9;
    --color-fg-muted: #8b949e;
    --color-fg-subtle: #484f58;
    --color-canvas-default: #0d1117;
    --color-canvas-subtle: #161b22;
    --color-border-default: #30363d;
    --color-border-muted: #21262d;
    --color-neutral-muted: rgba(110,118,129,0.4);
    --color-accent-fg: #58a6ff;
    --color-accent-emphasis: #1f6feb;
    --color-attention-subtle: rgba(187,128,9,0.15);
    --color-danger-fg: #f85149;
  }
  [data-color-mode*='light'], [data-color-mode*='light'] body {
    --color-fg-default: #24292f;
    --color-fg-muted: #57606a;
    --color-fg-subtle: #6e7781;
    --color-canvas-default: #ffffff;
    --color-canvas-subtle: #f6f8fa;
    --color-border-default: #d0d7de;
    --color-border-muted: hsla(210,18%,87%,1);
    --color-neutral-muted: rgba(175,184,193,0.2);
    --color-accent-fg: #0969da;
    --color-accent-emphasis: #0969da;
    --color-attention-subtle: #fff8c5;
    --color-danger-fg: #cf222e;
  }
  body {
    margin: 0;
    font-size: 14px;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  }
  * {
    box-sizing: border-box;
  }
`;

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <HashRouter>
    <GlobalStyle />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/editor/theme/" element={<ThemeLayout />}>
        <Route index element={<Navigate to="single" replace />} />
        <Route path=":type" element={<ThemeEditor />} />
      </Route>
      <Route path="/theme/" element={<ThemeLayout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<ThemesHome />} />
        <Route path="data" element={<Navigate to="sublime" replace />} />
        <Route path="data/:name" element={<ThemeOkaidia />} />
        <Route path="data/:name/*" element={<ThemeOkaidia />} />
        <Route path="editor" element={<Navigate to="single" replace />} />
        <Route path="editor/:type" element={<ThemeEditor />} />
        <Route path="doc" element={<ThemeDoc />} />
      </Route>
      <Route path="/extensions/" element={<ExtensionsLayout />}>
        <Route index element={<Navigate to="color" replace />} />
        <Route path="themes-all" element={<ThemesAllDoc />} />
        <Route path="basic-setup" element={<BasicSetupDoc />} />
        <Route path="color" element={<ColorDoc />} />
        <Route path="classname" element={<ClassNameDoc />} />
        <Route path="events" element={<EventsDoc />} />
        <Route path="line-numbers-relative" element={<LineNumbersRelativeDoc />} />
        <Route path="languages" element={<LangsDoc />} />
        <Route path="hyper-link" element={<HyperLinkDoc />} />
        <Route path="mentions" element={<MentionsDoc />} />
        <Route path="zebra-stripes" element={<ZebraStripesDoc />} />
      </Route>
      <Route path="/examples/" element={<ExtensionsLayout />}>
        <Route path="431" element={<PageExample431 />} />
      </Route>
    </Routes>
  </HashRouter>,
);
