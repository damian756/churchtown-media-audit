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

/**
 * Institrace's services, as rows of the home page's price table: lib/services.ts in the institrace repo, the CRM and BI
 * feeds on rows of their own. Prices are plus VAT; if Institrace changes a price, change it here too.
 */
export const PRICE_ROWS: { title: string; text: string; price: string }[] = [
  {
    title: "Market snapshot",
    text: "One region and trade, or one buyer: approvals, contracts ending and who is paid, in five working days",
    price: "£295, fixed",
  },
  {
    title: "Custom reports",
    text: "A question answered from the papers, contracts and spend, with every figure cited",
    price: "From £1,500",
  },
  {
    title: "CRM data feed",
    text: "Your regions and trades, synced into Salesforce, HubSpot or Dynamics",
    price: "£1,500 setup, then £250 a month",
  },
  {
    title: "BI data feed",
    text: "Your regions and trades, sent daily to Power BI or Looker Studio",
    price: "From £250 a month",
  },
  {
    title: "BI dashboards",
    text: "A dashboard built in your own Power BI or Looker Studio, on a feed that refreshes daily",
    price: "£2,500 setup, then £250 a month",
  },
];
