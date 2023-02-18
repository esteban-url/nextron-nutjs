import React from 'react';
import type { AppProps } from 'next/app';
import { mouse, left, right, up, down } from "@nut-tree/nut-js";

(async () => {
    await mouse.move(left(500));
    await mouse.move(up(500));
    await mouse.move(right(500));
    await mouse.move(down(500))
})();
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp
