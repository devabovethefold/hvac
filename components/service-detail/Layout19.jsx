"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout19() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Fast</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Same day repair, most times
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              Your AC is broken. We fix it today. Not tomorrow. Not next week.
              Today.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Same-day service available</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>24/7 emergency response</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Upfront pricing, no surprises</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn" variant="secondary">
                Learn
              </Button>
              <Button
                title="More"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                More
              </Button>
            </div>
          </div>
          <div>
            <img
              src="/images/hvac/hvac_ac_repair.png"
              className="w-full object-cover"
              alt="Professional HVAC Repair"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
