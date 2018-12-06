# @codeforcoffee/simple-state

Simple State for SPAs

> https://www.npmjs.com/package/@codeforcoffee/simple-state

[![Build Status](https://travis-ci.org/code-for-coffee/simple-state.svg?branch=master)](https://travis-ci.org/code-for-coffee/simple-state)

## Install

`npm install @codeforcoffee/simple-state` or `yarn add @codeforcoffee/simple-state`

**ES Module**

```
import SimpleState from '@codeforcoffee/simple-state';
```

## Getting Started

After importing the library, you can create as many instances as you'd like (but likely should not).

If you use `create-react-app` or anything else that uses babel, you will need to update your config files for your project to enable `@babel/plugin-proposal-class-properties`.

##### Generic Babel Config

Install the following packages:

```sh
npm i --save-dev @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties
```

```
"babel": {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-class-properties"
    ]
  ]
}
```

##### create-react-app

If using CRA, follow the above steps (the config block will be added to your **package.json**), `npm i @codeforcoffee/simple-state`.

You will need to `npm run eject`. From there, in your `scripts/webpack.*.config` files, update your Babel config block:

```js
presets: [
  [
    require.resolve("babel-preset-react-app/dependencies"),
    { helpers: true }
  ]
],
plugins: ["@babel/plugin-proposal-class-properties"],
```

#### Examples

An example application is located in this repository under the _example_ folder.

```js
store = new SimpleState({ amiibo: [] });
```

Then you can update the State:

```js
store.updateStore({ myValue: "isNotEmpty" });
```

You can get state:

```js
store.getState();
```

Previous state:

```js
store.getPreviousState();
```

and initial state:

```js
store.getInitialState();
```

and to JSON for API calls:

```js
store.toJSON();
```

## Documentation

## Classes

<dl>
<dt><a href="#SimpleState">SimpleState</a></dt>
<dd><p>Created by codeforcoffee on 11/2/18.</p>
</dd>
</dl>

## Objects

<dl>
<dt><a href="#SimpleState">SimpleState</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="SimpleState"></a>

## SimpleState

Created by codeforcoffee on 11/2/18.

**Kind**: global class

- [SimpleState](#SimpleState)
  - [new SimpleState(initialState)](#new_SimpleState_new)
  - [.getInitialState()](#SimpleState+getInitialState)
  - [.updateStore(newAttributes, mergeArrays)](#SimpleState+updateStore)
  - [.getState()](#SimpleState+getState)
  - [.getPreviousState()](#SimpleState+getPreviousState)
  - [.toJSON()](#SimpleState+toJSON)

<a name="new_SimpleState_new"></a>

### new SimpleState(initialState)

constructor

| Param        | Type            |
| ------------ | --------------- |
| initialState | <code>\*</code> |

<a name="SimpleState+getInitialState"></a>

### simpleState.getInitialState()

Returns initial state

**Kind**: instance method of [<code>SimpleState</code>](#SimpleState)
<a name="SimpleState+updateStore"></a>

### simpleState.updateStore(newAttributes, mergeArrays)

Update the store. MergeArrays is true by default.

**Kind**: instance method of [<code>SimpleState</code>](#SimpleState)

| Param         | Type                 | Default           |
| ------------- | -------------------- | ----------------- |
| newAttributes | <code>\*</code>      |                   |
| mergeArrays   | <code>Boolean</code> | <code>true</code> |

<a name="SimpleState+getState"></a>

### simpleState.getState()

Get current state

**Kind**: instance method of [<code>SimpleState</code>](#SimpleState)
<a name="SimpleState+getPreviousState"></a>

### simpleState.getPreviousState()

Get prior state

**Kind**: instance method of [<code>SimpleState</code>](#SimpleState)
<a name="SimpleState+toJSON"></a>

### simpleState.toJSON()

converts state to JSON

**Kind**: instance method of [<code>SimpleState</code>](#SimpleState)
<a name="SimpleState"></a>

## SimpleState : <code>object</code>

**Kind**: global namespace

- [SimpleState](#SimpleState) : <code>object</code>
  - [new SimpleState(initialState)](#new_SimpleState_new)
  - [.getInitialState()](#SimpleState+getInitialState)
  - [.updateStore(newAttributes, mergeArrays)](#SimpleState+updateStore)
  - [.getState()](#SimpleState+getState)
  - [.getPreviousState()](#SimpleState+getPreviousState)
  - [.toJSON()](#SimpleState+toJSON)

<a name="new_SimpleState_new"></a>

### new SimpleState(initialState)

constructor

| Param        | Type            |
| ------------ | --------------- |
| initialState | <code>\*</code> |

<a name="SimpleState+getInitialState"></a>

### simpleState.getInitialState()

Returns initial state

**Kind**: instance method of [<code>SimpleState</code>](#SimpleState)
<a name="SimpleState+updateStore"></a>

### simpleState.updateStore(newAttributes, mergeArrays)

Update the store. MergeArrays is true by default.

**Kind**: instance method of [<code>SimpleState</code>](#SimpleState)

| Param         | Type                 | Default           |
| ------------- | -------------------- | ----------------- |
| newAttributes | <code>\*</code>      |                   |
| mergeArrays   | <code>Boolean</code> | <code>true</code> |

<a name="SimpleState+getState"></a>

### simpleState.getState()

Get current state

**Kind**: instance method of [<code>SimpleState</code>](#SimpleState)
<a name="SimpleState+getPreviousState"></a>

### simpleState.getPreviousState()

Get prior state

**Kind**: instance method of [<code>SimpleState</code>](#SimpleState)
<a name="SimpleState+toJSON"></a>

### simpleState.toJSON()

converts state to JSON

**Kind**: instance method of [<code>SimpleState</code>](#SimpleState)

## Changelog

- _1.0.0-beta.0_ - Initial release
