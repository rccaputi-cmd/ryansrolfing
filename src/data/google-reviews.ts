/**
 * Google reviews for Ryan's Rolfing - Folsom.
 * Collected from the Google listing on 2026-10-06: 46 reviews, 43 with text, all 5 stars.
 *
 * Quote text is verbatim. An ellipsis (…) marks omitted words.
 * Typos inside a quote are left as written.
 *
 * Pages choose which ids to show. Do not repeat a person or the same sentence on one page.
 * Chris Faamausili, Lianne Vea, and Alejandra G.Bays match restored site stories, so those
 * ids are omitted wherever those stories already appear.
 *
 * Do not add schema.org Review or AggregateRating for these quotes.
 * The testimonials page keeps the Review schema it already had.
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
  /** First name and last initial, or the name as shown when it is a single name or business. */
  attribution: string;
};

export const textReviews: GoogleReviewQuote[] = [
  { id: "jana-boccalon", attribution: "Jana B.", quote: "I’ve been sharing his info with everyone I know and especially those who are dealing with chronic pain, recovering from injuries, or looking to devote more time and energy to their overall well-being and healing." },
  { id: "laxmi-gandhi", attribution: "Laxmi G.", quote: "Ryan has been helping me with sleeping issues. In two sessions, I’ve been able to feel more at peace and truly feel protected while I sleep." },
  { id: "chris-cobabe", attribution: "Chris C.", quote: "Ryan is amazing. My body feels incredible from Rolfing. Couldn't be more happy with my experience. And he's a super cool guy with vast experience." },
  { id: "masooda-ibrahimi", attribution: "Masooda I.", quote: "Ryan made me feel comfortable, and my body felt lighter and more aligned afterward." },
  { id: "tapping-with-steph", attribution: "Tapping with Steph", quote: "I love love love having a Rolfing session with Ryan. He is intuitive, knowledgeable, and just simply talented. So grateful to know him and have him on my self-care team." },
  { id: "stephanie-shrum", attribution: "Stephanie S.", quote: "Ryan is a very skilled bodywork with incredible presence. … I used to drive an hour for his support when he was in Sacramento…" },
  { id: "johnny", attribution: "Johnny", quote: "He has helped me improve my posture and overall body mechanics. His sessions have given me more confidence in how I move and perceive the world!" },
  { id: "n-mymka", attribution: "N M.", quote: "I am experiencing changes in my body that I did not think were possible after so much trauma and so many years with the pain." },
  { id: "tommy-poirier", attribution: "Tommy P.", quote: "My back pain is now 90% gone and more importantly my physical posture has improved dramatically. … I feel like a young man again." },
  { id: "lianne-vea", attribution: "Lianne V.", quote: "Ryan is helping me to recover function from previous injuries and effects of aging.  3 sessions in and so much progress.  He is very professional and talented at what he does.  Much more than a massage or chiropractor can do for me.  Thank you, Ryan!" },
  { id: "chris-faamausili", attribution: "Chris F.", quote: "I came to Ryan with a list of about 10 things I wanted to work on with my body and signed dup for 10 sessions. During each session, Ryan went above and beyond. He took the time to explain what he was doing and how it would benefit me. I found it very relaxing with no pain or discomfort. So far, everything on my list has been improved or corrected. My body definitely feels more \"put together\" and operating like it should. He said the improvements would continue to come overtime and he was right. I highly suggest booking with Ryan and experiencing his work for yourself." },
  { id: "shilo-jama", attribution: "Shilo J.", quote: "he has helped me so much, I can’t say thank you enough" },
  { id: "david-brabender", attribution: "David B.", quote: "Ryan is amazing! He finds my problem areas and get me back on track. Thanks for all you do." },
  { id: "lauren-c", attribution: "Lauren C.", quote: "After seeing Ryan, I could feel a difference and Even my husband noticed a difference in my mood. It's now been about a week, and I still feel an overall difference in my body and alignment." },
  { id: "alejandra-gbays", attribution: "Alejandra G.", quote: "Ryan is an excellent practitioner. I was highly  referred to Ryan for chronic pain. He is professional and I feel comfortable when being worked on. I have felt relief for longer duration. Looking forward to the completion of my sessions and having a strong, healthy, joyful body.  I am grateful for his service. Thank you Ryan!" },
  { id: "nick", attribution: "Nick", quote: "Overall he's a nice guy with a very chill, agreeable and safe vibe." },
  { id: "jack-linn", attribution: "Jack L.", quote: "The experience has been truly profound. … I just finished the 7th session and sitting here I can feel a soft sense of peace throughout my body." },
  { id: "shaleen-baudin", attribution: "Shaleen B.", quote: "I felt very relaxed and at ease with him and his energy is relaxing and re assuring. After just one session I felt alot of myofascial release and tension from my body alleviated." },
  { id: "kyle-lundblom", attribution: "Kyle L.", quote: "Over the course of a few months, I went from very painful and limited mobility to the most flexibility and comfort I've had in my life." },
  { id: "casey-c", attribution: "Casey C.", quote: "From the first appointment on, each session brought substantial, often surprising improvement. … Standing straight became natural and remains so, nearly a year later." },
  { id: "armaan-nanjee", attribution: "Armaan N.", quote: "I feel a lot better in the areas of my body we have worked, including my ankle where he was able to identify why I was repeatedly getting pretty sore after activity and I have been feeling a lot better and staying healthy ever since!" },
  { id: "muddy-shoes", attribution: "Muddy Shoes", quote: "I met Ryan years ago & even back then he left an impression of integrity & presence. … Ryan is a skilled and talented practitioner." },
  { id: "gerald-christiansen", attribution: "Gerald C.", quote: "I came to Ryan to work on a foot injury and came out with a new body.  Ryan so skillfully worked my body and now I am much more flexible and stronger.  Even my trainer at the gym comments on the newness of my body." },
  { id: "poppie-tanksley", attribution: "Poppie T.", quote: "After a 90 minute session I felt better than I have in years and I slept like a baby all night long! No headache today…" },
  { id: "james-vitiello", attribution: "James V.", quote: "He provides a safe, calming atmosphere during sessions. … My chronic physical pain is almost completely gone, and I am more active again." },
  { id: "joann-de-tomasi", attribution: "JoAnn D.", quote: "I especially like that he works on the whole person, not just how the body feels, but also teaching you how to tune into your body and be present with it." },
  { id: "jay-pegany", attribution: "Jay P.", quote: "Ryan was awesome, and really helped with my first session in getting more balance, and release muscle tension" },
  { id: "hillary-oneill", attribution: "Hillary O.", quote: "I've been seeing Ryan for a little over a year and can't recommend his practice highly enough!  I go in feeling wonky and come out feeling much more grounded every time." },
  { id: "anita-arendt", attribution: "Anita A.", quote: "He helped me immensely when I recently had lower back pain and could barely get in and out of my car. The relief that I felt was terrific…" },
  { id: "carrie-hauk", attribution: "Carrie H.", quote: "Ryan was able to help me with all of my issues and my posture is 100 percent better." },
  { id: "michael-coffman", attribution: "Michael C.", quote: "I'm 28 and have struggled with back issues from sports injuries; within 10 visits of seeing Ryan, I no longer have chronic pain and muscle spasms." },
  { id: "adam-ogrady", attribution: "Adam O.", quote: "Being a former collegiate football player I have tried everything under the sun to realign my body, this is the only thing that has worked thus far." },
  { id: "halley-miglietta", attribution: "Halley M.", quote: "He has amazing knowledge of the body, and how it's all put together, and can see and address the genuine places that need attention even if the pain/discomfort manifests somewhere else." },
  { id: "matthew", attribution: "Matthew", quote: "Very happy with the results! Highly recommend." },
  { id: "allen-davis", attribution: "Allen D.", quote: "I've had four sessions with Ryan, thus far, using the recommended protocol: All I can say is, I haven't felt better in over 20 years." },
  { id: "arturo-fernandez", attribution: "Arturo F.", quote: "I have completed 10 sessions with Ryan and am astounded by the results. … I am able to do all the things I enjoy in life (grapple, lift weights, and run) with greater ease…" },
  { id: "susan-owens", attribution: "Susan O.", quote: "Ryan is great!  I highly recommend him!" },
  { id: "brian-wagner", attribution: "Brian W.", quote: "I see him once a week and in the last 3 months my daily aches and pains are minimal now." },
  { id: "jody", attribution: "Jody", quote: "Ryan is a great body worker. He is skilled and intuitive. I highly recommend him to anyone looking for deep tissue work, body realignment, and in enhancing one's physical condition." },
  { id: "judy-warburg", attribution: "Judy W.", quote: "Ryan has provided me with relief from a chronic post surgical situation.  I appreciate his skill level and persistence." },
  { id: "biffy-cotter", attribution: "Biffy C.", quote: "Ryan is truly a healer! My shoulder was tight and aching and after just one session it's healed." },
  { id: "swathy-madhukar", attribution: "Swathy M.", quote: "Ryan made me feel comfortable, kept track of my progress & also supported me with litreature/videos for home excercises.  Ryan's passion for his craft shines through his work!" },
];

