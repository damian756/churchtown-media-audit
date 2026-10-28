/**
 * What Churchtown Media says about Institrace, in one place. The words follow Institrace's own copy
 * (lib/public-copy.ts, lib/audiences.ts, lib/services.ts, lib/pricing.ts in the institrace repo, 28 Oct 2026).
 * No counts here: they date. The prices are the ones on institrace.co.uk/services, plus VAT; if Institrace
 * changes a price, change it here too. Everything in this file renders on the site: no em dashes.
 */

export const INSTITRACE_URL = "https://www.institrace.co.uk";
export const INSTITRACE_SERVICES_URL = `${INSTITRACE_URL}/services`;
export const INSTITRACE_PRICING_URL = `${INSTITRACE_URL}/pricing`;
export const INSTITRACE_METHODOLOGY_URL = `${INSTITRACE_URL}/methodology`;
export const INSTITRACE_CONTACT_URL = `${INSTITRACE_URL}/contact`;

/** The line Institrace uses in place of "premium". */
export const TAGLINE = "Public sector intelligence, cited to the source.";

/** What Institrace shows, as short cards. */
export const FEATURES: { title: string; text: string }[] = [
  {
    title: "New tenders",
    text: "Open notices by trade, region and buyer, including early market engagement.",
  },
  {
    title: "Approvals before tender",
    text: "The decision to buy, read from council and NHS papers before the tender notice goes out.",
  },
  {
    title: "Contracts ending",
    text: "End dates and extension options, with the incumbent named.",
  },
  {
    title: "Buyer spend",
    text: "Who each body pays, by supplier and year, from its own spend files.",
  },
  {
    title: "Supplier check",
    text: "A supplier read against the Procurement Act exclusion grounds and the published registers, line by line.",
  },
  {
    title: "Council and NHS papers",
    text: "Agendas, minutes and reports, searched in full text and cited to the page.",
  },
  {
    title: "Legal record",
    text: "Court, tribunal and ombudsman decisions about a body you follow.",
  },
  {
    title: "Named in Parliament",
    text: "Questions and speeches that name a body or a company you follow.",
  },
  {
    title: "Council land watch",
    text: "Sites declared surplus, and disposals, in councils' papers.",
  },
];

/** Who it is for. `href` is the Institrace page written for that reader. */
export const AUDIENCES: { title: string; text: string; href: string }[] = [
  {
    title: "Bid and sales teams",
    text: "New tenders, the approval in a committee paper before the tender, what each buyer pays, and when its contracts end.",
    href: `${INSTITRACE_URL}/for/suppliers`,
  },
  {
    title: "Public affairs",
    text: "Councils, NHS boards and police panels in your patch, with an alert when your issue comes up.",
    href: `${INSTITRACE_URL}/for/public-affairs`,
  },
  {
    title: "Due diligence and legal",
    text: "One record for a company number: contracts, payments, land, judgments and the papers that name it.",
    href: `${INSTITRACE_URL}/for/due-diligence`,
  },
  {
    title: "Researchers and newsrooms",
    text: "Find the paper a decision was taken in, and check the money against the body's own spend files.",
    href: `${INSTITRACE_URL}/for/researchers`,
  },
];

/** The bespoke services, as lib/services.ts in the Institrace repo lists them. */
export const SERVICES: { title: string; text: string; prices: string[] }[] = [
  {
    title: "Market snapshot",
    text: "One region and trade, or one buyer: approvals, contracts ending and who is paid, in five working days.",
    prices: ["£295, fixed"],
  },
  {
    title: "Custom reports",
    text: "A question answered from the papers, contracts and spend, with every figure cited.",
    prices: ["From £1,500"],
  },
  {
    title: "Data feeds",
    text: "Your regions and trades, synced into Salesforce, HubSpot or Dynamics, or sent daily to Power BI or Looker Studio.",
    prices: ["CRM feed: £1,500 setup, then £250 a month", "BI feed: from £250 a month"],
  },
  {
    title: "BI dashboards",
    text: "A dashboard built in your own Power BI or Looker Studio, on a feed that refreshes daily.",
    prices: ["£2,500 setup, then £250 a month"],
  },
];
