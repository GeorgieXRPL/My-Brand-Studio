import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyBookCta } from "@/components/StickyBookCta";
import { LookCardFigure } from "@/components/LookCardFigure";
import { PillarJsonLd } from "@/components/PillarJsonLd";
import {
  SEO_PILLAR_PATH,
  SEO_PILLAR_URL,
  pillarLooks,
  seoPillarFaqs,
  seoPillarMeta,
} from "@/content/seo-pillar";

export const metadata: Metadata = {
  title: { absolute: seoPillarMeta.title },
  description: seoPillarMeta.description,
  keywords: seoPillarMeta.keywords,
  alternates: { canonical: SEO_PILLAR_PATH },
  openGraph: {
    title: seoPillarMeta.ogTitle,
    description: seoPillarMeta.ogDescription,
    url: SEO_PILLAR_URL,
    type: "article",
    locale: "en_NZ",
    siteName: "My Brand Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: seoPillarMeta.ogTitle,
    description: seoPillarMeta.ogDescription,
  },
};

const toc = [
  ["Do I need a website if I already have Instagram?", "#do-i-need-a-website-if-i-already-have-instagram"],
  ["Website vs app — which first?", "#website-vs-app--which-first"],
  ["Website vs Linktree / Facebook page", "#website-vs-linktree--facebook-page"],
  ["What good enough looks like in 2026", "#what-good-enough-looks-like-in-2026"],
  ["DIY builder vs agency vs Brand Studio", "#diy-builder-vs-agency-vs-brand-studio"],
  ["How SEO actually works for a new site", "#how-seo-actually-works-for-a-new-site-no-hacks"],
  ["What we will automate", "#what-well-automate-honest"],
  ["NZ notes", "#nz-notes-conz-enquiry-forms-google-business-profile-only-if-real"],
  ["FAQ", "#faq"],
] as const;

