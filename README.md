<p align="center">
  <a href="https://github.com/lucide-icons/lucide#gh-light-mode-only">
    <img src="https://lucide.dev/lucide-logo-repo.svg#gh-light-mode-only" alt="Lucide - Beautiful & consistent icon toolkit made by the community. Open-source project and a fork of Feather Icons." width="240">
  </a>
  <a href="https://github.com/lucide-icons/lucide#gh-dark-mode-only">
    <img src="https://lucide.dev/lucide-logo-repo-dark.svg#gh-dark-mode-only" alt="Lucide - Beautiful & consistent icon toolkit made by the community. Open-source project and a fork of Feather Icons." width="240">
  </a>
  <a href="https://github.com/lucide-icons/lucide#gh-dark-mode-only">
    <img alt="Qwik Logo" width="240" src="https://raw.githubusercontent.com/QwikDev/qwik/main/.github/assets/qwik-logo.svg" />
  </a>
</p>

<p align="center">
  Unofficial Lucide icon library for Qwik applications.
</p>

<div align="center">

  [![npm](https://img.shields.io/npm/v/lucide-icons-qwik?color=blue)](https://www.npmjs.com/package/lucide-icons-qwik)
  ![NPM Downloads](https://img.shields.io/npm/dw/lucide-icons-qwik)
  [![GitHub](https://img.shields.io/github/license/lucide-icons/lucide)](https://lucide.dev/license)
</div>

<p align="center">
  <a href="https://lucide.dev/guide/">About Lucide</a>
  ·
  <a href="https://lucide.dev/icons/">Lucide Icons</a>
  ·
  <a href="https://lucide.dev/license">License</a>
</p>

# Lucide Qwik

An unofficial implementation of the lucide icon library for Qwik applications, continuing development from [lucide-qwik](https://github.com/egmaleta/lucide-qwik) to be up-to-date.

## Installation

```sh
pnpm add lucide-icons-qwik
```

```sh
npm install lucide-icons-qwik
```

```sh
yarn add lucide-icons-qwik
```

```sh
bun add lucide-icons-qwik
```

## Documentation

#### Include

You can import the icon(s) you need as usual:

```ts
import { ThumbsUp } from "lucide-icons-qwik";
```

or import them all at once:

```ts
import * as Icons from "lucide-icons-qwik";

export const App = component$(() => {
  return <div>
    <Icons.ThumbsUp />
    <Icons.BatteryCharging />
  </div>;
});
```

#### Props

Lucide `Icon` component have these optional `props`:

```ts
export interface IconProps extends QwikDOMAttributes {
  size?: number,            // default: 24
  color?: string,           // default: "currentColor"
  strokeWidth?: number,     // default: 2
  strokeLinecap?: "round" | "butt" | "square" | "inherit" | undefined,   // default: "round"
  strokeLinejoin?: "round" | "inherit" | "miter" | "bevel" | undefined   // default: "round"
}
```

Notice that `IconProps` extends `QwikDOMAttributes` so `Icon` component also have attributes like `class`, `onClick$`, `key`, etc.

## Community

[Lucide Discord server](https://discord.gg/EH6nSts)
Join the [Luminescent Discord server](https://discord.gg/sf5Hty88TR) for support for this unofficial package

## License

Lucide is licensed under the ISC license. See [LICENSE](https://lucide.dev/license).
This library is licensed under [MIT License](https://github.com/LuminescentDev/lucide-icons-qwik/blob/main/LICENSE "https://github.com/LuminescentDev/lucide-icons-qwik/blob/main/LICENSE").
