'use client'

import { Button } from '@relume_io/relume-ui'
import React from 'react'

export function Cta31() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-brand-secondary text-white"
    >
      <div className="container flex flex-col items-center">
        <div className="mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Ready to feel comfortable?
          </h2>
          <p className="md:text-md">
            Stop sweating. Stop freezing. Call us now or
            book online.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button title="Call" className="bg-white text-black border-none">Call</Button>
            <Button title="Book" variant="secondary" className="border-white text-white">
              Book
            </Button>
          </div>
        </div>
        <img
          src="/images/hvac/hvac_cta_comfort.png"
          className="size-full object-cover object-[50%_75%] h-100"
          alt="Comfortable Home Interior"
        />
      </div>
    </section>
  )
}
