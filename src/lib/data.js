// ─── All site content lives here ───────────────────────────────
// Edit this file to update copy, services, projects, testimonials, etc.

export const siteData = {
  company: {
    name: 'Stafco Limited',
    tagline: "Building Ghana's Future Since 2004",
    phone: '+233 20 000 0000',
    email: 'info@stafcolimited.com',
    address: 'Accra, Greater Accra Region, Ghana',
    facebook: '#',
    linkedin: '#',
    whatsapp: '#',
  },

  hero: {
    badge: 'Est. 2004 · Accra, Ghana',
    headline: '20 Years of Roads\nThat Connect Ghana',
    subheadline:
      'From bush tracks to government highways — Stafco Limited has been the quiet force behind Ghana\'s most critical infrastructure for over two decades. We build roads that last.',
    cta1: { label: 'View Our Projects', href: '#projects' },
    cta2: { label: 'Request a Quote', href: '#contact' },
  },

  stats: [
    { value: '20+', label: 'Years of Experience' },
    { value: '100+', label: 'Projects Completed' },
    { value: 'Govt.', label: 'Certified & Licensed' },
    { value: 'Both', label: 'Public & Private Contracts' },
  ],

  about: {
    sectionLabel: 'Our Story',
    headline: 'Two Decades of Laying the\nFoundation for Progress',
    body: [
      "In 2004, Stafco Limited was founded with one purpose: to build infrastructure that Ghana deserves. Not quick roads that crack in the first rainy season. Not paperwork without craftsmanship. Real roads. Built right. Built to last.",
      "Over the years, we have delivered road construction, site preparation, earthworks, drainage systems, and civil structures for government agencies and private developers across the country. Each project we take on is a commitment — to communities, to clients, and to the nation.",
      "We are Ghanaian. We understand this soil, this rain, and the weight of every kilometre that connects a farmer to a market, a child to a school, and a nation to its future.",
    ],
    quote: '"A road is not just asphalt — it is a promise to every community it touches."',
    quoteAuthor: '— Founder, Stafco Limited',
    timeline: [
      { year: '2004', text: 'Company founded in Accra with a first government road contract.' },
      { year: '2008', text: 'Expanded into earthworks and site preparation services.' },
      { year: '2012', text: 'Secured first multi-year government highway rehabilitation contract.' },
      { year: '2016', text: 'Launched private-sector division — industrial sites, estates, commercial access roads.' },
      { year: '2020', text: 'Completed landmark drainage and culvert project in the Greater Accra Region.' },
      { year: '2024', text: 'Celebrating 20 years — and building the next chapter of Ghana\'s roads.' },
    ],
  },

  services: {
    sectionLabel: 'What We Do',
    headline: 'End-to-End Construction,\nFrom Ground to Road',
    subheadline: 'We handle every phase of a project — before the road and after. One contractor, full accountability.',
    items: [
      {
        icon: 'road',
        title: 'Road Construction & Rehabilitation',
        desc: 'New road construction and full rehabilitation of existing roads — urban, rural, and highway-grade.',
      },
      {
        icon: 'layers',
        title: 'Site Preparation & Grading',
        desc: 'Land clearing, levelling, and grading to specification before any construction begins.',
      },
      {
        icon: 'shovel',
        title: 'Earthworks & Excavation',
        desc: 'Large-scale earthmoving, cut and fill operations, embankments, and sub-base formation.',
      },
      {
        icon: 'droplets',
        title: 'Drainage & Culvert Systems',
        desc: 'Storm drainage design and installation, culverts, channels, and flood-mitigation structures.',
      },
      {
        icon: 'bridge',
        title: 'Bridge & Structure Works',
        desc: 'Construction and rehabilitation of bridges, box culverts, retaining walls, and concrete structures.',
      },
      {
        icon: 'clipboard',
        title: 'Contract Management',
        desc: 'Full project management for government and private-sector infrastructure contracts — on time, on budget.',
      },
    ],
  },

  projects: {
    sectionLabel: 'Our Work',
    headline: 'Our Work\nSpeaks for Itself',
    subheadline: 'A selection of projects delivered across Ghana — government and private, roads and structures.',
    filters: ['All', 'Government', 'Private', 'Roads', 'Structures'],
    items: [
      {
        image: '/images/project-1.jpg',
        title: 'Accra Ring Road Rehabilitation',
        location: 'Greater Accra',
        year: '2022',
        category: ['Government', 'Roads'],
        tag: 'Government',
      },
      {
        image: '/images/project-2.jpg',
        title: 'Industrial Estate Access Roads',
        location: 'Tema, Greater Accra',
        year: '2021',
        category: ['Private', 'Roads'],
        tag: 'Private',
      },
      {
        image: '/images/project-3.jpg',
        title: 'Drainage & Culvert System',
        location: 'Eastern Region',
        year: '2020',
        category: ['Government', 'Structures'],
        tag: 'Government',
      },
      {
        image: '/images/project-4.jpg',
        title: 'Highway Earthworks & Grading',
        location: 'Ashanti Region',
        year: '2019',
        category: ['Government', 'Roads'],
        tag: 'Government',
      },
      {
        image: '/images/project-5.jpg',
        title: 'Private Estate Road Network',
        location: 'East Legon, Accra',
        year: '2023',
        category: ['Private', 'Roads'],
        tag: 'Private',
      },
      {
        image: '/images/project-6.jpg',
        title: 'Bridge Rehabilitation',
        location: 'Volta Region',
        year: '2018',
        category: ['Government', 'Structures'],
        tag: 'Government',
      },
    ],
  },

  whyUs: {
    sectionLabel: 'Why Stafco?',
    headline: 'Not Every Contractor\nHas Earned Your Trust',
    subheadline:
      "Many road contractors work without documentation, without accountability, and without a track record you can verify. Stafco is different — and here's why it matters.",
    pillars: [
      {
        icon: 'calendar',
        title: '20 Years of Proven Excellence',
        desc: 'Two decades of completed projects across Ghana. Our record is not a promise — it is history.',
      },
      {
        icon: 'shield',
        title: 'Licensed & Government Certified',
        desc: 'Fully licensed for government and private contracts. Every project meets Ghana Standards Authority requirements.',
      },
      {
        icon: 'check',
        title: 'End-to-End Delivery',
        desc: 'From feasibility to final handover — one team, full accountability. No subcontracting your trust.',
      },
      {
        icon: 'map',
        title: 'Local Knowledge. World-Class Standards.',
        desc: 'We know Ghana\'s terrain, climate, and communities. We build roads that survive our seasons and serve our people.',
      },
    ],
    pullQuote: '"In 20 years, we have never left a project unfinished. That is our standard — and that is our promise."',
  },

  testimonials: {
    sectionLabel: 'Client Voices',
    headline: 'What Our Clients Say',
    items: [
      {
        quote:
          "Stafco delivered our access road on time, within budget, and to a standard we didn't expect. The team is professional and the quality of work is outstanding.",
        name: 'Kofi Mensah',
        title: 'Project Director',
        company: 'GoldCoast Developers Ltd.',
      },
      {
        quote:
          "We have worked with several road contractors in Ghana. Stafco is the only one that truly understands what government-grade delivery means. Honest, reliable, and skilled.",
        name: 'Ama Owusu',
        title: 'Infrastructure Officer',
        company: 'Ghana Roads Authority (Client Rep)',
      },
      {
        quote:
          "From day one, Stafco showed up prepared. Their site preparation work for our industrial complex was flawless. We will be using them for every future project.",
        name: 'Emmanuel Darko',
        title: 'CEO',
        company: 'Darko Industrial Group',
      },
    ],
  },

  contact: {
    sectionLabel: 'Get In Touch',
    headline: "Let's Build\nTogether",
    subheadline:
      "Have a road to build, a site to prepare, or a project that needs a reliable contractor? Talk to us. We respond within 24 hours.",
    serviceOptions: [
      'Road Construction & Rehabilitation',
      'Site Preparation & Grading',
      'Earthworks & Excavation',
      'Drainage & Culvert Systems',
      'Bridge & Structure Works',
      'Contract Management',
      'Other',
    ],
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127522.38433413!2d-0.2661028!3d5.6036896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2e7b91d%3A0x5bface05041ca6b6!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1700000000000',
  },
};
