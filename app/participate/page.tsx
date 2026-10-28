/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import Image from "next/image";
import Link from "next/link";

import Container from "@/lib/components/core/Container";
import Heading from "@/lib/components/core/typography/Heading";
import NewsletterSignup from "@/lib/components/pages/participate/NewsletterSignup";
import { createMetadata } from "@/lib/utils/createMetadata";
import { Opportunity } from "@/lib/components/OpportunityCard/types";
import OpportunityCard from "@/lib/components/OpportunityCard/OpportunityCard";

export const metadata = createMetadata({ title: "Participate" });

const ticketUrl = "https://www.zeffy.com/en-CA/ticketing/akedo-festival--2026";
const mediaCrewApplicationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeJMG-wGJoudaE7QPeyOvx_-kYALO86xWNBn7G-M3TJz5zvQQ/viewform?usp=sharing&ouid=106643813354642850168";
const mediaPassApplicationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSer6NalYoMX33pSKC7qtC9kzrYg2fkxEJMrxokplrDIVBNZiQ/viewform?usp=sharing&ouid=106643813354642850168";
const volunteerArtistApplicationUrl = "https://forms.gle/1CyEFmmTwt5cdwrj9";
const guestCosplayerApplicationUrl = "https://forms.gle/qE5UKT8QRpD39gT6A";
const videoContentCreatorApplicationUrl = "https://forms.gle/ddFq6gNrsiU4VdaFA";
const posterRunnerApplicationUrl = "https://forms.gle/PcUUkRUYiFB2BGRn9";
const remoteExternalOutreachApplicationUrl =
  "https://forms.gle/2WRXnuzt6LeqsCu67";

const opportunities: Opportunity[] = [
  {
    isFeatured: true,
    title: "Guest Cosplayer Application",
    description:
      "Join us on November 7th as a Guest Cosplayer! Interact in character with fans and create unforgettable moments with guests of all ages! Sign up now to be a part of our scheduled programming at Ākēdo Festival.",
    reviewNote:
      "Applications will be reviewed on a rolling basis, with available positions offered on a first-come, first-served basis.",
    applicationLinks: [
      {
        label: "Apply as a Guest Cosplayer",
        href: guestCosplayerApplicationUrl,
      },
    ],
  },
  {
    isFeatured: true,
    postedOn: new Date(2026, 8, 5, 0, 0, 0, 0),
    title: "On-site Volunteer Applications",
    description:
      "Help bring Ākēdo Festival to life with setup and teardown, registration, booth games, and badge checks. Applications are now closed.",
    statusLabel: "Applications Closed",
  },
  {
    isFeatured: true,
    title: "Remote External Outreach Assistant",
    description:
      "Love chatting with people and making new connections? Help us spread the word about Ākēdo Festival and connect with people in our community! This role is all about communication, whether that means sending emails, replying to DMs, browsing websites, or picking up the phone when needed. We’re looking for friendly, organized volunteers who can take initiative and aren’t afraid to reach out to others!",
    applicationLinks: [
      {
        label: "Apply now to join our staff",
        href: remoteExternalOutreachApplicationUrl,
      },
    ],
  },
  {
    isFeatured: true,
    title: "Video Content Creator Application",
    description:
      "Have your work featured in Ākēdo Festival's promotional campaigns and advertisements, reaching thousands of viewers! Apply now to join our Marketing Department as a Video Content Creator. We are currently seeking volunteer actors, videographers, and video editors.",
    reviewNote: "Applications will be reviewed on a rolling basis.",
    applicationLinks: [
      {
        label: "Apply as a Video Content Creator",
        href: videoContentCreatorApplicationUrl,
      },
    ],
  },
  {
    isFeatured: true,
    title: "Volunteer Poster Runner",
    description:
      "We’re looking for volunteers to help distribute Ākēdo Festival posters across the GTA, Peel Region, Halton Region, Waterloo Region, Guelph, Brantford, Hamilton, London, and beyond! Supplies will be provided. See the sign-up form for more details.",
    applicationLinks: [
      {
        label: "Apply as a Poster Runner",
        href: posterRunnerApplicationUrl,
      },
    ],
  },
  {
    title: "Moe Character Cafe",
    description:
      "Make meals magical at Ākēdo Festival as a server, character performer, or barista. Volunteer from 12 PM to 5 PM, with several shifts available.",
    statusLabel: "Applications Closed",
    image: {
      src: "/assets/participate/moe-character-cafe.png",
      height: 1350,
      width: 1080,
    },
  },
  {
    title: "Artist Alley",
    description:
      "Independent creators selling handmade or original works, including stickers, keychains, plushies, crafts, commissions, prints, and other original creations.",
    statusLabel: "Applications Closed",
    image: {
      src: "/assets/participate/artist-alley.png",
      height: 1350,
      width: 1080,
    },
  },
  {
    title: "Vendor Hall",
    description:
      "Businesses or sellers offering officially licensed products, commercial merchandise, collectibles, apparel, and similar retail goods.",
    statusLabel: "Applications Closed",
    image: {
      src: "/assets/participate/vendor-hall.png",
      height: 2000,
      width: 2000,
    },
  },
  {
    title: "Volunteer Artists",
    description:
      "Illustrators, Graphic Designers, and Video Content Creators are invited to join the Ākēdo Marketing Dept. to build their portfolios, develop their skills, collaborate with other creatives, and help support long-term team projects.",
    applicationLinks: [
      {
        label: "Apply for Volunteer Artists",
        href: volunteerArtistApplicationUrl,
      },
    ],
    image: {
      src: "/assets/participate/volunteer-hiring.png",
      height: 1350,
      width: 1080,
    },
  },
  {
    title: "Stage Performances",
    description:
      "Join us on stage at the Ākēdo Festival! Whether you sing, dance, perform in a band, or have a unique talent to showcase, we welcome a variety of acts that bring energy and entertainment to our guests.",
    statusLabel: "Applications Closed",
    image: {
      src: "/assets/participate/stage-performance.png",
      height: 2793,
      width: 4832,
      isWide: true,
      fadeLeft: true,
    },
  },
  {
    title: "Card Market",
    description:
      "A dedicated space for members of the trading card game community to buy, sell, and trade throughout Ākēdo Festival.",
    statusLabel: "Applications Closed",
    image: {
      src: "/assets/participate/card-market.png",
      height: 2875,
      width: 2473,
    },
  },
  {
    title: "Media Crew Volunteers",
    description:
      "Volunteer photographers, videographers, and audio enthusiasts are invited to help capture and preserve the memories of Ākēdo Festival.",
    applicationLinks: [
      {
        label: "Apply for Media Crew",
        href: mediaCrewApplicationUrl,
      },
    ],
    image: {
      src: "/assets/participate/media-crew.png",
      height: 3025,
      width: 2683,
    },
  },
];

