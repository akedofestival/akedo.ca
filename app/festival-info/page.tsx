import Link from "next/link";
import Image from "next/image";

import Container from "@/lib/components/core/Container";
import Heading from "@/lib/components/core/typography/Heading";
import FestivalMap from "@/app/festival-info/FestivalMap";
import RoomProgramming from "@/app/festival-info/RoomProgramming";
import { createMetadata } from "@/lib/utils/createMetadata";

export const metadata = createMetadata({
  title: "Schedules, Maps and Programming",
});

const areas = [
  {
    floor: "Floor 0 · PCH",
    title: "Stage, vendors & booth games",
    detail:
      "Ringo Shateki · Kendama · Gon’s Fish Training Arc. Kingyo Sukui is unconfirmed. Vendor details forthcoming.",
  },
  {
    floor: "Floor 1 · UC Courtyard",
    title: "Registration & artist alley",
    detail:
      "Registration by the bus entrances; general courtyard and artist alley. Artist-alley details forthcoming.",
  },
];

const generalSchedule = [
  ["12:00–12:15", "Introduction & sponsors"],
  ["12:15–1:15", "Mixed performances"],
  ["1:30–2:30", "Cosplay contest"],
  ["2:45–3:45", "Mixed performances"],
  ["4:00–5:00", "Idol Rush interactive activity (dance workshop)"],
  ["5:00–6:30", "Trivia by UTM + ACG"],
];

export default function FestivalInfoPage() {
  return (
    <>
      <h1 className="sr-only">Schedules, Maps and Programming</h1>
      <main className="bg-white py-16 md:py-24">
        <Container extended className="max-w-7xl">
          <div className="flex flex-col gap-14">
            <section className="mx-auto max-w-4xl text-center">
              <p className="text-brand-orange text-sm font-bold tracking-wide uppercase">
                Visitor guide
              </p>
              <Heading level="h2" className="text-brand-purple mt-2">
                Find your way around Ākēdo
              </Heading>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-black/75 md:text-xl">
                This location guide uses the supplied campus map as its base.
                The P8 and P42 route overlays follow visible outdoor paths on
                the supplied map. This is not a to-scale University Centre floor
                plan.
              </p>
            </section>

            <section
              id="campus-map"
              aria-label="Campus map and parking routes"
              className="scroll-mt-24"
            >
              <div className="mb-6">
                <p className="text-brand-orange text-sm font-bold uppercase">
                  Parking &amp; walking routes
                </p>
                <Heading level="h2" className="text-brand-purple mt-1">
                  Campus map
                </Heading>
                <p className="mt-3 max-w-3xl leading-relaxed text-black/70">
                  Both walking routes are shown on the map. Each parking card
                  includes its own walking-directions button.
                </p>
              </div>
              <FestivalMap />
            </section>

            <section
              id="locations"
              aria-label="Festival locations"
              className="scroll-mt-24"
            >
              <div className="mb-6">
                <p className="text-brand-orange text-sm font-bold uppercase">
                  Rooms &amp; activities
                </p>
                <Heading level="h2" className="text-brand-purple mt-1">
                  Schedules, Maps and Programming
                </Heading>
                <p className="mt-3 max-w-3xl leading-relaxed text-black/70">
                  University Centre room numbers and floors are listed as
                  provided; program and vendor details may change.
                </p>
              </div>
              <RoomProgramming />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {areas.map((area) => (
                  <article
                    key={area.floor}
                    className="border-brand-purple/25 rounded-2xl border bg-[#f8f2ff] px-6 py-5"
                  >
                    <p className="text-brand-orange text-sm font-bold uppercase">
                      {area.floor}
                    </p>
                    <h3 className="font-brand text-brand-purple mt-2 text-xl font-bold">
                      {area.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-black/75">
                      {area.detail}
                    </p>
                  </article>
                ))}
              </div>
              <div className="mt-8">
                <p className="text-brand-orange text-sm font-bold uppercase">
                  UC Floor 1 Courtyard
                </p>
                <Heading level="h3" className="text-brand-purple mt-1">
                  Artist alley directory &amp; map
                </Heading>
                <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <figure className="border-brand-purple/25 overflow-hidden rounded-2xl border bg-white p-3 shadow-sm">
                    <Image
                      src="/assets/festival-guide/uc-courtyard-map.png"
                      alt="Artist Alley Map for UC Floor 1 Courtyard, showing booth locations."
                      width={960}
                      height={1199}
                      className="h-auto w-full"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                    <figcaption className="text-brand-purple mt-3 text-center font-semibold">
                      Artist Alley Map
                    </figcaption>
                  </figure>
                  <figure className="border-brand-purple/25 overflow-hidden rounded-2xl border bg-white p-3 shadow-sm">
                    <Image
                      src="/assets/festival-guide/uc-courtyard-directory.png"
                      alt="Artist Alley Directory for UC Floor 1 Courtyard, listing participating artists and booths."
                      width={960}
                      height={1199}
                      className="h-auto w-full"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                    <figcaption className="text-brand-purple mt-3 text-center font-semibold">
                      Artist Alley Directory
                    </figcaption>
                  </figure>
                </div>
              </div>
            </section>

            <section
              aria-label="Stage schedule"
              className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]"
            >
              <div>
                <p className="text-brand-orange text-sm font-bold uppercase">
                  Stage
                </p>
                <Heading level="h2" className="text-brand-purple mt-1">
                  Schedule
                </Heading>
                <p className="mt-3 leading-relaxed text-black/70">
                  Performance and activity schedule for the stage at Peter Clark
                  Hall (PCH, Floor 0).
                </p>
              </div>
              <ol className="border-brand-purple/25 divide-brand-purple/15 divide-y rounded-2xl border bg-white px-5 sm:px-7">
                {generalSchedule.map(([time, event]) => (
                  <li
                    key={time}
                    className="grid gap-1 py-4 sm:grid-cols-[145px_1fr] sm:gap-5"
                  >
                    <span className="text-brand-purple font-bold">{time}</span>
                    <span className="text-black/75">{event}</span>
                  </li>
                ))}
              </ol>
            </section>

            <p className="border-brand-purple/20 border-t pt-5 text-sm text-black/60">
              Information is provisional. See the{" "}
              <Link
                className="text-brand-purple font-semibold underline"
                href="/#venue"
              >
                venue directions
              </Link>{" "}
              for the University Centre address.
            </p>
          </div>
        </Container>
      </main>
    </>
  );
}
