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
const vendorApplicationUrl = "https://forms.gle/mBAmWkUQnYLFYaD78";
const mediaCrewApplicationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeJMG-wGJoudaE7QPeyOvx_-kYALO86xWNBn7G-M3TJz5zvQQ/viewform?usp=sharing&ouid=106643813354642850168";
const volunteerArtistApplicationUrl = "https://forms.gle/1CyEFmmTwt5cdwrj9";
const guestCosplayerApplicationUrl = "https://forms.gle/qE5UKT8QRpD39gT6A";
const videoContentCreatorApplicationUrl = "https://forms.gle/ddFq6gNrsiU4VdaFA";
const posterRunnerApplicationUrl = "https://forms.gle/PcUUkRUYiFB2BGRn9";
const onSiteApplicationUrl = "https://forms.gle/j8z83nDPehBeZSJ57";
const moeCharacterCafeApplicationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfMSSKTitOC2VjBSpRNQa_5yR0PpmZ-753BP2pSJDmVx5pZNQ/viewform";

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
      "Help bring Ākēdo Festival to life by supporting the event on-site! Help with setup and teardown, registration, booth games and badge check! Applications are open until __October 19, 2026!__",
    applicationLinks: [
      {
        label: "Apply as an On-site Volunteer",
        href: onSiteApplicationUrl,
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
    applicationLinks: [
      {
        label: "Apply for the Moe Character Cafe",
        href: moeCharacterCafeApplicationUrl,
      },
    ],
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
      "Businesses or sellers offering officially licensed products, commercial merchandise, collectibles, apparel, and similar retail goods. Reapplications welcome.",
    applicationLinks: [
      {
        label: "Apply for Vendor Hall",
        href: vendorApplicationUrl,
      },
    ],
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
    applicationLinks: [
      {
        label: "Apply for Card Market",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSdq-UWnofLD8Iei5lFcxO9U2_chSCsc7d1fhnaqNp5g7l-V3g/viewform?usp=header",
      },
    ],
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

const featuredApplicationOpportunities = opportunities.filter(
  (opportunity) => opportunity.isFeatured,
);
const artistAlleyOpportunities = opportunities.filter(
  (opportunity) => opportunity.title === "Artist Alley",
);
const vendorOpportunities = opportunities.filter(
  (opportunity) => opportunity.title === "Vendor Hall",
);
const volunteerArtistOpportunities = opportunities.filter(
  (opportunity) => opportunity.title === "Volunteer Artists",
);
const moeCharacterCafeOpportunities = opportunities.filter(
  (opportunity) => opportunity.title === "Moe Character Cafe",
);
const cardMarketOpportunities = opportunities.filter(
  (opportunity) => opportunity.title === "Card Market",
);
const mediaCrewOpportunities = opportunities.filter(
  (opportunity) => opportunity.title === "Media Crew Volunteers",
);
const performanceOpportunities = opportunities.filter(
  (opportunity) => opportunity.title === "Stage Performances",
);

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
          <section className="border-brand-purple/25 rounded-2xl border bg-[#f8f2ff] px-6 py-8 md:px-8">
            <p className="text-brand-orange text-sm font-bold uppercase">
              Applications Open
            </p>
            <h2 className="font-brand text-brand-purple mt-2 text-4xl font-bold">
              Featured Opportunities
            </h2>
          </section>

          <section
            aria-label="Featured applications"
            className="grid gap-4 lg:grid-cols-2"
          >
            {featuredApplicationOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.title}
                opportunity={opportunity}
              />
            ))}
          </section>

          <section className="border-brand-purple/25 rounded-2xl border bg-[#f8f2ff] px-6 py-8 md:px-8">
            <p className="text-brand-orange text-sm font-bold uppercase">
              Volunteer Applications
            </p>
            <h2 className="font-brand text-brand-purple mt-2 text-4xl font-bold">
              Moe Character Cafe
            </h2>
            <div className="mt-4 flex flex-col gap-2.5 text-base leading-relaxed text-black/75 md:grid-cols-2 md:text-lg">
              <p>
                Join us in the Moe Character Cafe to make meals magical at Ākēdo
                Festival! If you&apos;re passionate about cosplay, great at
                customer service, and looking to gain volunteer experience,
                apply now.
              </p>
              <p>
                We are looking for servers, character performers, and baristas
                to join us from 12 PM to 5 PM, with several shifts available.
                Applications will remain open until October 16, 2026.
              </p>
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            {moeCharacterCafeOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.title}
                opportunity={opportunity}
              />
            ))}
          </section>

          <section className="border-brand-purple/25 rounded-2xl border bg-[#f8f2ff] px-6 py-8 md:px-8">
            <p className="text-brand-orange text-sm font-bold uppercase">
              Volunteer Artist Intake
            </p>
            <h2 className="font-brand text-brand-purple mt-2 text-4xl font-bold">
              Volunteer Artists
            </h2>
            <div className="mt-4 flex flex-col gap-2.5 text-base leading-relaxed text-black/75 md:grid-cols-2 md:text-lg">
              <p>
                Bring your creativity to Ākēdo! We&apos;re looking for
                Illustrators, Graphic Designers, and Video Content Creators to
                join the Ākēdo Marketing Dept. Whether you want to build your
                portfolio, develop your skills, collaborate with other
                creatives, or simply have fun, we&apos;d love to have you on the
                team.
              </p>
              <p>
                This is a long-term volunteer position that requires an ongoing
                commitment to the team and its projects.
              </p>
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            {volunteerArtistOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.title}
                opportunity={opportunity}
              />
            ))}
          </section>

          <section className="border-brand-purple/25 rounded-2xl border bg-[#f8f2ff] px-6 py-8 md:px-8">
            <p className="text-brand-orange text-sm font-bold uppercase">
              Applications Open
            </p>
            <h2 className="font-brand text-brand-purple mt-2 text-4xl font-bold">
              Vendor Hall Applications
            </h2>
            <div className="mt-4 flex flex-col gap-2.5 text-base leading-relaxed text-black/75 md:grid-cols-2 md:text-lg">
              <p>
                Vendor Hall applications are open for a second round for
                businesses or sellers offering officially licensed products,
                commercial merchandise, trading cards, collectibles, apparel,
                and similar retail goods.
              </p>
              <p>
                Reapplications welcome. Applications are due October 5, 2026.
              </p>
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            {vendorOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.title}
                opportunity={opportunity}
              />
            ))}
          </section>

          <section className="border-brand-purple/25 rounded-2xl border bg-[#f8f2ff] px-6 py-8 md:px-8">
            <p className="text-brand-orange text-sm font-bold uppercase">
              Applications Open
            </p>
            <h2 className="font-brand text-brand-purple mt-2 text-4xl font-bold">
              Card Market Applications
            </h2>
            <div className="mt-4 flex flex-col gap-2.5 text-base leading-relaxed text-black/75 md:grid-cols-2 md:text-lg">
              <p>
                The Ākēdo Festival Card Market is a dedicated space for members
                of the trading card game community to buy, sell, and trade
                throughout the event.
              </p>
              <p>
                Applications are reviewed on a first come, first served basis.
                Applications will remain open until October 5, 2026, or until
                all available spaces have been filled, whichever comes first.
              </p>
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            {cardMarketOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.title}
                opportunity={opportunity}
              />
            ))}
          </section>

          <section className="border-brand-purple/25 rounded-2xl border bg-[#f8f2ff] px-6 py-8 md:px-8">
            <p className="text-brand-orange text-sm font-bold uppercase">
              Volunteer Applications
            </p>
            <h2 className="font-brand text-brand-purple mt-2 text-4xl font-bold">
              Media Crew Volunteers
            </h2>
            <div className="mt-4 flex flex-col gap-2.5 text-base leading-relaxed text-black/75 md:grid-cols-2 md:text-lg">
              <p>
                Ākēdo Festival is recruiting volunteer photographers,
                videographers, and audio enthusiasts to help capture and
                preserve the memories of Ākēdo Festival.
              </p>
              <p>
                We encourage applicants to apply early, as roles are assigned on
                a first-come, first-served basis. Applications will remain open
                until October 12, 2026 at 11:59 PM, or until all positions have
                been filled. View the application for full role descriptions,
                responsibilities, and application requirements.
              </p>
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            {mediaCrewOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.title}
                opportunity={opportunity}
              />
            ))}
          </section>

          <section className="border-brand-purple/25 rounded-2xl border bg-[#f8f2ff] px-6 py-8 md:px-8">
            <p className="text-brand-orange text-sm font-bold uppercase">
              APPLICATIONS CLOSED
            </p>
            <h2 className="font-brand text-brand-purple mt-2 text-4xl font-bold">
              Performance Application
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/75 md:text-lg">
              Applications are now closed! Thank you to everyone who applied.
              Please keep an eye on your email for results.
            </p>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            {performanceOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.title}
                opportunity={opportunity}
              />
            ))}
          </section>

          <section className="border-brand-purple/25 rounded-2xl border bg-[#f8f2ff] px-6 py-8 md:px-8">
            <p className="text-brand-orange text-sm font-bold uppercase">
              Applications Closed
            </p>
            <h2 className="font-brand text-brand-purple mt-2 text-4xl font-bold">
              Artist Alley Applications
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/75 md:text-lg">
              Applications are now closed! Thank you to everyone who applied.
              Please keep an eye on your email for results.
            </p>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            {artistAlleyOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.title}
                opportunity={opportunity}
              />
            ))}
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
        </div>
      </Container>
    </main>
  );
}
