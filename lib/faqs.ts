export type Faq = { question: string; answer: string };

export function faqPageSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export const HOME_FAQS: Faq[] = [
  {
    question: "What areas do you serve in and around Kochi?",
    answer:
      "One End Solution serves Kochi, Ernakulam, and the surrounding areas across Kerala, including Vytilla, Kakkanad, Edappally, Kaloor, Panampilly Nagar, and Thrippunithura. We're centrally located in Vytilla, which lets us reach most parts of the city within the same day.",
  },
  {
    question: "How do I book a cleaning service with One End Solution?",
    answer:
      "You can book in under 60 seconds by messaging us on WhatsApp at +91 70343 79 777, calling us directly, or filling out the contact form on this website. We'll confirm your slot, scope the job, and share a free estimate before any work begins.",
  },
  {
    question: "What is included in a deep cleaning service?",
    answer:
      "Deep cleaning covers floor-to-ceiling cleaning of every room — kitchens, bathrooms, living areas, and bedrooms — including hard-to-reach spots like ceiling corners, behind appliances, window tracks, and skirting. It goes well beyond routine dusting and mopping to remove built-up grime, grease, and allergens.",
  },
  {
    question: "How long does a typical deep cleaning take?",
    answer:
      "Most homes take between 3 to 8 hours depending on size and condition, while a standard office or showroom typically takes 4 to 10 hours. We'll give you a precise time estimate once we understand your space during booking.",
  },
  {
    question: "Are your cleaning products safe for children and pets?",
    answer:
      "Yes, we prioritize eco-friendly, non-toxic cleaning agents that are safe for households with children and pets. If you have specific allergy concerns or product preferences, let us know when booking and we'll tailor our supplies accordingly.",
  },
  {
    question: "Do I need to provide cleaning equipment or supplies?",
    answer:
      "No, our team arrives fully equipped with professional-grade cleaning tools, machines, and eco-friendly products. You don't need to arrange anything — just point us to the areas that need attention.",
  },
  {
    question: "How much does deep cleaning cost in Kochi?",
    answer:
      "Pricing depends on the size of the space, the level of cleaning required, and any specialized services like carpet shampooing or water tank cleaning. We offer easy, affordable service costs with transparent quotes — contact us on WhatsApp for a free, no-obligation estimate.",
  },
  {
    question: "Is One End Solution insured and are staff background-verified?",
    answer:
      "Yes, all our cleaning staff are trained, certified, and vetted before deployment. We also manage full employee welfare — ESI, EPF, LWF, bonus, and leave — which reflects in the professionalism and accountability of our team.",
  },
  {
    question: "Can I book a one-time cleaning or only recurring plans?",
    answer:
      "Both options are available. You can book a single deep cleaning session for a one-off need like a festival or move-in, or set up a recurring residential or commercial cleaning plan on a weekly, bi-monthly, or monthly basis.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We offer easy and cashless payment options for your convenience, in addition to standard payment methods. Payment details are confirmed with you before the service, so there are no surprises afterward.",
  },
  {
    question: "Do you offer both residential and commercial cleaning?",
    answer:
      "Yes, we specialize in both. Our residential services cover homes, flats, and villas, while our commercial division handles offices, showrooms, banks, hospitals, malls, and auditoriums across Kerala.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "For standard deep cleaning, booking 1-2 days in advance is usually enough to secure your preferred slot. For urgent needs, reach out on WhatsApp — we do our best to accommodate same-day or next-day requests wherever possible.",
  },
  {
    question: "What if I'm not satisfied with the cleaning?",
    answer:
      "Customer satisfaction is central to our service guarantee. If any area doesn't meet our quality standard, let our team know before they leave and we'll address it on the spot at no extra cost.",
  },
  {
    question: "Do you provide cleaning staff for daily housekeeping?",
    answer:
      "Yes, beyond one-time deep cleaning, we offer housekeeping, maintenance, and supporting staff for homes and businesses that need ongoing daily or weekly upkeep, not just periodic deep cleans.",
  },
  {
    question: "What safety measures do you follow during cleaning?",
    answer:
      "Our teams follow standard safety protocols including proper handling of cleaning chemicals, use of protective equipment for tasks like water tank or high-area cleaning, and care around electronics and fragile items in your space.",
  },
  {
    question: "Can you handle urgent/same-day cleaning requests?",
    answer:
      "We try our best to accommodate urgent requests, especially for pre-event, pre-inauguration, or emergency spill situations. Message us on WhatsApp with your requirement and timeline and we'll confirm availability quickly.",
  },
  {
    question: "Do you offer AMC (annual maintenance contracts)?",
    answer:
      "Yes, we offer annual maintenance contracts for both residential societies and commercial establishments that need consistent, scheduled cleaning and upkeep throughout the year at predictable costs.",
  },
  {
    question: "What other services do you offer besides cleaning?",
    answer:
      "Beyond cleaning, we provide repairs and maintenance, disinfection and fumigation, pest control, A/C repairing, painting, water proofing, signage cleaning and repair, and caretaker services — making us a one-stop facility management partner.",
  },
  {
    question: "How experienced is your cleaning team?",
    answer:
      "One End Solution brings over two decades of dynamic experience in facility management. Our technical staff and technicians are trained and experienced in delivering consistently high-quality cleaning outcomes across both homes and businesses.",
  },
  {
    question: "How can I contact you for a free estimate?",
    answer:
      "The fastest way is WhatsApp at +91 70343 79 777 — just describe your space and requirement and we'll respond with a free estimate. You can also call us or use the contact form on this website.",
  },
];

