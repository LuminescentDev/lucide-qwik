# Lucide for Qwik, the resumable framework ⚡️

## What is Lucide?

Lucide is a community-run fork of [Feather Icons](https://github.com/feathericons/feather "https://github.com/feathericons/feather"), open for anyone to contribute icons.

This icon library supports Lucide [v0.486.0](https://github.com/lucide-icons/lucide "https://github.com/lucide-icons/lucide").

### Installation

```shell
npm install lucide-qwik
```

### Usage

#### Include

You can import the icon(s) you need as usual:

```ts
import { ThumbsUpIcon } from "lucide-qwik";
```

or import them all at once:

```ts
import * as Icons from "lucide-qwik";

export const App = component$(() => {
  return <div>
    <Icons.ThumbsUpIcon />
    <Icons.BatteryChargingIcon />
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

### License

This library is licensed under [MIT License](https://github.com/LuminescentDev/lucide-qwik/blob/main/LICENSE "https://github.com/LuminescentDev/lucide-qwik/blob/main/LICENSE").
