# Terminal JS ES Module

Use the [Terminal JS SDK](https://stripe.com/docs/terminal/sdk/js) as an ES
module.

**Note**: This package dynamically loads the Stripe Terminal SDK from
`https://js.stripe.com` and wraps the SDK's global`StripeTerminal` function. To
be
[PCI compliant](https://stripe.com/docs/security/guide#validating-pci-compliance),
you must load the SDK directly from `https://js.stripe.com` by using this
library. You cannot include the dynamically loaded code in a bundle or host it
yourself.

[![npm version](https://img.shields.io/npm/v/@stripe/terminal-js.svg?style=flat-square)](https://www.npmjs.com/package/@stripe/terminal-js)

## Installation

Use `npm` or `yarn` to install the Terminal JS module:

```sh
> npm install @stripe/terminal-js

> yarn add @stripe/terminal-js
```

## Usage

### `loadStripeTerminal`

This function returns a `Promise` that resolves with a newly created
`StripeTerminal` object once the Terminal JS SDK has loaded. If necessary, it
will load the SDK for you by inserting the Terminal JS script tag. If you call
`loadStripeTerminal` in a server environment it will resolve to `null`.

```js
import {loadStripeTerminal} from '@stripe/terminal-js';

const StripeTerminal = await loadStripeTerminal();

const terminal = StripeTerminal.create({
  onFetchConnectionToken: async () => {
    …
  }
})
```

For more information on how to use the Terminal JS SDK once it loads, please
refer to the
[Terminal JS SDK API reference](https://stripe.com/docs/terminal/js-api-reference)
or follow our [getting started](https://stripe.com/docs/terminal/sdk/js) guide.

## TypeScript support

This package includes TypeScript declarations for the Terminal JS SDK. We
support projects using TypeScript versions >= 3.1.

Some methods in Terminal JS SDK accept and return objects from the
[Stripe API](https://stripe.com/docs/api). The type declarations in
`@stripe/terminal-js` for these objects in currently track to
[version 2018-08-23](https://stripe.com/docs/api/versioning) of the Stripe API.
If you have code using other versions of the Stripe API you may have to override
type definitions as necessary.

Note that we may release new [minor and patch](https://semver.org/) versions of
`@stripe/terminal-js` with small but backwards-incompatible fixes to the type
declarations. These changes will not affect the Terminal JS SDK itself.

## Ensuring the Terminal JS SDK is available everywhere

By default, this module will insert a `<script>` tag that loads the Terminal JS
SDK from `https://js.stripe.com`. This happens as a side effect immediately upon
importing this module.

### Import as a side effect

Import `@stripe/terminal-js` as a side effect in code that will be included
throughout your site (e.g. your root module). This will make sure the Terminal
JS SDk script tag is inserted immediately upon page load.

```js
import '@stripe/terminal-js';
```

### Manually include the script tag

Manually add the Stripe.js script tag to the `<head>` of each page on your site.
If an existing script tag is already present, this module will not insert a new
one. When you call `loadStripeTerminal`, it will use the existing script tag.

```html
<!-- Somewhere in your site's <head> -->
<script src="https://js.stripe.com/terminal/v1/" async></script>
```

### Importing `loadStripeTerminal` without side effects

If you would like to use `loadStripeTerminal` in your application, but defer
loading the Terminal JS SDK script until `loadStripeTerminal` is first called,
use the alternative `@stripe/terminal-js/pure` import path:

```
import {loadStripeTerminal} from '@stripe/terminal-js/pure';

// Terminal SDK will not be loaded until `loadStripeTerminal` is called
```

## Terminal JS SDK Documentation

- [Terminal JS SDK Docs](https://stripe.com/docs/terminal/sdk/js)
- [Terminal JS SDK API Reference](https://stripe.com/docs/terminal/js-api-reference)
