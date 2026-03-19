'use client'

import { Button } from '@relume_io/relume-ui'
import React from 'react'
import { RxChevronRight } from 'react-icons/rx'

export function Layout419() {
  return (
    <section className="pt-24 md:pt-0 bg-brand-secondary text-white">
      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-y-0">
        <div>
          <div className="md:sticky md:top-0 md:gap-y-0">
            <div className="flex flex-col items-end md:h-screen md:justify-center">
              <div className="mx-[5%] max-w-md md:ml-[5vw] md:mr-12 lg:mr-20">
                <p className="mb-3 font-semibold md:mb-4">
                  Work
                </p>
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  What we actually do
                </h2>
                <p className="md:text-md">
                  We fix what's broken. We install what's
                  new. We keep everything running smooth
                  with regular checkups.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button
                    title="Services"
                    variant="secondary"
                  >
                    Services
                  </Button>
                  <Button
                    title="Explore"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                    className="text-white"
                  >
                    Explore
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-white/10 bg-brand-secondary px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/hvac/hvac_ac_repair.png"
                  alt="AC Repair Service"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">
                AC repair
              </h3>
              <p>
                Your air conditioner quit on you. We get it
                running again, fast.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-white/10 bg-brand-secondary px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/hvac/hvac_furnace_install.png"
                  alt="Furnace Installation"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">
                AC repair
              </h3>
              <p>
                Your air conditioner quit on you. We get it
                running again, fast.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-white/10 bg-brand-secondary px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/hvac/hvac_maintenance.png"
                  alt="HVAC Maintenance"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">
                AC repair
              </h3>
              <p>
                Your air conditioner quit on you. We get it
                running again, fast.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-white/10 bg-brand-secondary px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/hvac/hvac_commercial_rooftop.png"
                  alt="Commercial HVAC Services"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">
                AC repair
              </h3>
              <p>
                Your air conditioner quit on you. We get it
                running again, fast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