const festivalTitles = [
  "Volunteer Poster Runner",
  "Media Crew Volunteers",
  "Guest Cosplayer Application",
];
const yearRoundTitles = [
  "Website Team",
  "Volunteer Artists",
  "Remote External Outreach Assistant",
  "Video Content Creator Application",
];
opportunities.push({
  title: "Website Team",
  description:
    "Apply now to join Ākēdo's Web Team! Volunteers help maintain, update, and improve our official website. We’re looking for people interested in web development, with experience in programming languages, web frameworks, or interface design. Professional experience is not required, and we welcome applicants at different skill levels!",
  applicationLinks: [
    {
      label: "Apply for the Website Team",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSc-ZoJMWkh4miwTE9Tt54d2J3LHmSwJbp9pLweRzRUTGwdhCA/viewform",
    },
  ],
});
const closedOpportunities = opportunities.filter(
  (opportunity) => opportunity.statusLabel === "Applications Closed",
);

function ApplicationGroup({
  title,
  description,
  titles,
}: {
  title: string;
  description: string;
  titles: string[];
}) {
  return (
    <section aria-label={title}>
      <h2 className="font-brand text-brand-purple text-4xl font-bold">
        {title}
      </h2>
      <p className="mt-3 mb-6 text-lg text-black/75">{description}</p>
      <div className="grid gap-4 lg:grid-cols-2">
        {titles
          .map((title) => opportunities.find((item) => item.title === title))
          .filter(
            (item): item is Opportunity =>
              !!item && item.statusLabel !== "Applications Closed",
          )
          .map((opportunity) => (
            <OpportunityCard
              key={opportunity.title}
              opportunity={opportunity}
            />
          ))}
      </div>
    </section>
  );
}