const byId = new Map(textReviews.map((review) => [review.id, review]));

export function reviewsById(ids: string[]): GoogleReviewQuote[] {
  return ids.map((id) => {
    const review = byId.get(id);
    if (!review) throw new Error(`Missing Google review: ${id}`);
    return review;
  });
}

/** Shown with the three restored homepage stories (Chris F., Lianne V., Alejandra G.). */
export const homepageQuoteIds = [
  "tommy-poirier",
  "jana-boccalon",
  "johnny",
  "poppie-tanksley",
  "laxmi-gandhi",
  "kyle-lundblom",
  "michael-coffman",
  "arturo-fernandez",
  "james-vitiello",
  "n-mymka",
  "stephanie-shrum",
  "carrie-hauk",
  "hillary-oneill",
  "masooda-ibrahimi",
  "adam-ogrady",
] as const;

/** Same person as a restored testimonial card. */
export const testimonialSkipIds = ["chris-faamausili", "lianne-vea", "alejandra-gbays"] as const;

export const homepageQuotes = reviewsById([...homepageQuoteIds]);
export const testimonialQuotes = textReviews.filter((review) => !testimonialSkipIds.includes(review.id as (typeof testimonialSkipIds)[number]));
export const somaticQuotes = reviewsById(["n-mymka", "laxmi-gandhi"]);

