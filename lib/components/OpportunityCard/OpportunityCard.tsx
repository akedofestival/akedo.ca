"use client";

/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import Image from "next/image";
import { Opportunity } from "./types";
import Link from "next/link";
import { useState } from "react";
import MarkdownParagraph from "../core/typography/MarkdownParagraph";

function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  const [currentDate] = useState(() => Date.now());

  const showNewBannerUntil = 48 * 60 * 60 * 1000; //48 hours

  return (
    <article
      className="border-brand-purple/25 relative flex min-h-[22rem] flex-col justify-between gap-7 overflow-hidden rounded-2xl border bg-[#d8c9f2] p-6 md:p-8"
      key={opportunity.title}
    >
      <div
        className={`relative z-10 ${opportunity.image ? "xl:max-w-[68%]" : ""}`}
      >
        <div className="flex flex-col-reverse items-start gap-4 md:flex-row md:items-center md:gap-2">
          <h2 className="font-brand text-brand-purple text-3xl font-bold">
            {opportunity.title}
          </h2>
          {opportunity.postedOn &&
          currentDate - opportunity.postedOn?.getUTCMilliseconds() >=
            showNewBannerUntil ? (
            <span className="border-brand-orange bg-brand-orange flex flex-row gap-2 rounded-2xl border-2 px-2 text-white">
              <i className="bi bi-chat-left-heart-fill"></i>
              <p className="font-bold">NEW</p>
            </span>
          ) : null}
        </div>

        <MarkdownParagraph className="mt-4 text-base leading-relaxed md:text-lg">
          {opportunity.description}
        </MarkdownParagraph>

        {opportunity.reviewNote ? (
          <p className="mt-4 text-base leading-relaxed md:text-lg">
            {opportunity.reviewNote}
          </p>
        ) : null}
      </div>
      {opportunity.image ? (
        <>
          <div
            className={`pointer-events-none relative mx-auto mt-2 h-64 w-full xl:absolute xl:bottom-0 xl:mt-0 ${
              opportunity.image.isWide
                ? "xl:-right-20 xl:h-[98%] xl:w-[78%]"
                : "xl:-right-7 xl:h-[74%] xl:w-[44%]"
            }`}
          >
            <Image
              alt=""
              className="h-full w-full object-contain object-bottom"
              height={opportunity.image.height}
              src={opportunity.image.src}
              width={opportunity.image.width}
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-16 xl:hidden"
              style={{
                background: "linear-gradient(to bottom, transparent, #d8c9f2)",
              }}
            />
          </div>
          {opportunity.image.fadeLeft ? (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-[62%] xl:block"
              style={{
                background:
                  "linear-gradient(to right, #d8c9f2 0%, rgba(216, 201, 242, 0.96) 60%, rgba(216, 201, 242, 0) 100%)",
              }}
            />
          ) : null}
        </>
      ) : null}
      {opportunity.applicationLinks ? (
        <div
          className={`relative z-10 flex w-fit flex-col gap-2 ${
            opportunity.image ? "xl:max-w-[56%]" : ""
          }`}
        >
          {opportunity.applicationLinks.map((link) => (
            <Link
              className="bg-brand-orange hover:bg-brand-purple focus:bg-brand-purple rounded-lg px-5 py-3 text-center font-semibold text-white transition-colors"
              href={link.href}
              key={link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {link.label}
              <i className="bi bi-arrow-right ml-2" />
            </Link>
          ))}
        </div>
      ) : (
        <span
          className={`border-brand-purple/30 text-brand-purple relative z-10 inline-flex w-fit items-center rounded-lg border bg-[#d8c9f2]/90 px-5 py-3 font-semibold ${
            opportunity.image ? "xl:max-w-[56%]" : ""
          }`}
        >
          {opportunity.statusLabel ?? "Applications Coming Soon"}
        </span>
      )}
    </article>
  );
}

export default OpportunityCard;
