import React from 'react';
import { Navigate, IndexRouteObject, NonIndexRouteObject, Outlet } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ErrorPage } from './components/ErrorPage';
import { ThemesHome } from './pages/theme/home';
import { ThemeEditor } from './pages/theme/editor';
import { PageExample431 } from './pages/examples/Example431';

import Home from './pages/home';

import { BasicSetupExample } from './pages/extensions/basic-setup/example';
import { ClassNameExample } from './pages/extensions/classname/example';

import { EventsExample } from './pages/extensions/events/example';
import { LineNumbersRelativeExample } from './pages/extensions/line-numbers-relative/example';
import { LangsExample } from './pages/extensions/langs/example';
import { HyperLinkExample } from './pages/extensions/hyper-link/example';
import { ColorExample } from './pages/extensions/color/example';
import { MentionsExample } from './pages/extensions/mentions/example';
import { ThemesAllExample } from './pages/extensions/themes/example';
import { ZebraStripesExample } from './pages/extensions/zebra-stripes';

import { MergeExample } from './pages/merge/Example';
import { Preview } from './pages/theme/Preview';

export interface MenuRouteObject
  extends Omit<IndexRouteObject, 'children' | 'index'>,
    Omit<NonIndexRouteObject, 'children' | 'index'> {
  index?: boolean;
  label?: string;
  children?: MenuRouteObject[];
}

