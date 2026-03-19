'use client'

import React from 'react'
import {
  BiEnvelope,
  BiMap,
  BiMessageDetail,
  BiPhone,
} from 'react-icons/bi'

export function Contact22() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr gap-x-8 gap-y-12 sm:gap-x-10 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          <div>
            <div className="mb-5 sm:mb-6">
              <BiEnvelope className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] sm:mb-4 md:text-3xl lg:mb-4 lg:text-4xl">
              Email
            </h3>
            <p className="mb-5 md:mb-6">
              Send us a message and we'll get back to you
              within hours.
            </p>
            <a className="underline" href="#">
              hello@relume.io
            </a>
          </div>
          <div>
            <div className="mb-5 sm:mb-6">
              <BiMessageDetail className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] sm:mb-4 md:text-3xl lg:mb-4 lg:text-4xl">
              Live chat
            </h3>
            <p className="mb-5 md:mb-6">
              Need to talk right now? Chat with us and get
              answers instantly.
            </p>
            <a className="underline" href="#">
              Start new chat
            </a>
          </div>
          <div>
            <div className="mb-5 sm:mb-6">
              <BiPhone className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] sm:mb-4 md:text-3xl lg:mb-4 lg:text-4xl">
              Phone
            </h3>
            <p className="mb-5 md:mb-6">
              Call us anytime. Day or night. We pick up.
              That's not a maybe.
            </p>
            <a className="underline" href="#">
              +1 (555) 000-0000
            </a>
          </div>
          <div>
            <div className="mb-5 sm:mb-6">
              <BiMap className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] sm:mb-4 md:text-3xl lg:mb-4 lg:text-4xl">
              Office
            </h3>
            <p className="mb-5 md:mb-6">
              Stop by and say hello. We're here and ready to
              help you out.
            </p>
            <a className="underline" href="#">
              123 Sample St, Sydney NSW 2000 AU
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
