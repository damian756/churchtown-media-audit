/**
 * What Churchtown Media says about Institrace, in one place. The words follow Institrace's own copy
 * (lib/public-copy.ts, lib/audiences.ts, lib/services.ts, lib/pricing.ts in the institrace repo, 28 Oct 2026).
 * No live counts here: they date. The one record (SLOUGH_RECORD) is dated and quoted as Institrace showed it. The prices are the ones on institrace.co.uk/services, plus VAT; if Institrace
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
 * One record, as Institrace's own home page showed it on 11 Nov 2026 (its "The tender came 86 days later" band,
 * app/components/home/RealRecord.tsx in the institrace repo), with its sources: the council's words, the paper they are
 * in, the tender that followed, and the finding of the report it belongs to. Damian chose to show it here (11 Nov 2026).
 * It is a dated record, so it does not need refreshing.
 */
export const SLOUGH_RECORD = {
  leadDays: 86,
  quote:
    "Approve the procurement of a new end-to-end stray dog collection and kennelling service, via a formal competitive tender process, for a contract term of 3+1+1 years commencing in June 2026 with a total maximum contract value of £640,000",
  body: { name: "Slough Council", href: `${INSTITRACE_URL}/sources/slough-council` },
  paper: {
    title: "Stray dog collection and kennelling service",
    href: `${INSTITRACE_URL}/papers/stray-dog-collection-kennelling-service-cmswc95n000cg106878msw4pc`,
    page: 1,
  },
  decided: { short: "20 Apr 2026", long: "20 April 2026" },
  tender: {
    short: "15 Jul 2026",
    long: "15 July 2026",
    title: "SBC - 039154 - Stray Dogs Collection and Kennelling Service Tender",
    href: "https://www.find-tender.service.gov.uk/Notice/066919-2026",
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
