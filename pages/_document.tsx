import React from "react";

import { lato } from "../utils/lato";

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className={lato.className}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
