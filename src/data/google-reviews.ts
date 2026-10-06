/**
 * Google reviews for Ryan's Rolfing - Folsom.
 * Collected from the Google Business Profile on 2026-10-06.
 *
 * Update `rating`, `reviewCount`, `url`, and the quote lists together.
 * Quote text is verbatim. Shorten only with an ellipsis (…) — never reword,
 * and trim around typos instead of correcting them.
 *
 * Do not add schema.org Review or AggregateRating for this business.
 * Google disallows self-serving review snippets on a business's own site.
 */

export const googleReviews = {
  listingName: "Ryan's Rolfing - Folsom",
  rating: 5.0,
  reviewCount: 46,
  url: "https://www.google.com/maps/place/Ryan's+Rolfing+-+Folsom/@38.657029,-121.1865344,17z/data=!3m1!4b1!4m6!3m5!1s0x809ad0c104a78801:0x25ef718249eedac7!8m2!3d38.657029!4d-121.1865344!16s%2Fg%2F11dybrcm0z",
  collectedOn: "2026-10-06",
} as const;

export type GoogleReviewQuote = {
  id: string;
  /** Verbatim excerpt. An ellipsis (…) marks omitted words. */
  quote: string;
  /** First name and last initial, as displayed on Google. */
  attribution: string;
};

export const homepageQuotes: GoogleReviewQuote[] = [
  {
    id: "tommy-poirier",
    quote:
      "My back pain is now 90% gone and more importantly my physical posture has improved dramatically. … I feel like a young man again.",
    attribution: "Tommy P.",
  },
  {
    id: "chris-faamausili",
    quote:
      "I came to Ryan with a list of about 10 things I wanted to work on with my body… So far, everything on my list has been improved or corrected. My body definitely feels more \"put together\" and operating like it should.",
    attribution: "Chris F.",
  },
  {
    id: "jana-boccalon",
    quote:
      "I’ve been sharing his info with everyone I know and especially those who are dealing with chronic pain, recovering from injuries, or looking to devote more time and energy to their overall well-being and healing.",
    attribution: "Jana B.",
  },
  {
    id: "johnny",
    quote:
      "He has helped me improve my posture and overall body mechanics. His sessions have given me more confidence in how I move and perceive the world!",
    attribution: "Johnny",
  },
  {
    id: "masooda-ibrahimi",
    quote: "Ryan made me feel comfortable, and my body felt lighter and more aligned afterward.",
    attribution: "Masooda I.",
  },
  {
    id: "stephanie-shrum",
    quote:
      "Ryan is a very skilled bodywork with incredible presence. … I used to drive an hour for his support when he was in Sacramento…",
    attribution: "Stephanie S.",
  },
];

/** Nearby themes only. These reviews do not name Somatic Experiencing. */
export const somaticQuotes: GoogleReviewQuote[] = [
  {
    id: "n-mymka",
    quote:
      "I am experiencing changes in my body that I did not think were possible after so much trauma and so many years with the pain.",
    attribution: "N M.",
  },
  {
    id: "laxmi-gandhi",
    quote:
      "Ryan has been helping me with sleeping issues. In two sessions, I’ve been able to feel more at peace and truly feel protected while I sleep.",
    attribution: "Laxmi G.",
  },
];
