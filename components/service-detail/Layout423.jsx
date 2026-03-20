'use client'

import { Button } from '@relume_io/relume-ui'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { RxChevronRight } from 'react-icons/rx'

const useRelume = () => {
  const [hoveredFeatureIdx, setHoveredFeatureIdx] =
    useState(null)
  const handleMouseEnter = index => () => {
    setHoveredFeatureIdx(index)
  }
  const handleMouseLeave = () => {
    setHoveredFeatureIdx(null)
  }
  const startAnimation = index => {
    return hoveredFeatureIdx === index
      ? 'visible'
      : 'hidden'
  }
  return {
    handleMouseEnter,
    handleMouseLeave,
    startAnimation,
  }
}

export function Layout423() {
  const hoverState = useRelume()
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-brand-secondary text-white">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">One</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            No hidden fees
          </h2>
          <p className="md:text-md">
            We tell you the price upfront. That's it. No
            surprise charges when we're done.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-6 md:gap-8 lg:flex-row">
          <a
            href="#"
            className="relative flex w-full flex-col overflow-hidden lg:h-full lg:w-1/2 lg:transition-all lg:duration-200 lg:hover:w-[70%]"
            onMouseOver={hoverState.handleMouseEnter(0)}
            onMouseLeave={hoverState.handleMouseLeave}
          >
            <div className="absolute inset-0 flex size-full flex-col items-center justify-center self-start">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="/images/hvac/hvac_ac_repair.png"
                alt="AC Repair Service"
                className="size-full object-cover"
              />
            </div>
            <div className="group relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8">
              <div className="lg:absolute lg:inset-0 lg:z-0 lg:transition-all lg:duration-300 lg:group-hover:bg-black/50" />
              <div className="z-10">
                <p className="mb-2 font-semibold text-text-alternative">
                  Two
                </p>
                <h3 className="text-2xl font-bold text-text-alternative md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Techs who actually care
                </h3>
                <div className="lg:hidden">
                  <p className="mt-5 text-text-alternative md:mt-6">
                    Real people who know their stuff. They
                    treat your home like their own.
                  </p>
                  <div className="mt-6 md:mt-8">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="text-text-alternative"
                    >
                      More
                    </Button>
                  </div>
                </div>
              </div>
              <AnimatePresence>
                <motion.div
                  className="z-10 hidden lg:block lg:w-[340px]"
                  variants={{
                    hidden: {
                      opacity: 0,
                      height: 0,
                      y: 50,
                    },
                    visible: {
                      opacity: 1,
                      height: 'auto',
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  animate={hoverState.startAnimation(0)}
                  exit="hidden"
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                  }}
                >
                  <p className="mt-5 text-text-alternative md:mt-6">
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse varius enim
                    in eros elementum tristique.
                  </p>
                  <div className="mt-6 md:mt-8">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="text-text-alternative"
                    >
                      Button
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </a>
          <a
            href="#"
            className="relative flex w-full flex-col overflow-hidden lg:h-full lg:w-1/2 lg:transition-all lg:duration-200 lg:hover:w-[70%]"
            onMouseOver={hoverState.handleMouseEnter(1)}
            onMouseLeave={hoverState.handleMouseLeave}
          >
            <div className="absolute inset-0 flex size-full flex-col items-center justify-center self-start">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="/images/hvac/hvac_furnace_install.png"
                alt="Furnace Installation"
                className="size-full object-cover"
              />
            </div>
            <div className="group relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8">
              <div className="lg:absolute lg:inset-0 lg:z-0 lg:transition-all lg:duration-300 lg:group-hover:bg-black/50" />
              <div className="z-10">
                <p className="mb-2 font-semibold text-text-alternative">
                  Two
                </p>
                <h3 className="text-2xl font-bold text-text-alternative md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Techs who actually care
                </h3>
                <div className="lg:hidden">
                  <p className="mt-5 text-text-alternative md:mt-6">
                    Real people who know their stuff. They
                    treat your home like their own.
                  </p>
                  <div className="mt-6 md:mt-8">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="text-text-alternative"
                    >
                      More
                    </Button>
                  </div>
                </div>
              </div>
              <AnimatePresence>
                <motion.div
                  className="z-10 hidden lg:block lg:w-[340px]"
                  variants={{
                    hidden: {
                      opacity: 0,
                      height: 0,
                      y: 50,
                    },
                    visible: {
                      opacity: 1,
                      height: 'auto',
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  animate={hoverState.startAnimation(1)}
                  exit="hidden"
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                  }}
                >
                  <p className="mt-5 text-text-alternative md:mt-6">
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse varius enim
                    in eros elementum tristique.
                  </p>
                  <div className="mt-6 md:mt-8">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="text-text-alternative"
                    >
                      Button
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </a>
          <a
            href="#"
            className="relative flex w-full flex-col overflow-hidden lg:h-full lg:w-1/2 lg:transition-all lg:duration-200 lg:hover:w-[70%]"
            onMouseOver={hoverState.handleMouseEnter(2)}
            onMouseLeave={hoverState.handleMouseLeave}
          >
            <div className="absolute inset-0 flex size-full flex-col items-center justify-center self-start">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="/images/hvac/hvac_maintenance.png"
                alt="HVAC Maintenance"
                className="size-full object-cover"
              />
            </div>
            <div className="group relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8">
              <div className="lg:absolute lg:inset-0 lg:z-0 lg:transition-all lg:duration-300 lg:group-hover:bg-black/50" />
              <div className="z-10">
                <p className="mb-2 font-semibold text-text-alternative">
                  Two
                </p>
                <h3 className="text-2xl font-bold text-text-alternative md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Techs who actually care
                </h3>
                <div className="lg:hidden">
                  <p className="mt-5 text-text-alternative md:mt-6">
                    Real people who know their stuff. They
                    treat your home like their own.
                  </p>
                  <div className="mt-6 md:mt-8">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="text-text-alternative"
                    >
                      More
                    </Button>
                  </div>
                </div>
              </div>
              <AnimatePresence>
                <motion.div
                  className="z-10 hidden lg:block lg:w-[340px]"
                  variants={{
                    hidden: {
                      opacity: 0,
                      height: 0,
                      y: 50,
                    },
                    visible: {
                      opacity: 1,
                      height: 'auto',
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  animate={hoverState.startAnimation(2)}
                  exit="hidden"
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                  }}
                >
                  <p className="mt-5 text-text-alternative md:mt-6">
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse varius enim
                    in eros elementum tristique.
                  </p>
                  <div className="mt-6 md:mt-8">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="text-text-alternative"
                    >
                      Button
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
