"use client";

import Image from "next/image";
import { useState } from "react";

type RouteId = "p8" | "p42";

const routes: Record<
  RouteId,
  {
    title: string;
    start: string;
    instructions: string;
    path: string;
    uncertainPath?: string;
    color: string;
  }
> = {
  p8: {
    title: "P8 → University Centre",
    start: "P8 · Visitor Parking",
    instructions:
      "From P8, follow the visible outdoor path southwest around Thornbrough to the last clearly mapped pedestrian point. The dashed continuation toward Winegard Walk and the University Centre is approximate: the supplied map does not show a marked pedestrian crossing at the campus circulation road. Confirm the crossing on site.",
    path: "M 937 280 L 900 315 L 865 350 L 832 380 L 804 410",
    uncertainPath:
      "M 804 410 L 770 437 L 740 456 L 725 466 L 690 432 L 650 398 L 615 365 L 590 335 L 570 303",
    color: "#b92732",
  },
  p42: {
    title: "P42 → University Centre",
    start: "P42 · Visitor Parking",
    instructions:
      "From P42, follow the outdoor path north along the east edge of Conservatory Gardens to the GO Terminal, University Centre Bus Loop. Continue northwest along the walkway around the bus loop, then follow the path to the University Centre outdoor approach.",
    path: "M 568 652 L 574 621 L 580 590 L 586 560 L 593 530 L 579 506 L 560 484 L 540 460 L 520 438 L 500 416 L 485 395 L 475 380 L 490 388 L 500 385",
    color: "#147c68",
  },
};

export default function FestivalMap() {
  const [activeRoute, setActiveRoute] = useState<RouteId>("p8");
  const route = routes[activeRoute];

  return (
    <div className="flex flex-col gap-6">
      <div className="border-brand-purple w-full overflow-hidden rounded-2xl border-2 bg-white shadow-lg">
        <div className="relative">
          <Image
            src="/assets/festival-map-base.png"
            alt="Campus map showing University Centre, P8 Visitor Parking, P42 parking, Conservatory Gardens, Thornbrough Building, Winegard Walk, and the GO Terminal bus loop."
            width={1305}
            height={855}
            priority
            className="block h-auto w-full"
          />
          <svg
            id="campus-route-overlay"
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1305 855"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <defs>
              <filter
                id="route-glow"
                x="-30%"
                y="-30%"
                width="160%"
                height="160%"
              >
                <feDropShadow
                  dx="0"
                  dy="2"
                  stdDeviation="3"
                  floodColor="#ffffff"
                  floodOpacity="1"
                />
              </filter>
            </defs>
            {(["p8", "p42"] as const).map((id) => (
              <g key={id}>
                <path
                  d={routes[id].path}
                  fill="none"
                  stroke={routes[id].color}
                  strokeWidth={activeRoute === id ? 10 : 8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity={activeRoute === id ? 1 : 0.9}
                  filter={activeRoute === id ? "url(#route-glow)" : undefined}
                />
                {routes[id].uncertainPath && (
                  <path
                    d={routes[id].uncertainPath}
                    fill="none"
                    stroke={routes[id].color}
                    strokeWidth={activeRoute === id ? 10 : 8}
                    strokeDasharray="12 10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity={activeRoute === id ? 1 : 0.9}
                    filter={activeRoute === id ? "url(#route-glow)" : undefined}
                  />
                )}
              </g>
            ))}
            <g aria-hidden="true">
              <circle
                cx="937"
                cy="280"
                r="13"
                fill="#b92732"
                stroke="white"
                strokeWidth="4"
              />
              <text
                x="955"
                y="273"
                fill="#171717"
                stroke="white"
                strokeWidth="4"
                paintOrder="stroke"
                fontSize="20"
                fontWeight="800"
              >
                P8
              </text>
              <circle
                cx="568"
                cy="652"
                r="13"
                fill="#147c68"
                stroke="white"
                strokeWidth="4"
              />
              <text
                x="585"
                y="648"
                fill="#171717"
                stroke="white"
                strokeWidth="4"
                paintOrder="stroke"
                fontSize="20"
                fontWeight="800"
              >
                P42
              </text>
              <rect
                x="496"
                y="663"
                width="152"
                height="23"
                rx="5"
                fill="white"
                fillOpacity=".94"
              />
              <text
                x="503"
                y="680"
                fill="#171717"
                fontSize="15"
                fontWeight="700"
              >
                Visitor Parking
              </text>
              <circle
                cx="570"
                cy="303"
                r="10"
                fill="#662d8b"
                stroke="white"
                strokeWidth="4"
              />
              <text
                x="580"
                y="298"
                fill="#171717"
                stroke="white"
                strokeWidth="4"
                paintOrder="stroke"
                fontSize="14"
                fontWeight="800"
              >
                (UC) University Center
              </text>
              <circle
                cx="500"
                cy="385"
                r="10"
                fill="#662d8b"
                stroke="white"
                strokeWidth="4"
              />
              <text
                x="514"
                y="390"
                fill="#171717"
                stroke="white"
                strokeWidth="4"
                paintOrder="stroke"
                fontSize="15"
                fontWeight="800"
              >
                (UC) University Center
              </text>
            </g>
          </svg>
        </div>
        <div className="border-brand-purple/15 flex flex-wrap items-center gap-x-5 gap-y-2 border-t px-4 py-3 text-sm text-black/75">
          <span className="font-semibold">Route overlay:</span>
          <span className="inline-flex items-center gap-2">
            <i className="h-1 w-6 rounded bg-[#b92732]" /> P8 solid path
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="h-0 w-6 border-t-2 border-dashed border-[#b92732]" />
            P8 dashed · crossing not marked
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="h-1 w-6 rounded bg-[#147c68]" /> P42 route
          </span>
          <span className="text-black/55">
            Use the route buttons below to highlight a path.
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4" aria-label="Parking route options">
        {(["p8", "p42"] as const).map((id) => (
          <button
            key={id}
            type="button"
            aria-pressed={activeRoute === id}
            aria-controls="campus-route-overlay"
            aria-label={routes[id].title}
            aria-describedby={`route-description-${id}`}
            onClick={() => setActiveRoute(id)}
            className={`focus-visible:ring-brand-orange w-full rounded-2xl border-2 p-5 text-left transition-colors focus-visible:ring-4 ${activeRoute === id ? "border-brand-purple bg-[#f8f2ff] shadow-md" : "border-brand-purple/20 hover:border-brand-purple/60 bg-white"}`}
          >
            <span className="text-brand-orange text-sm font-bold tracking-wide uppercase">
              {routes[id].start}
            </span>
            <span className="font-brand text-brand-purple mt-1 block text-2xl font-bold">
              {routes[id].title}
            </span>
            <span
              id={`route-description-${id}`}
              className="mt-3 block leading-relaxed text-black/75"
            >
              {routes[id].instructions}
            </span>
          </button>
        ))}
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          Highlighted route: {route.title}
        </p>
        <div className="bg-brand-indigo rounded-2xl p-5 text-white">
          <h3 className="font-brand text-xl font-bold">
            Parking &amp; access note
          </h3>
          <p className="mt-2 leading-relaxed text-white/85">
            Accessible 15-minute parking is listed in the event information. Its
            location is not identified on this map, so it is not marked here.
          </p>
        </div>
      </div>
    </div>
  );
}
