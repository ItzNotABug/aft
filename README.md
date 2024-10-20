# #AFT - Appwrite Functions Types

A type declaration package for Appwrite Functions.\
This package provides `TypeScript` definitions for the request handling context in Appwrite Cloud Functions.

> Compatible with Appwrite server versions **1.5.x** and **1.6.x**.

## Installation

You can install the package via npm:

```bash
npm install @itznotabug/aft --save-dev
```

## Usage

```ts
import {
    RuntimeContext,
    RuntimeRequest,
    RuntimeResponse,
    RuntimeOutput,
} from "@itznotabug/aft";

export default async (context: RuntimeContext): Promise<RuntimeOutput> => {
    const request: RuntimeRequest = context.req;
    const response: RuntimeResponse = context.res;

    return response.json({ message: "Hello, World!" });
};
```