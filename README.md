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
import {Context, Request, Response} from '@itznotabug/aft';

export default async (context: Context) => {
    const request: Request = context.req;
    const response: Response = context.res;

    response.json({message: "Hello, Appwrite!"});
};
```