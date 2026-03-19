'use client'

import { Button } from '@relume_io/relume-ui'
import React from 'react'

export function Header62() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-brand-secondary text-white">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">
          Services
        </p>
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          Here's what we fix
        </h1>
        <p className="md:text-md">
          Your AC dies in July. Your heat quits in January.
          We show up and make it work again. That's it.
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Call">Call</Button>
          <Button title="Learn more" variant="secondary">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  )
}
