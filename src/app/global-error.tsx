'use client'

import Button from '@/components/Button'
import Col from '@/components/Col'

const GlobalError = () => {
  return (
    <html>
      <body className="h-screen">
        <div className={'h-full w-full'}>
          <div className={'absolute top-10 left-10'}>
          </div>
          <Col className={'items-center justify-center h-full gap-4'}>
            <p className="text-bold-s3">Sorry, something went wrong on our end.</p>
            <p className="text-regular-b2">
              Please try refreshing the page, or go back to the homepage.
            </p>
            <Button className="px-5">
              Back to homepage
            </Button>
          </Col>
        </div>
      </body>
    </html>
  )
}

export default GlobalError