export const RESIDENTIAL_FAQS: Faq[] = [
  {
    question: "What does a residential deep cleaning include?",
    answer:
      "Residential deep cleaning covers your entire home floor-to-ceiling — kitchens, bathrooms, bedrooms, and living spaces — including washroom floors, common floors, courtyards, and often-missed spots like behind furniture and appliances, ceiling fans, and window tracks.",
  },
  {
    question: "How often should I get my home deep cleaned in Kerala's climate?",
    answer:
      "Given Kerala's humidity and monsoon exposure, we recommend deep cleaning every 2-3 months, with more frequent bathroom and kitchen attention to prevent mold and mildew buildup. Regular cleaning between deep cleans helps maintain the results.",
  },
  {
    question: "Do you clean apartments/flats as well as independent houses?",
    answer:
      "Yes, we regularly service flats and apartments across Ernakulam as well as independent houses and villas. Our team adapts the approach based on your home's layout, whether it's a compact flat or a multi-floor house.",
  },
  {
    question: "Can you remove tough stains from sofas and carpets?",
    answer:
      "Yes, our professional upholstery and carpet cleaning uses shampoo cleaning techniques that lift dirt, allergens, and set-in stains without damaging fabric. This rejuvenates furnishings that regular vacuuming can't fully refresh.",
  },
  {
    question: "How do you handle mold and mildew in bathrooms?",
    answer:
      "We use targeted deep cleaning techniques and appropriate agents to break down mold and mildew at the source, particularly in grout lines, corners, and areas with poor ventilation — a common issue in Kochi's humid environment.",
  },
  {
    question: "Do you offer move-in/move-out cleaning?",
    answer:
      "Yes, we provide thorough move-in and move-out cleaning to ensure a newly renovated, previously occupied, or vacant home is spotless and hygienic before you settle in or hand it over.",
  },
  {
    question: "How long does home deep cleaning take for a 3BHK?",
    answer:
      "A typical 3BHK apartment takes roughly 5 to 7 hours for a full deep clean, depending on current condition and any add-ons like carpet or sofa shampooing. We'll confirm exact timing when we assess your home.",
  },
  {
    question: "Will the same cleaners come every time?",
    answer:
      "For recurring plans, we aim to assign a consistent team so they become familiar with your home's specific needs and preferences, backed by our larger trained workforce for flexibility.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "It's not mandatory, but we recommend being present for the first session to walk our team through your preferences. For recurring clients, many customers provide access and let our vetted, trained staff work independently.",
  },
  {
    question: "What is the difference between regular cleaning and deep cleaning?",
    answer:
      "Regular cleaning covers surface-level tidying like dusting, mopping, and sweeping, while deep cleaning goes further — targeting grime buildup, hard-to-reach corners, appliance interiors, and areas not covered in routine upkeep.",
  },
  {
    question: "Can you clean kitchen chimneys and exhaust fans?",
    answer:
      "Yes, kitchen deep cleaning includes degreasing chimneys, exhaust fans, and stovetop areas where oil and grime accumulate most, which is especially important for kitchens used daily.",
  },
  {
    question: "Do you offer water tank cleaning for homes?",
    answer:
      "Yes, water tank cleaning is one of our core residential services, ensuring your household water supply stays free from sediment, algae, and contaminants — important given Kerala's water quality concerns.",
  },
  {
    question: "Is post-renovation cleaning available?",
    answer:
      "Yes, our post-renovation and post-construction cleaning removes construction dust, paint splatter, and debris so your newly renovated space is truly move-in ready, not just visually clean.",
  },
  {
    question: "Do you clean balconies and courtyards?",
    answer:
      "Yes, our residential cleaning scope extends to balconies, courtyards, and common outdoor areas attached to your home, which often accumulate dust, leaves, and monsoon grime.",
  },
  {
    question: "Can you handle pest control along with cleaning?",
    answer:
      "Yes, we offer pest control services in Kochi alongside deep cleaning, since the two work best together — a clean space is naturally more resistant to pest infestations.",
  },
  {
    question: "What products do you use for wooden furniture?",
    answer:
      "We use gentle, appropriate cleaning agents suited to wood finishes to clean without stripping polish or causing damage, ensuring your furniture is refreshed rather than degraded over repeated cleanings.",
  },
  {
    question: "Do you offer curtain and blinds cleaning?",
    answer:
      "Yes, blinds and curtains cleaning is part of our residential service list, addressing dust and allergens that accumulate in fabric and slats but are often overlooked in routine cleaning.",
  },
  {
    question: "How do I prepare my home before the cleaning team arrives?",
    answer:
      "Simply clear away valuables and clutter from surfaces you'd like cleaned, and point out any specific areas of concern. Our team will bring all necessary equipment and eco-friendly products.",
  },
  {
    question: "Can I customize which rooms get cleaned?",
    answer:
      "Absolutely — our professional cleaning system is designed around your specific needs and budget, so you can choose a whole-home deep clean or focus on particular rooms like kitchens and bathrooms.",
  },
  {
    question: "Do you offer monthly/bi-monthly residential cleaning plans?",
    answer:
      "Yes, we offer customized regular cleaning plans from bi-monthly to monthly schedules, helping you maintain a consistently clean and comfortable home throughout the year without booking each time separately.",
  },
];

