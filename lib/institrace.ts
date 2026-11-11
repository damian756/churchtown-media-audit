/**
 * What Churchtown Media says about Institrace, in one place. The words follow Institrace's own copy
 * (lib/public-copy.ts, lib/audiences.ts, lib/services.ts, lib/pricing.ts in the institrace repo, 28 Oct 2026).
 * No live counts here: they date. The one record (HOME_RECORD) is dated and quoted as Institrace shows it. The prices are the ones on institrace.co.uk/services, plus VAT; if Institrace
 * changes a price, change it here too. Everything in this file renders on the site: no em dashes.
 */

export const INSTITRACE_URL = "https://www.institrace.co.uk";
export const INSTITRACE_SERVICES_URL = `${INSTITRACE_URL}/services`;
export const INSTITRACE_PRICING_URL = `${INSTITRACE_URL}/pricing`;
export const INSTITRACE_METHODOLOGY_URL = `${INSTITRACE_URL}/methodology`;
export const INSTITRACE_CONTACT_URL = `${INSTITRACE_URL}/contact`;

/** When Institrace launched (Damian, 11 Nov 2026). */
export const INSTITRACE_LAUNCHED = "October 2026";

/**
 * One record, the one Institrace's own home page shows from 11 Nov 2026 (its "The tender came 55 days later" band,
 * app/components/home/RealRecord.tsx in the institrace repo, which since that day takes a works or technology
 * procurement first), with its sources: the council's words, the paper they are in, the tender that followed, and the
 * finding of the report it belongs to. Read and checked on 11 Nov 2026: the words are on page 170 of the paper's stored
 * text (Blackburn with Darwen's Executive Board reports pack, 12 March 2026), and Find a Tender's notice 041621-2026 of
 * 6 May 2026 is the same framework (the same title, four lots, £50,000,000). Damian chose to show a record here, and on
 * 11 Nov 2026 asked for construction or IT ("can we stick with construction or IT or tech for these please"); it
 * replaced Slough's stray dog service. It is a dated record, so it does not need refreshing.
 *
 * The council's name is written as the council writes it; Institrace's band prints its stored name.
 */
export const HOME_RECORD = {
  leadDays: 55,
  /** The card's title: what the paper approves, in its own words. */
  title: "Surfacing and Civils Framework Agreement",
  /** After the council's name under the title: the value and the term, as the quote states them. */
  summary: "an estimated £50 million over up to 4 years",
  quote:
    "Approve the procurement strategy to establish a new Surfacing and Civils Framework Agreement for a period of 2 years with options to extend for a further 2 x 12 months (maximum total term of 4 years), with an estimated total value of £50 million",
  body: { name: "Blackburn with Darwen Council", href: `${INSTITRACE_URL}/sources/blackburn-with-darwen-council` },
  paper: {
    title: "Agenda reports pack",
    href: `${INSTITRACE_URL}/papers/agenda-reports-pack-cmsvx9tnt00srpo68a6he6vxt`,
    page: 170,
  },
  decided: { short: "12 Mar 2026", long: "12 March 2026" },
  tender: {
    short: "6 May 2026",
    long: "6 May 2026",
    title: "BwDBC Surfacing and Civils Framework 2026",
    /** The notice's number on Find a Tender, as the card's sources name it. */
    ref: "041621-2026",
    href: "https://www.find-tender.service.gov.uk/Notice/041621-2026",
  },
  report: { title: "Approved before tender", href: `${INSTITRACE_URL}/reports/approved-before-tender` },
  finding:
    "92 of 347 council approvals to procure had reached a tender notice; for those, the notice came a median 82 days after the paper, and half between 49 and 140 days.",
} as const;

/** The line Institrace uses in place of "premium". */
export const TAGLINE = "Public sector intelligence, cited to the source.";

export const INSTITRACE_SIGNUP_URL = `${INSTITRACE_URL}/signup?plan=researcher`;
export const INSTITRACE_SETUP_URL = `${INSTITRACE_URL}/setup`;

/**
 * The Institrace seat, as institrace.co.uk/pricing states it (read 11 Nov 2026; lib/pricing.ts in the institrace repo).
 * Founding prices for sign-ups before 31 December 2026, kept while subscribed; the standard prices from 1 January 2027.
 * seatTerms() picks by the UK day, so the home page changes over by itself (it is regenerated hourly).
 */
export const SEAT = {
  trialDays: 14,
  foundingUntil: "2026-12-31",
  founding: { individual: 29, team: 25 },
  standard: { individual: 99, team: 85 },
  standardFromWords: "1 January 2027",
  foundingUntilWords: "31 December 2026",
} as const;

/** Today in the UK, as YYYY-MM-DD. */
export function ukToday(now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/** The seat's price and terms for the day: the founding price to 31 December 2026, the standard price after. */
export function seatTerms(now: Date = new Date()): {
  founding: boolean;
  individual: number;
  team: number;
  terms: string;
} {
  const founding = ukToday(now) <= SEAT.foundingUntil;
  const p = founding ? SEAT.founding : SEAT.standard;
  return {
    founding,
    individual: p.individual,
    team: p.team,
    terms: founding
      ? `${SEAT.trialDays} days free, no card. These are founding prices for sign-ups before ${SEAT.foundingUntilWords}, kept while you stay subscribed; £${SEAT.standard.individual} a month from ${SEAT.standardFromWords}.`
      : `${SEAT.trialDays} days free, no card. Cancel at any time.`,
  };
}

/**
 * Set-up by hand, as institrace.co.uk/setup and /pricing state it (read 11 Nov 2026): £295 once, plus VAT, free for the
 * first ten firms that pay three months or more up front. The count of places left is not printed here: it changes.
 */
export const SETUP = {
  price: 295,
  freeTerms: "Free for the first ten firms that pay three months or more up front.",
} as const;

/**
 * Institrace's other services, as the compact list under the two offers: the words and prices of institrace.co.uk/pricing
 * (read 11 Nov 2026; lib/services.ts in the institrace repo). Prices are plus VAT; if Institrace changes one, change it here.
 */
export const PRICE_ROWS: { title: string; text: string; price: string }[] = [
  {
    title: "Market snapshot",
    text: "One region and trade, or one buyer, in five working days",
    price: "£295, fixed",
  },
  {
    title: "Custom reports",
    text: "A question about your market, answered from the papers, contracts and spend",
    price: "From £1,500",
  },
  {
    title: "CRM feed",
    text: "Approvals, contracts and buyer spend, synced into Salesforce, HubSpot or Dynamics",
    price: "£1,500 setup, then £250 a month",
  },
  {
    title: "BI feed",
    text: "The same records as a daily feed for Power BI, Looker Studio or your own warehouse",
    price: "From £250 a month",
  },
  {
    title: "BI dashboards",
    text: "Built in your own Power BI or Looker Studio, on a feed that refreshes daily",
    price: "£2,500 setup, then £250 a month",
  },
];
