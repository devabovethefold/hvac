'use client'

import { Button } from '@relume_io/relume-ui'
import React from 'react'

export function Header84() {
  return (
    <section className="px-[5%] py-12 md:py-16 lg:py-20 bg-brand-secondary text-white">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 border border-white/20 lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-12">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Hot? Cold? We fix it. Fast.
            </h1>
            <p className="md:text-md">
              Your AC died at midnight. Your heat won't kick
              on. We're here around the clock, no waiting,
              no surprises on the bill.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Call now" variant="primary">
                Call now
              </Button>
              <Button
                title="Learn more"
                variant="secondary"
              >
                Learn more
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/images/hvac/hvac_hero_tech.png"
              className="w-full object-cover"
              alt="Professional HVAC Technician"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
