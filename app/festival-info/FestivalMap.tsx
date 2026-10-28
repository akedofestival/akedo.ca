"use client";

import Image from "next/image";

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
      "From P42, which offers regular visitor parking as well as accessible and 15-minute parking, follow the outdoor path north along the east edge of Conservatory Gardens to the GO Terminal, University Centre Bus Loop. Continue northwest along the walkway around the bus loop, then follow the path to the University Centre outdoor approach.",
    path: "M 568 652 L 574 621 L 580 590 L 586 560 L 593 530 L 579 506 L 560 484 L 540 460 L 520 438 L 500 416 L 485 395 L 475 380 L 490 388 L 500 385",
    color: "#147c68",
  },
};

export default function FestivalMap() {
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
                  strokeWidth={8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity={1}
                  filter="url(#route-glow)"
                />
                {routes[id].uncertainPath && (
                  <path
                    d={routes[id].uncertainPath}
                    fill="none"
                    stroke={routes[id].color}
                    strokeWidth={8}
                    strokeDasharray="12 10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity={1}
                    filter="url(#route-glow)"
                  />
                )}
              </g>
            ))}
            <g aria-hidden="true">
              <circle
                cx="355"
                cy="207"
                r="10"
                fill="#adc900"
                stroke="white"
                strokeWidth="3"
              />
              <path
                d="M 397 61 L 421 37 M 407 73 L 431 49"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M 448 64 L 323 189 Q 318 194 326 198 L 355 207"
                fill="none"
                stroke="#adc900"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 401 111 L 463 171 L 500 208 L 538 246 L 575 284 L 550 310 L 525 335 L 502 358"
                fill="none"
                stroke="#b142ac"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="502"
                cy="358"
                r="11"
                fill="#b142ac"
                stroke="white"
                strokeWidth="3"
              />
              <circle
                cx="422"
                cy="53"
                r="9"
                fill="#662d8b"
                stroke="white"
                strokeWidth="3"
              />
              <g
                fill="#171717"
                stroke="white"
                strokeWidth="5"
                paintOrder="stroke"
                fontSize="16"
                fontWeight="800"
              >
                <text x="464" y="105">
                  <tspan x="464">Parking (only 3 spots)</tspan>
                  <tspan x="464" dy="20">
                    15 min · drop-off &amp; accessibility only
                  </tspan>
                </text>
                <text x="340" y="32">
                  Bike rack
                </text>
              </g>
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
                width="340"
                height="47"
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
                <tspan x="503">Regular visitor parking</tspan>
                <tspan x="503" dy="20">
                  Also accessible &amp; 15-minute parking
                </tspan>
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
      </div>

      <div className="flex flex-col gap-4" aria-label="Parking route options">
        {(["p8", "p42"] as const).map((id) => (
          <article
            key={id}
            aria-label={routes[id].title}
            className="border-brand-purple/25 rounded-2xl border-2 bg-white p-5"
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
            <a
              href={
                id === "p8"
                  ? "https://www.google.com/maps/dir/P8+-+Visitor+Parking+(with+meters),+Guelph,+ON+N1G+2W2/43.5302015,-80.2258264/@43.5301249,-80.2271799,17z/data=!3m1!4b1!4m9!4m8!1m5!1m1!1s0x882b9b2e634d753b:0xef058856dc448107!2m2!1d-80.2234662!2d43.5303725!1m0!3e3?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                  : "https://www.google.com/maps/dir/P42+Visitor,+Pick-up%2FDrop-off,+Taxis+and+Motorcycles,+Christie+Ln,+Guelph,+ON+N1G+4Y2/43.5302015,-80.2258264/@43.5303777,-80.2272186,17z/data=!4m9!4m8!1m5!1m1!1s0x882b9b2c13337313:0x511ecc2304e0d02d!2m2!1d-80.2255046!2d43.5290268!1m0!3e3?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-purple focus-visible:ring-brand-orange mt-4 inline-flex rounded-lg px-5 py-3 font-semibold text-white focus-visible:ring-4"
            >
              Open walking directions from {id.toUpperCase()}
            </a>
          </article>
        ))}
        <article
          aria-label="Bike rack"
          className="border-brand-purple/25 rounded-2xl border-2 bg-white p-5"
        >
          <h3 className="font-brand text-brand-purple text-2xl font-bold">
            Bike rack
          </h3>
          <p className="mt-3 text-black/75">
            Bicycle parking near the University Centre. Open the supplied Google
            Maps route for directions.
          </p>
          <a
            href="https://www.google.com/maps/dir/Parking+Lot+for+Bicycles,+Guelph,+ON+N1G+2W2/43.5302015,-80.2258907/@43.5309161,-80.2267571,17.95z/data=!4m9!4m8!1m5!1m1!1s0x882b9b2eca17aaab:0x30949593ce8ab35e!2m2!1d-80.2262604!2d43.5312648!1m0!3e3?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-purple mt-4 inline-flex rounded-lg px-5 py-3 font-semibold text-white focus-visible:ring-4"
          >
            Open bike-rack directions
          </a>
        </article>
        <p className="text-sm text-black/65">
          Follow-along directions open in Google Maps. Confirm the selected
          parking lot and entrance before starting; the provider chooses its own
          route.
        </p>
        <div className="bg-brand-indigo rounded-2xl p-5 text-white">
          <h3 className="font-brand text-xl font-bold">
            Parking &amp; access note
          </h3>
          <p className="mt-2 leading-relaxed text-white/85">
            The yellow parking area has only 3 spots, with a 15-minute limit for
            drop-off and accessibility only. Parking, the bike rack, and the
            accessible 15-minute parking approach are annotated from the
            supplied reference image. These are approximate visual locations,
            not surveyed spaces or a verified step-free route. Check posted
            signs and access conditions on arrival.
          </p>
        </div>
      </div>
    </div>
  );
}
