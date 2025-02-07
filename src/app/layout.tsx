'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ReactNode, Suspense } from "react";
import '@/../globals.css'
import Header from '@/components/Header';
import ReduxProvider from '@/store/ReduxProvider';
import Newsletter from '@/components/NewsLetter';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
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
      <body id='root'>
        <ProgressBar
          color="#0F71F2"
          disableSameURL={false}
          height="4px"
          options={{ easing: 'ease-in-out', showSpinner: false, speed: 250 }}
          shallowRouting
          startPosition={0.3}
        />
        <Suspense fallback={<> Loading </>}>
          <ReduxProvider>
            <main className="flex flex-col gap-8 items-center sm:items-start h-full">
              <Header />
              <section className="w-full flex flex-col items-center justify-center">
                {children}
              </section>
              <footer className="w-full">
                <Newsletter />
                <Footer className='bg-[#5A3826] text-white py-8 px-6 md:px-12 lg:px-20'/>
              </footer>
            </main>
          </ReduxProvider>
        </Suspense>
      </body>
    </html>
  );
}
