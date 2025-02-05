'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { Suspense } from "react";
import '@/../globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <meta content="telephone=no" name="format-detection"></meta>
        <meta content="date=no" name="format-detection"></meta>
        <meta content="address=no" name="format-detection"></meta>
        <meta content="email=no" name="format-detection"></meta>
        <meta content="yes" name="mobile-web-app-capable"></meta>
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          name="viewport"
        ></meta>
      </head>
      <body>
        <ProgressBar
          color="#0F71F2"
          disableSameURL={false}
          height="4px"
          options={{ easing: 'ease-in-out', showSpinner: false, speed: 250 }}
          shallowRouting
          startPosition={0.3}
        />
        <Suspense fallback={<> Loading </>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