export const routes: MenuRouteObject[] = [
  {
    path: '/',
    Component: Outlet,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        label: 'Home',
        Component: Home,
      },
      {
        path: 'extensions',
        label: 'Extensions',
        Component: Layout,
        children: [
          {
            index: true,
            element: <Navigate to="color" replace />,
          },
          {
            path: 'basic-setup',
            label: 'basic setup',
            element: (
              <Preview path={() => import('@uiw/codemirror-extensions-basic-setup/README.md')}>
                <BasicSetupExample />
              </Preview>
            ),
          },
          {
            path: 'color',
            label: 'color',
            element: (
              <Preview path={() => import('@uiw/codemirror-extensions-basic-setup/README.md')}>
                <ColorExample />
              </Preview>
            ),
          },
          {
            path: 'classname',
            label: 'classname',
            element: (
              <Preview path={() => import('@uiw/codemirror-extensions-classname/README.md')}>
                <ClassNameExample />
              </Preview>
            ),
          },
          {
            path: 'events',
            label: 'events',
            element: (
              <Preview path={() => import('@uiw/codemirror-extensions-events/README.md')}>
                <EventsExample />
              </Preview>
            ),
          },
          {
            path: 'hyper-link',
            label: 'hyper link',
            element: (
              <Preview path={() => import('@uiw/codemirror-extensions-hyper-link/README.md')}>
                <HyperLinkExample />
              </Preview>
            ),
          },
          {
            path: 'line-numbers-relative',
            label: 'line numbers relative',
            element: (
              <Preview path={() => import('@uiw/codemirror-extensions-line-numbers-relative/README.md')}>
                <LineNumbersRelativeExample />
              </Preview>
            ),
          },
          {
            path: 'languages',
            label: 'languages',
            element: (
              <Preview path={() => import('@uiw/codemirror-extensions-langs/README.md')}>
                <LangsExample />
              </Preview>
            ),
          },
          {
            path: 'mentions',
            label: 'mentions',
            element: (
              <Preview path={() => import('@uiw/codemirror-extensions-mentions/README.md')}>
                <MentionsExample />
              </Preview>
            ),
          },
          {
            path: 'themes-all',
            label: 'themes all',
            element: (
              <Preview path={() => import('@uiw/codemirror-themes-all/README.md')}>
                <ThemesAllExample />
              </Preview>
            ),
          },
          {
            path: 'zebra-stripes',
            label: 'zebra stripes',
            element: (
              <Preview path={() => import('@uiw/codemirror-extensions-zebra-stripes/README.md')}>
                <ZebraStripesExample />
              </Preview>
            ),
          },
        ],
      },
      {
        path: 'editor/theme',
        label: 'Themes Editor',
        Component: Layout,
        children: [
          {
            index: true,
            element: <Navigate to="single" replace />,
          },
          {
            path: ':type',
            Component: ThemeEditor,
          },
        ],
      },
      {
        path: 'theme',
        label: 'Theme',
        Component: Layout,
        children: [
          {
            index: true,
            element: <Navigate to="home" replace />,
          },
          {
            path: 'home',
            label: 'Home',
            Component: ThemesHome,
          },
          {
            path: 'data',
            element: <Navigate to="sublime" replace />,
          },
          {
            path: 'doc',
            label: 'Document',
            element: (
              <Preview themePkg="@uiw/codemirror-themes" path={() => import('@uiw/codemirror-themes/README.md')} />
            ),
          },
          {
            path: 'data/abcdef',
            label: 'Abcdef',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-abcdef"
                path={() => import('@uiw/codemirror-theme-abcdef/README.md')}
              />
            ),
          },
          {
            path: 'data/androidstudio',
            label: 'Android Studio',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-androidstudio"
                path={() => import('@uiw/codemirror-theme-androidstudio/README.md')}
              />
            ),
          },
          {
            path: 'data/atomone',
            label: 'Atomone',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-atomone"
                path={() => import('@uiw/codemirror-theme-atomone/README.md')}
              />
            ),
          },
          {
            path: 'data/aura',
            label: 'Aura',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-aura"
                path={() => import('@uiw/codemirror-theme-aura/README.md')}
              />
            ),
          },
          {
            path: 'data/bbedit',
            label: 'bbedit',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-bbedit"
                path={() => import('@uiw/codemirror-theme-bbedit/README.md')}
              />
            ),
          },
          {
            path: 'data/bespin',
            label: 'bespin',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-bespin"
                path={() => import('@uiw/codemirror-theme-bespin/README.md')}
              />
            ),
          },
          {
            path: 'data/dracula',
            label: 'dracula',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-dracula"
                path={() => import('@uiw/codemirror-theme-dracula/README.md')}
              />
            ),
          },
          {
            path: 'data/darcula',
            label: 'darcula',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-darcula"
                path={() => import('@uiw/codemirror-theme-darcula/README.md')}
              />
            ),
          },
          {
            path: 'data/duotone/light',
            label: 'Duotone Light',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-duotone"
                mode="light"
                path={() => import('@uiw/codemirror-theme-duotone/README.md')}
              />
            ),
          },
          {
            path: 'data/duotone/dark',
            label: 'Duotone Dark',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-duotone"
                mode="dark"
                path={() => import('@uiw/codemirror-theme-duotone/README.md')}
              />
            ),
          },
          {
            path: 'data/eclipse',
            label: 'Eclipse',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-eclipse"
                path={() => import('@uiw/codemirror-theme-eclipse/README.md')}
              />
            ),
          },
          {
            path: 'data/github/light',
            label: 'Github Light',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-github"
                mode="light"
                path={() => import('@uiw/codemirror-theme-github/README.md')}
              />
            ),
          },
          {
            path: 'data/github/dark',
            label: 'Github Dark',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-github"
                mode="dark"
                path={() => import('@uiw/codemirror-theme-github/README.md')}
              />
            ),
          },
          {
            path: 'data/gruvbox/dark',
            label: 'Gruvbox Dark',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-gruvbox-dark"
                mode="dark"
                path={() => import('@uiw/codemirror-theme-gruvbox-dark/README.md')}
              />
            ),
          },
          {
            path: 'data/gruvbox/light',
            label: 'Gruvbox Light',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-gruvbox-dark"
                mode="light"
                path={() => import('@uiw/codemirror-theme-gruvbox-dark/README.md')}
              />
            ),
          },
          {
            path: 'data/material/light',
            label: 'Material Light',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-material"
                mode="light"
                path={() => import('@uiw/codemirror-theme-material/README.md')}
              />
            ),
          },
          {
            path: 'data/material/dark',
            label: 'Material Dark',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-material"
                mode="dark"
                path={() => import('@uiw/codemirror-theme-material/README.md')}
              />
            ),
          },
          {
            path: 'data/noctis/lilac',
            label: 'noctis lilac',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-noctis-lilac"
                path={() => import('@uiw/codemirror-theme-noctis-lilac/README.md')}
              />
            ),
          },
          {
            path: 'data/nord',
            label: 'nord',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-nord"
                path={() => import('@uiw/codemirror-theme-nord/README.md')}
              />
            ),
          },
          {
            path: 'data/okaidia',
            label: 'okaidia',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-okaidia"
                path={() => import('@uiw/codemirror-theme-okaidia/README.md')}
              />
            ),
          },
          {
            path: 'data/solarized/light',
            label: 'solarized light',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-solarized"
                mode="light"
                path={() => import('@uiw/codemirror-theme-solarized/README.md')}
              />
            ),
          },
          {
            path: 'data/solarized/dark',
            label: 'solarized dark',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-solarized"
                mode="dark"
                path={() => import('@uiw/codemirror-theme-solarized/README.md')}
              />
            ),
          },
          {
            path: 'data/sublime',
            label: 'sublime',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-sublime"
                path={() => import('@uiw/codemirror-theme-sublime/README.md')}
              />
            ),
          },
          {
            path: 'data/tokyo/night',
            label: 'tokyo night',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-tokyo-night"
                path={() => import('@uiw/codemirror-theme-tokyo-night/README.md')}
              />
            ),
          },
          {
            path: 'data/tokyo/night/storm',
            label: 'tokyo night storm',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-tokyo-night-storm"
                path={() => import('@uiw/codemirror-theme-tokyo-night-storm/README.md')}
              />
            ),
          },
          {
            path: 'data/tokyo/night/day',
            label: 'tokyo night day',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-tokyo-night-day"
                path={() => import('@uiw/codemirror-theme-tokyo-night-day/README.md')}
              />
            ),
          },
          {
            path: 'data/vscode',
            label: 'VS Code',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-vscode"
                path={() => import('@uiw/codemirror-theme-vscode/README.md')}
              />
            ),
          },
          {
            path: 'data/xcode/light',
            label: 'Xcode Light',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-xcode"
                mode="light"
                path={() => import('@uiw/codemirror-theme-xcode/README.md')}
              />
            ),
          },
          {
            path: 'data/xcode/dark',
            label: 'Xcode Dark',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-xcode"
                mode="dark"
                path={() => import('@uiw/codemirror-theme-xcode/README.md')}
              />
            ),
          },
          {
            path: 'editor',
            element: <Navigate to="single" replace />,
          },
        ],
      },
      {
        path: 'merge',
        label: 'Merge',
        Component: Layout,
        children: [
          {
            index: true,
            element: <Navigate to="document" replace />,
          },
          {
            path: 'document',
            label: 'Document',
            element: (
              <Preview path={() => import('react-codemirror-merge/README.md')}>
                <MergeExample />
              </Preview>
            ),
          },
        ],
      },
      {
        path: 'examples',
        Component: Layout,
        children: [
          {
            path: '431',
            label: 'How to remove all syntax highlighting?',
            Component: PageExample431,
          },
        ],
      },
    ],
  },
];