export default function DoINeedAWebsitePage() {
  return (
    <>
      <PillarJsonLd />
      <SiteHeader />
      <main>
        <article className="pillar section-pad">
          <div className="wrap pillar-wrap">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
              Guide
            </p>
            <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
              {seoPillarMeta.h1}
            </h1>
            <p className="pillar-lede mt-6">
              Most New Zealand small businesses need a website before an app.
              Instagram and Facebook help people you already know. A brand site
              is the page you own: hours, enquiry form, services, and something
              Google can index. Start with a clear site; add an app only if
              customers need to log in or book from their pocket.
            </p>
            <p>
              That is the short version. The rest of this page is the honest
              version: when Instagram is enough, when a Linktree is a bottleneck,
              what good enough looks like in 2026, and how My Brand Studio
              actually builds and cares for a site. We are a live studio at{" "}
              <a href="/">mybrandstudio.club</a>, not a waitlist.
            </p>
            <p>
              <strong>Who this is for:</strong> cafes, tradies, salons, coaches,
              creators, and small product brands who keep hearing “you need a
              website” and want a straight answer before they spend.
            </p>
            <p>
              <strong>Who this is not for:</strong> anyone hunting a guaranteed
              page-one ranking, a fake Google Business Profile, or a free website
              builder with no one on the other end.
            </p>

            <nav className="pillar-toc" aria-label="On this page">
              <p>On this page</p>
              <ol>
                {toc.map(([label, href]) => (
                  <li key={href}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ol>
            </nav>

            <h2 id="do-i-need-a-website-if-i-already-have-instagram">
              Do I need a website if I already have Instagram?
            </h2>
            <p>
              Yes, if you want people who do not already follow you to find you,
              trust you, and send an enquiry. Instagram is a channel. A website
              is an address you own.
            </p>
            <p>
              Instagram is excellent at proof and personality. A Reel of Saturday
              brunch, a Story of a van on a job, a carousel of before-and-after
              work: that is how a lot of New Zealand businesses still get known.
              Keep doing that. The gap is what happens when someone is not
              already in your audience.
            </p>
            <p>
              Search does not live inside your grid. A parent googling “plumber
              Lower Hutt after hours”, a tourist looking for “cafe near me that’s
              actually open”, a brand manager checking you exist before they
              reply to a DM: they land on whatever Google, Maps, or an AI
              overview can read. An Instagram profile is a poor substitute for
              that.
            </p>
            <ul>
              <li>
                <strong>You do not own the door.</strong> Accounts get
                restricted. Features change. The link in bio is one slot, and it
                is a terrible place to hide hours, pricing, and a real enquiry
                form.
              </li>
              <li>
                <strong>Google cannot treat a grid like a homepage.</strong>{" "}
                Captions help a little. They are not a title tag, a service page,
                or a crawlable list of suburbs you cover.
              </li>
              <li>
                <strong>Trust still wants a page.</strong> Phone number, area
                served, GST-ready invoice path, who you are. A lot of buyers
                will not DM a stranger from a Reel.
              </li>
            </ul>
            <div className="look-pair">
              <LookCardFigure still={pillarLooks.cafe} />
              <LookCardFigure still={pillarLooks.workshop} />
            </div>
            <p>
              Use Instagram for the people who already like you. Use a brand
              site for the people who are trying to find you. Point the bio at
              the site, not at another list of links.
            </p>

            <h2 id="website-vs-app--which-first">Website vs app — which first?</h2>
            <p>The website. Almost always.</p>
            <p>
              An app is a product people keep on their home screen. That only
              pays off when they have a reason to come back: a booking they
              repeat, a login, points, a class timetable, a members’ hub, live
              ops. If you do not have that loop yet, an App Store listing is
              expensive theatre. You will still need a website so people can find
              you, read the offer, and install anything at all.
            </p>
            <table>
              <thead>
                <tr>
                  <th>You need…</th>
                  <th>Start with</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>To be found, believed, and emailed or called</td>
                  <td>A brand site</td>
                </tr>
                <tr>
                  <td>A menu, hours, services, suburbs, and an enquiry form</td>
                  <td>A brand site</td>
                </tr>
                <tr>
                  <td>Repeat bookings, a logged-in schedule, points or rewards</td>
                  <td>A site with a login-ready shell, then consider an app</td>
                </tr>
                <tr>
                  <td>A game, holder hub, or live ops console</td>
                  <td>Custom, quoted per scope. Do not start in the App Store</td>
                </tr>
              </tbody>
            </table>
            <div className="look-pair">
              <LookCardFigure still={pillarLooks.saas} />
              <LookCardFigure still={pillarLooks.course} />
            </div>
            <p>
              My Brand Studio’s{" "}
              <a href="/#pricing">Business Site</a> package is the middle path a
              lot of owners actually need: a login-ready shell without pretending
              you must ship a native app in week one.
            </p>

            <h2 id="website-vs-linktree--facebook-page">
              Website vs Linktree / Facebook page
            </h2>
            <p>
              A Linktree is a list. A Facebook page is a profile on someone
              else’s network. A website is a place.
            </p>
            <p>
              Link-in-bio tools are fine as a temporary tray for a personal
              account. They are a weak home for a business. Every tap is another
              hop. There is no real “about”, no crawlable service page, no quiet
              place to put prices or a proper enquiry. Google has little to index
              except a stack of outbound buttons.
            </p>
            <LookCardFigure still={pillarLooks.awning} />
            <p>A brand site gives you:</p>
            <ol>
              <li>A URL you can print on a van, a coffee cup, and a GST invoice.</li>
              <li>One enquiry form that arrives in a real inbox.</li>
              <li>
                Pages Google and AI overviews can quote: services, suburbs, and
                the question on this page.
              </li>
              <li>
                A bio link that goes somewhere finished, so Instagram and
                Facebook become doors, not the building.
              </li>
            </ol>

            <h2 id="what-good-enough-looks-like-in-2026">
              What “good enough” looks like in 2026
            </h2>
            <p>
              Good enough is not a 40-page brochure or a chatbot that cannot take
              an enquiry. It is a fast page that tells the truth, can be found,
              and can be updated on a Tuesday without drama.
            </p>
            <ul>
              <li>
                <strong>One job on the home page.</strong> Who it is for, what
                you do, where you are, what to do next.
              </li>
              <li>
                <strong>A real enquiry path.</strong> Form, phone, or booking.
                The message has to arrive somewhere a human will see it.
              </li>
              <li>
                <strong>Hours, area, and proof that look like you.</strong>{" "}
                Photos of the actual room, the van, the bench.
              </li>
              <li>
                <strong>Mobile first, HTTPS, and a title that matches the search.</strong>
              </li>
              <li>
                <strong>Something you can edit.</strong> Saturday hours, a
                special, a new Reel URL.
              </li>
            </ul>
            <div className="look-pair">
              <LookCardFigure still={pillarLooks.cream} />
              <LookCardFigure still={pillarLooks.florist} />
            </div>
            <p>
              Good enough is allowed to be a one-page site. A same-day sketch at
              My Brand Studio is a one-page concept after a short call. Final
              page count is confirmed on that call.
            </p>

            <h2 id="diy-builder-vs-agency-vs-brand-studio">
              DIY builder vs agency vs Brand Studio
            </h2>
            <p>
              Three honest paths. None of them is morally better. They cost
              different kinds of time.
            </p>
            <p>
              <strong>DIY builders</strong> are right when you like fiddling and
              the risk of a slightly generic site is fine. You also own every
              broken form and “why is this not on Google” evening.
            </p>
            <p>
              <strong>A traditional agency</strong> is right when you want a
              fully custom object and you are ready for agency rates and
              timelines. Changing Saturday hours should not require a ticket.
            </p>
            <p>
              <strong>My Brand Studio</strong> is done-for-you, with optional
              care. We start from <a href="/templates">looks you can ship</a>.
              Book before 10am NZ and you get a one-page concept draft the same
              calendar day. That sketch is credit toward Starter or Custom if you
              proceed within 14 days.
            </p>
            <div className="look-pair">
              <LookCardFigure still={pillarLooks.bakery} />
              <LookCardFigure still={pillarLooks.creator} />
            </div>
            <p>
              This is not a fake “start free builder” funnel. You talk to us. We
              sketch. You decide. Live examples include{" "}
              <a href="https://ggsaltaire.com">ggsaltaire.com</a>,{" "}
              <a href="https://astroid.space">astroid.space</a>, and{" "}
              <a href="https://astroid.club">astroid.club</a>.
            </p>

            <h2 id="how-seo-actually-works-for-a-new-site-no-hacks">
              How SEO actually works for a new site (no hacks)
            </h2>
            <p>
              SEO is not a switch. It is “can a search engine find a useful
              page, understand it, and show it when someone asks a matching
              question?” A new site starts with almost no history. Anyone who
              promises page one next week is selling you a story.
            </p>
            <ol>
              <li>
                <strong>Make a page that answers a real question.</strong> This
                page exists because people type “do I need a website”.
              </li>
              <li>
                <strong>Make it crawlable.</strong> Real HTML, HTTPS, a title
                and H1 that match, internal links a person would actually click.
              </li>
              <li>
                <strong>Put the business facts where they can be reused.</strong>{" "}
                Name, area, hours, enquiry. Same details as any real Google
                Business Profile.
              </li>
              <li>
                <strong>Earn the rest slowly.</strong> Photos, a few useful
                pages, mentions from real people. Not bought links.
              </li>
              <li>
                <strong>Keep it from rotting.</strong> A light admin console and
                a small monthly habit beat a once-a-year panic.
              </li>
            </ol>
            <p>What we will not do, even if asked:</p>
            <ul>
              <li>Guarantee rankings, traffic numbers, or “#1 in Auckland”.</li>
              <li>Stuff keywords into titles, alt text, or hidden copy.</li>
              <li>Spin 40 blog posts that nobody asked for.</li>
              <li>Build private blog networks or buy link packages.</li>
              <li>
                Create a Google Business Profile for a brand with no genuine
                location or service area.
              </li>
            </ul>

            <h2 id="what-well-automate-honest">What we’ll automate (honest)</h2>
            <p>
              Automation should cut admin hours. It should not pretend to be a
              marketing department, and it should not spam.
            </p>
            <p>
              <strong>We will automate, when you ask for it:</strong> lead
              routing, follow-ups, workflow bots, owner admin, and optional
              social drafts through Brand Studio Capture.
            </p>
            <p>
              <strong>We will not automate:</strong> fake reviews, directory
              sludge, AI article farms, invented ranking reports, or a chatbot
              that blocks the enquiry form.
            </p>
            <LookCardFigure still={pillarLooks.dtc} />

            <h2 id="nz-notes-conz-enquiry-forms-google-business-profile-only-if-real">
              NZ notes (.co.nz, enquiry forms, Google Business Profile only if real)
            </h2>
            <p>
              <strong>.co.nz vs .com.</strong> A .co.nz domain tells people you
              are aiming at New Zealand. It is a clarity thing, not a ranking
              cheat code. If you already have a .com you like, keep it.
            </p>
            <p>
              <strong>Enquiry, not inquiry.</strong> On buttons, forms, and this
              page we use NZ English: enquiry, colour, organised, specialised.
            </p>
            <p>
              <strong>GST.</strong> Prices on this site are in NZD. NZ GST is
              15%. Whether a listed figure includes GST is confirmed on the
              invoice and on the call.
            </p>
            <p>
              <strong>Google Business Profile only if real.</strong> A GBP is
              for a business people can actually visit, or a genuine
              service-area business that goes to customers. We will not
              manufacture one.
            </p>
            <LookCardFigure still={pillarLooks.kitchen} />
            <p>
              <strong>Same-day sketch is NZ-clock.</strong> Book before 10:00am
              New Zealand time for a free same-day one-page draft after a 30 to
              45 minute discovery call. At or after 10am, the free sketch moves
              to the next day, or <strong>$149 NZD</strong> same-day if capacity
              allows.
            </p>
            <LookCardFigure still={pillarLooks.pet} />

            <h2 id="faq">FAQ</h2>
            <dl className="pillar-faq">
              {seoPillarFaqs.map((item) => (
                <div key={item.question}>
                  <dt>{item.question}</dt>
                  <dd>{item.answer}</dd>
                </div>
              ))}
            </dl>

            <h2 id="book-a-same-day-sketch">Book a same-day sketch</h2>
            <p>
              If you want a brand site that can actually get found, start with a
              conversation, not a blank template.
            </p>
            <ol>
              <li>
                Book before <strong>10:00am NZ</strong> on the{" "}
                <a href="/#same-day">same-day form</a>.
              </li>
              <li>
                Spend 30 to 45 minutes on discovery (what you do, who it is for,
                what “done” looks like).
              </li>
              <li>
                Get a <strong>one-page concept draft the same calendar day</strong>.
                After 10am the free sketch is next day, or $149 NZD same-day if
                we have room. GST confirmed on invoice.
              </li>
              <li>
                If you proceed to Starter or Custom within 14 days, the sketch is
                credited.
              </li>
            </ol>
            <p>
              <a className="pillar-cta" href="/#same-day">
                Book a same-day sketch
              </a>
            </p>
            <p>
              Looks cover cafes, bakeries, tradies, florists, high-street shops,
              creators, courses, and product shelves. Email{" "}
              <a href="mailto:hello@mybrandstudio.club">hello@mybrandstudio.club</a>{" "}
              if you would rather write than book.
            </p>
          </div>
        </article>
      </main>
      <SiteFooter />
      <StickyBookCta />
    </>
  );
}
