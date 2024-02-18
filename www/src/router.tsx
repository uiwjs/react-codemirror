import React from 'react';
import { Navigate, IndexRouteObject, NonIndexRouteObject, Outlet } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ErrorPage } from './components/ErrorPage';
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
        lazy: () => import('./pages/home'),
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
            lazy: () => import('./pages/extensions/basic-setup'),
          },
          {
            path: 'color',
            label: 'color',
            lazy: () => import('./pages/extensions/color'),
          },
          {
            path: 'classname',
            label: 'classname',
            lazy: () => import('./pages/extensions/classname'),
          },
          {
            path: 'events',
            label: 'events',
            lazy: () => import('./pages/extensions/events'),
          },
          {
            path: 'hyper-link',
            label: 'hyper link',
            lazy: () => import('./pages/extensions/hyper-link'),
          },
          {
            path: 'line-numbers-relative',
            label: 'line numbers relative',
            lazy: () => import('./pages/extensions/line-numbers-relative'),
          },
          {
            path: 'languages',
            label: 'languages',
            lazy: () => import('./pages/extensions/langs'),
          },
          {
            path: 'mentions',
            label: 'mentions',
            lazy: () => import('./pages/extensions/mentions'),
          },
          {
            path: 'themes-all',
            label: 'themes all',
            lazy: () => import('./pages/extensions/themes'),
          },
          {
            path: 'zebra-stripes',
            label: 'zebra stripes',
            lazy: () => import('./pages/extensions/zebra-stripes'),
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
            lazy: () => import('./pages/theme/editor'),
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
            path: 'all',
            element: <Navigate to="/theme/home" replace />,
          },
          {
            path: 'home',
            label: 'Home',
            lazy: () => import('./pages/theme/home'),
          },
          {
            path: 'data',
            element: <Navigate to="sublime" replace />,
          },
          {
            path: 'doc',
            label: 'Document',
            element: (
              <Preview
                preview="document"
                themePkg="@uiw/codemirror-themes"
                path={() => import('@uiw/codemirror-themes/README.md')}
              />
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
            path: 'data/abyss',
            label: 'Abyss',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-abyss"
                path={() => import('@uiw/codemirror-theme-abyss/README.md')}
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
            path: 'data/andromeda',
            label: 'Andromeda',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-andromeda"
                path={() => import('@uiw/codemirror-theme-andromeda/README.md')}
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
            path: 'data/basic',
            element: <Navigate to="light" replace />,
          },
          {
            path: 'data/basic/light',
            label: 'Basic Light',
            element: (
              <Preview
                mode="light"
                themePkg="@uiw/codemirror-theme-basic"
                path={() => import('@uiw/codemirror-theme-basic/README.md')}
              />
            ),
          },
          {
            path: 'data/basic/dark',
            label: 'Basic Dark',
            element: (
              <Preview
                mode="dark"
                themePkg="@uiw/codemirror-theme-basic"
                path={() => import('@uiw/codemirror-theme-basic/README.md')}
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
            path: 'data/copilot',
            label: 'copilot',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-copilot"
                path={() => import('@uiw/codemirror-theme-copilot/README.md')}
              />
            ),
          },
          {
            path: 'data/console/light',
            label: 'Console Light',
            element: (
              <Preview
                mode="light"
                themePkg="@uiw/codemirror-theme-console"
                path={() => import('@uiw/codemirror-theme-console/README.md')}
              />
            ),
          },
          {
            path: 'data/console/dark',
            label: 'Console Dark',
            element: (
              <Preview
                mode="dark"
                themePkg="@uiw/codemirror-theme-console"
                path={() => import('@uiw/codemirror-theme-console/README.md')}
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
            path: 'data/github',
            element: <Navigate to="light" replace />,
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
            path: 'data/gruvbox-dark',
            element: <Navigate to="/theme/data/gruvbox/dark" replace />,
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
            path: 'data/monokai',
            label: 'Monokai',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-monokai"
                path={() => import('@uiw/codemirror-theme-monokai/README.md')}
              />
            ),
          },
          {
            path: 'data/monokai-dimmed',
            label: 'Monokai Dimmed',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-monokai-dimmed"
                path={() => import('@uiw/codemirror-theme-monokai-dimmed/README.md')}
              />
            ),
          },
          {
            path: 'data/kimbie',
            element: <Navigate to="dark" replace />,
          },
          {
            path: 'data/kimbie/dark',
            label: 'Kimbie Dark',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-kimbie"
                path={() => import('@uiw/codemirror-theme-kimbie/README.md')}
              />
            ),
          },
          {
            path: 'data/noctis-lilac',
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
            path: 'data/quietlight',
            label: 'quietlight',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-quietlight"
                path={() => import('@uiw/codemirror-theme-quietlight/README.md')}
              />
            ),
          },
          {
            path: 'data/red',
            label: 'red',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-red"
                path={() => import('@uiw/codemirror-theme-red/README.md')}
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
            path: 'data/tokyo-night',
            label: 'tokyo night',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-tokyo-night"
                path={() => import('@uiw/codemirror-theme-tokyo-night/README.md')}
              />
            ),
          },
          {
            path: 'data/tokyo-night-storm',
            label: 'tokyo night storm',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-tokyo-night-storm"
                path={() => import('@uiw/codemirror-theme-tokyo-night-storm/README.md')}
              />
            ),
          },
          {
            path: 'data/tokyo-night-day',
            label: 'tokyo night day',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-tokyo-night-day"
                path={() => import('@uiw/codemirror-theme-tokyo-night-day/README.md')}
              />
            ),
          },
          {
            path: 'data/tomorrow-night-blue',
            label: 'tomorrow night blue',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-tomorrow-night-blue"
                path={() => import('@uiw/codemirror-theme-tomorrow-night-blue/README.md')}
              />
            ),
          },
          {
            path: 'data/white/light',
            label: 'white light',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-white"
                mode="light"
                path={() => import('@uiw/codemirror-theme-white/README.md')}
              />
            ),
          },
          {
            path: 'data/white/dark',
            label: 'white dark',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-white"
                mode="dark"
                path={() => import('@uiw/codemirror-theme-white/README.md')}
              />
            ),
          },
          {
            path: 'data/vscode',
            element: <Navigate to="dark" replace />,
          },
          {
            path: 'data/vscode/dark',
            label: 'VS Code',
            element: (
              <Preview
                themePkg="@uiw/codemirror-theme-vscode"
                mode="dark"
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
            lazy: () => import('./pages/merge'),
          },
          {
            path: 'onchange',
            label: 'onChange Example',
            lazy: () => import('./pages/merge/examples/onchange'),
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
            lazy: () => import('./pages/examples/Example431'),
          },
          {
            path: '455',
            label: 'CodeMirrorMerge use theme',
            lazy: () => import('./pages/examples/Example455'),
          },
          {
            path: 'refs',
            label: 'Refs Example',
            lazy: () => import('./pages/examples/ExampleRef'),
          },
          {
            path: 'mark-decoration',
            label: 'Mark Decoration Example',
            lazy: () => import('./pages/examples/MarkDecoration'),
          },
        ],
      },
    ],
  },
];