export const COMMERCIAL_FAQS: Faq[] = [
  {
    question: "What types of commercial spaces do you clean?",
    answer:
      "We clean offices, corporate hubs, banks, showrooms, retail shops, hospitals, malls, auditoriums, and theatres across Kerala. Our commercial cleaning plans are tailored to the specific demands of each business type.",
  },
  {
    question: "Do you offer after-hours or weekend office cleaning?",
    answer:
      "Yes, we schedule commercial cleaning around your business hours, including evenings and weekends, so operations aren't disrupted and your space is ready before staff and customers arrive.",
  },
  {
    question: "Can you handle large-scale spaces like malls and auditoriums?",
    answer:
      "Yes, our team is equipped to handle large commercial spaces including malls, business centers, and auditoriums, covering everything from seats and aisles to stages and common areas for events.",
  },
  {
    question: "Do you provide daily housekeeping staff for offices?",
    answer:
      "Yes, beyond periodic deep cleaning, we provide daily, weekly, or monthly office cleaning staff depending on your requirement, so your workspace stays consistently presentable.",
  },
  {
    question: "How do you ensure minimal disruption to business operations?",
    answer:
      "We schedule cleaning during low-traffic hours or after business hours whenever possible, and our trained teams work efficiently and discreetly to avoid interfering with your day-to-day operations.",
  },
  {
    question: "Do you offer contracts/AMC for offices?",
    answer:
      "Yes, we offer annual maintenance contracts for offices and commercial establishments, giving you predictable scheduling and pricing for ongoing cleaning and facility upkeep throughout the year.",
  },
  {
    question: "Can you clean showrooms before a launch event?",
    answer:
      "Yes, pre-inauguration cleaning for showrooms and offices is one of our specialties, ensuring your space makes the right first impression on opening day.",
  },
  {
    question: "Do you handle post-construction cleaning for commercial buildings?",
    answer:
      "Yes, we provide thorough post-construction cleaning for commercial buildings, removing construction dust, debris, and residue so the space is genuinely ready for occupancy or handover.",
  },
  {
    question: "What is included in office deep cleaning?",
    answer:
      "Office deep cleaning covers workstations, communal areas, floors, glass surfaces, washrooms, and pantry areas, addressing both everyday wear and the buildup that routine cleaning misses.",
  },
  {
    question: "Do you provide sanitization and disinfection services?",
    answer:
      "Yes, disinfection, sanitizing, and fumigation are core parts of our commercial offering, helping maintain a hygienic environment for employees, clients, and visitors.",
  },
  {
    question: "Can you clean high-rise building facades and exteriors?",
    answer:
      "Yes, our building cleaning services cover a complete top-to-bottom approach including the façade and exterior, helping maintain both the aesthetics and longevity of your property.",
  },
  {
    question: "Do you offer water tank cleaning for commercial complexes?",
    answer:
      "Yes, water tank cleaning is available for commercial and residential complexes alike, ensuring safe water supply for employees, tenants, and visitors in line with hygiene standards.",
  },
  {
    question: "How do you train your commercial cleaning staff?",
    answer:
      "Our technical staff and technicians undergo structured training in modern cleaning methods and equipment handling, and we manage employee welfare (ESI, EPF, LWF, bonus, leave) to maintain a stable, accountable workforce.",
  },
  {
    question: "Can you accommodate custom cleaning schedules for banks/hospitals?",
    answer:
      "Yes, we understand banks, hospitals, and similarly sensitive environments have unique operational and hygiene requirements, and we build custom schedules and protocols around those needs.",
  },
  {
    question: "Do you provide cleaning equipment/manpower on a contract basis?",
    answer:
      "Yes, we can supply trained manpower along with modern cleaning equipment on a contract basis, so businesses don't need to invest in or manage their own cleaning infrastructure.",
  },
  {
    question: "What eco-friendly practices do you follow for commercial cleaning?",
    answer:
      "We prioritize eco-friendly cleaning products and sustainable methods across our commercial services, balancing thorough results with reduced environmental impact and safer indoor air quality.",
  },
  {
    question: "Can you clean carpets and upholstery in office spaces?",
    answer:
      "Yes, carpet and sofa shampoo cleaning is available for commercial spaces such as offices, lobbies, and reception areas where upholstery sees heavy daily use.",
  },
  {
    question: "Do you offer emergency cleaning for spills or incidents?",
    answer:
      "Yes, we accommodate urgent cleaning requests for spills, incidents, or unexpected events — reach out on WhatsApp and we'll assess availability for a rapid response.",
  },
  {
    question: "How do you price commercial cleaning contracts?",
    answer:
      "Commercial pricing depends on the size of the space, frequency of service, and specific requirements like sanitization or facade cleaning. Contact us for a customized, transparent quote after a brief scope discussion.",
  },
  {
    question: "How can a business request a quote or site visit?",
    answer:
      "Message us on WhatsApp at +91 70343 79 777 or use the contact form on this website with your business details, and we'll arrange a site visit or provide a free estimate promptly.",
  },
];