export default function ParticipatePage() {
  return (
    <main className="bg-white py-24 md:py-32">
      <Container className="max-w-7xl">
        <div className="relative flex flex-col gap-12">
          <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_14rem] lg:grid-cols-[minmax(0,1fr)_17rem]">
            <header className="max-w-3xl">
              <Heading level="h1" className="text-brand-purple">
                Participate
              </Heading>
              <p className="mt-5 text-lg leading-relaxed text-black/75 md:text-xl">
                Be part of Ākēdo Festival as an artist, performer, photographer,
                volunteer, or sponsor. Applications will be posted here as they
                become available.
              </p>
              <Link
                className="bg-brand-orange hover:bg-brand-purple focus:bg-brand-purple mt-7 inline-flex w-fit items-center rounded-lg px-6 py-3 font-semibold text-white transition-colors"
                href={ticketUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Buy Tickets
                <i className="bi bi-arrow-right ml-2" />
              </Link>
            </header>

            <Image
              alt=""
              className="hidden h-72 w-56 justify-self-end object-contain md:block lg:h-80 lg:w-[17rem]"
              height={1974}
              src="/assets/participate/participationicon.png"
              width={1644}
            />
          </div>
          <ApplicationGroup
            title="Festival-day roles"
            description="Support the November 7 festival. These roles wrap up when the convention is over—not an application deadline."
            titles={festivalTitles}
          />
          <OpportunityCard
            opportunity={{
              title: "Cosplay Contest Sign-up",
              description:
                "Sign-ups for the Ākēdo cosplay contest are coming soon. Check back here for details.",
              statusLabel: "Coming Soon",
            }}
          />
          <ApplicationGroup
            title="Year-round team roles"
            description="Join the team beyond November 7. These volunteer positions involve an ongoing, year-round commitment."
            titles={yearRoundTitles}
          />

          <section className="border-brand-purple/25 rounded-2xl border bg-[#f8f2ff] px-6 py-8 md:px-8">
            <h2 className="font-brand text-brand-purple text-3xl font-bold">
              Complimentary Media Passes
            </h2>
            <p className="mt-4 max-w-3xl text-left text-base leading-relaxed text-black/75 md:text-lg">
              Ākēdo Festival offers complimentary entry to external media
              representatives, including newspaper and radio reporters,
              journalists, influencers, and vloggers, through our Media Pass
              program! Apply now to join us on November 7, 2026 at the
              University Centre for FREE!
            </p>
            <Link
              className="bg-brand-orange hover:bg-brand-purple focus:bg-brand-purple mt-6 inline-flex w-fit items-center rounded-lg px-6 py-3 font-semibold text-white transition-colors"
              href={mediaPassApplicationUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Apply now
              <i aria-hidden="true" className="bi bi-arrow-right ml-2" />
            </Link>
          </section>

          <NewsletterSignup />

          <section className="bg-brand-indigo relative rounded-2xl px-6 py-8 text-white md:px-10 md:py-10">
            <Image
              alt=""
              className="pointer-events-none absolute -right-10 -bottom-20 z-10 hidden h-[138%] w-[42%] object-contain object-right-bottom opacity-95 md:block"
              height={3530}
              src="/assets/participate/sponsor.png"
              width={2404}
            />
            <div className="relative z-10 md:max-w-[62%]">
              <p className="text-brand-white text-sm font-semibold uppercase">
                Sponsors
              </p>
              <h2 className="font-brand mt-2 text-4xl font-bold">
                Support Ākēdo Festival
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
                Interested in sponsorship tiers or partnership opportunities?
                Reach out to our marketing team for more information.
              </p>
              <Link
                className="text-brand-white mt-5 block w-fit text-lg font-semibold hover:underline focus:underline"
                href="mailto:marketing@akedo.ca?subject=Ākēdo%20Festival%20Sponsorship%20Inquiry"
              >
                marketing@akedo.ca
              </Link>
              <Link
                className="bg-brand-orange hover:bg-brand-white focus:bg-brand-white hover:text-brand-indigo focus:text-brand-indigo mt-7 flex w-fit items-center rounded-lg px-6 py-3 font-semibold text-white transition-colors"
                href="mailto:marketing@akedo.ca?subject=Ākēdo%20Festival%20Sponsorship%20Inquiry"
              >
                Contact Marketing
                <i className="bi bi-envelope ml-2" />
              </Link>
            </div>
          </section>
          <section aria-label="Closed applications">
            <h2 className="font-brand text-brand-purple text-4xl font-bold">
              Closed
            </h2>
            <p className="mt-3 mb-6 text-lg text-black/75">
              These applications are no longer accepting submissions. Thank you
              to everyone who applied.
            </p>
            <div className="grid gap-4 lg:grid-cols-2">
              {closedOpportunities.map((opportunity) => (
                <OpportunityCard
                  key={opportunity.title}
                  opportunity={{
                    ...opportunity,
                    image: undefined,
                    applicationLinks: undefined,
                    postedOn: undefined,
                  }}
                />
              ))}
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
