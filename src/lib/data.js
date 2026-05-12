// ─── All site content lives here ───────────────────────────────
// Edit this file to update copy, services, projects, testimonials, etc.

export const siteData = {
  company: {
    name: 'Stafco Limited',
    tagline: "Building Ghana's Future Since 1994",
    slogan: 'Your reliable partner down the road',
    phone: '+233 55 460 8569',
    phone2: '+233 24 438 0747',
    email: 'stafcoltd@yahoo.com',
    address: 'Black Park Avenue, Kantamanto, Accra',
    poBox: 'P.O. Box GP17211, Accra-Central, Ghana',
    website: 'www.stafcolimited.com',
    facebook: '#',
    linkedin: '#',
    whatsapp: '#',
  },

  hero: {
    badge: 'Est. 1994 · Ghana',
    headline: '30+ Years of Infrastructure\nThat Connects Communities',
    subheadline:
      'Stafco Limited is a premier building and road construction company headquartered in Accra, Ghana. An A2/B2, D1/K1 registered contractor committed to quality, safety, and timely delivery for government and private clients across Ghana.',
    image: '/images/Heroimage1.jpeg',
    imageAlt: 'Road construction equipment working on a new highway section',
    cta1: { label: 'View Our Projects', href: '#projects' },
    cta2: { label: 'Request Quote', href: '#contact' },
  },

  stats: [
    { value: '30+', label: 'Years of Experience' },
    { value: '30+', label: 'Projects Completed' },
    { value: 'A2/B2 · D1/K1', label: 'Govt. Registered' },
  ],

  about: {
    sectionLabel: 'Our Story',
    headline: 'Three Decades of Laying the\nFoundation for Progress',
    body: [
      "Since 1994, Stafco Limited has been a Building and Road Construction Company committed to providing quality products and services in a timely and cost-effective manner. Quality, Safety, Innovation, and Customer Satisfaction are the hallmarks of our company.",
      "We are an A2/B2 registered Construction Company with the Ministry of Roads and Highways, and D1/K1 registered with the Ministry of Works and Housing. Our public sector clients include the Government of Ghana through the Ghana Highway Authority (GHA), Department of Feeder Roads (DFR), Urban Roads, GRA, CSIR, NEWMONT (GH) LTD, GET Fund, and various District Assemblies.",
      "Our private sector clients have been residential and commercial real estate developers. We are committed to building long-lasting relationships with every organisation we work with, delivering quality construction on time and within budget.",
    ],
    quote: '"Our objective is to be the road and building contractor of choice: delivering quality service, stable employment for our people, and contributing positively to every community we operate in."',
    quoteAuthor: 'Stafco Limited',
    timeline: [
      { year: '1994', text: 'Stafco Limited founded in Accra as a premier building and roads contractor.' },
      { year: '2000s', text: 'Secured major feeder road contracts across Eastern, Central, and Volta Regions.' },
      { year: '2010s', text: 'Expanded into building projects including schools, hospitals, post offices, and residential developments.' },
      { year: '2015', text: 'Delivered landmark sanitation infrastructure project in Eastern Region.' },
      { year: '2020s', text: 'Continuing to serve the Ghana Highway Authority, GETFund, District Assemblies, and private developers.' },
      { year: '2026', text: 'Over 30 years of quality construction: roads, buildings, and sanitation across Ghana.' },
    ],
  },

  services: {
    sectionLabel: 'What We Do',
    headline: 'End-to-End Construction\nRoads, Buildings, and Infrastructure',
    subheadline: 'We handle every phase of delivery across roads, civil works, building construction, and general contracting. One contractor, full accountability.',
    items: [
      {
        icon: 'road',
        title: 'New Highways & Feeder Roads',
        desc: 'Construction of new highways and feeder roads to government specification, connecting communities across Ghana.',
      },
      {
        icon: 'wrench',
        title: 'Road Rehabilitation & Upgrading',
        desc: 'Full rehabilitation and upgrading of existing roads including blading, kerbs, culverts, base, primer seal, and seal coat.',
      },
      {
        icon: 'layers',
        title: 'Site Preparation, Grading & Paving',
        desc: 'Land clearing, levelling, grading, and paving to specification before and during construction.',
      },
      {
        icon: 'droplets',
        title: 'Drainage & Culvert Systems',
        desc: 'Construction of concrete retaining walls, U-drains, culverts, channels, and flood-mitigation structures.',
      },
      {
        icon: 'home',
        title: 'Residential & Commercial Real Estate',
        desc: 'Construction of residential homes, storey buildings, commercial properties, and community facilities from foundation to finishing.',
      },
      {
        icon: 'building',
        title: 'Public Infrastructure & Buildings',
        desc: 'Schools, hospitals, post offices, markets, dormitories, and government building projects for public institutions.',
      },
      {
        icon: 'clipboard',
        title: 'General Contracting',
        desc: 'Full project management for government and private-sector contracts. Public and private projects, on time and on budget.',
      },
      {
        icon: 'truck',
        title: 'Supply & Distribution of Materials',
        desc: 'Supply and distribution of construction materials to support project delivery across all regions.',
      },
    ],
  },

  projects: {
    sectionLabel: 'Our Work',
    headline: 'Our Work\nSpeaks for Itself',
    subheadline: 'A selection of road, building, and sanitation projects delivered across Ghana for government institutions and private clients.',
    filters: ['All', 'Roads', 'Buildings', 'Sanitation', 'Government', 'Private'],
    items: [
      {
        image: '/images/project-1.jpg',
        title: 'Rehabilitation of HweeHwee Jn.–Akwasiho Feeder Road PH.1',
        location: 'Eastern Region',
        client: 'Department of Feeder Roads, E/R',
        desc: 'Kerbs, blading, concrete U-drains, culverts, base, primer seal, and seal coat. (13.42km)',
        category: ['Government', 'Roads'],
        tag: 'Roads',
      },
      {
        image: '/images/project-2.jpg',
        title: 'Bituminous Surfacing of Fontonfrom Estate Roads',
        location: 'Dawhenya, Greater Accra',
        client: 'Prof. Joe Tufour, Accra',
        desc: 'Clearing, concrete works, sub-base, base bituminous surfacing and pavements.',
        category: ['Private', 'Roads'],
        tag: 'Roads',
      },
      {
        image: '/images/project-3.jpg',
        title: 'Drainage Works at Park, Awoshie',
        location: 'Greater Accra Region',
        client: 'Department of Urban Roads, Amasaman',
        desc: 'Construction of concrete retaining wall and U-drains.',
        category: ['Government', 'Roads'],
        tag: 'Roads',
      },
      {
        image: '/images/project-4.jpg',
        title: 'Surfacing of Praso–Bimponagya–Bimponso Feeder Road',
        location: 'Central Region',
        client: 'Department of Feeder Roads, C/R',
        desc: 'Kerbs, blading, concrete U-drains, culverts, sub-base, base, primer seal, seal coat and road furniture. (km4.50–7.50)',
        category: ['Government', 'Roads'],
        tag: 'Roads',
      },
      {
        image: '/images/project-5.jpg',
        title: 'Construction of 2-Storey Science Laboratory Complex',
        location: 'Kwahu Tafo',
        client: 'Ministry of Education',
        desc: 'Full construction of a two-storey science laboratory complex for senior high school.',
        category: ['Government', 'Buildings'],
        tag: 'Buildings',
      },
      {
        image: '/images/project-6.jpg',
        title: 'Construction of Hospital Ward & Theatre Block',
        location: 'Asamankese',
        client: 'South Akyem District Assembly',
        desc: 'Construction of hospital ward and theatre block at Asamankese Government Hospital.',
        category: ['Government', 'Buildings'],
        tag: 'Buildings',
      },
      {
        image: '/images/project-7.jpg',
        title: 'Construction of 6-Bedroom House at Spintex',
        location: 'Spintex Road, Accra',
        client: 'Dr. Ernest Ofori',
        desc: 'Construction of a six-bedroom residential house from foundation to finishing.',
        category: ['Private', 'Buildings'],
        tag: 'Buildings',
      },
      {
        image: '/images/project-8.jpg',
        title: 'Final Waste Disposal Site & Sanitary Transfer Sites',
        location: 'Maame Krobo, Eastern Region',
        client: 'Kwahu North District Assembly',
        desc: 'Clearing, landfill construction, sludge drying bed, transfer site, skip container fabrication, 800m gravel road construction.',
        category: ['Government', 'Sanitation'],
        tag: 'Sanitation',
      },
      {
        image: '/images/project-9.jpg',
        title: 'Construction and Surfacing of Oframase–Atibie Feeder Roads',
        location: 'Eastern Region',
        client: 'Department of Feeder Roads, E/R',
        desc: 'Clearing, formation, blasting, cutting, culverts, drains, stone pitching, sub-base, base, primer seal, seal coat. (9.50km)',
        category: ['Government', 'Roads'],
        tag: 'Roads',
      },
      {
        image: '/images/project-10.jpg',
        title: 'Bitumen Surface of Vakpo–Tsukpe–Botoku Feeder Road',
        location: 'Volta Region',
        client: 'Department of Feeder Roads, V/R',
        desc: 'Kerbs, blading, concrete U-drains, culverts, sub-base, base, primer seal, seal coat. (km2.9–7.8)',
        category: ['Government', 'Roads'],
        tag: 'Roads',
      },
      {
        image: '/images/project-11.jpg',
        title: 'Construction of 2-Storey Community Post Office',
        location: 'Old Tafo, Kumasi',
        client: 'Ghana Post / Ministry of Communications',
        desc: 'New construction and partial furnishing of a two-storey community post office.',
        category: ['Government', 'Buildings'],
        tag: 'Buildings',
      },
      {
        image: '/images/project-12.jpg',
        title: 'Resealing of Brekum–Dormaa Ahenkro Road',
        location: 'Brong Ahafo',
        client: 'Ghana Highway Authority',
        desc: 'Blading, primer, seal, and seal coat. (km30–35)',
        category: ['Government', 'Roads'],
        tag: 'Roads',
      },
    ],
  },

  whyUs: {
    sectionLabel: 'Why Stafco?',
    headline: 'Not Every Contractor\nHas Earned Your Trust',
    subheadline:
      "Many contractors work without documentation, without accountability, and without a track record you can verify. Stafco is different, and here is why it matters.",
    pillars: [
      {
        icon: 'calendar',
        title: '30+ Years of Proven Excellence',
        desc: 'In operation since 1994, with a long track record of completed road, building, and sanitation projects across multiple regions of Ghana.',
      },
      {
        icon: 'shield',
        title: 'A2/B2 & D1/K1 Government Registered',
        desc: 'Fully registered with the Ministry of Roads and Highways (A2/B2) and the Ministry of Works and Housing (D1/K1). Every project meets official standards.',
      },
      {
        icon: 'check',
        title: 'End-to-End Delivery',
        desc: 'From site preparation to final handover, one team with full accountability. Serving government institutions, district assemblies, and private developers.',
      },
      {
        icon: 'map',
        title: 'Nationwide Reach. Local Expertise.',
        desc: 'We have delivered projects across the Eastern, Greater Accra, Central, Volta, Brong Ahafo, and Ashanti Regions. We know the terrain.',
      },
    ],
    pullQuote: '"Quality, Safety, Innovation, and Customer Satisfaction: the four hallmarks of Stafco Limited since 1994."',
  },

  testimonials: {
    sectionLabel: 'Client Voices',
    headline: 'What Our Clients Say',
    items: [
      {
        quote:
          "Stafco delivered our feeder road rehabilitation on time, within budget, and to a standard that has held up well. The team is professional and the quality of work is outstanding.",
        name: 'District Roads Engineer',
        title: 'Department of Feeder Roads',
        company: 'Eastern Region',
      },
      {
        quote:
          "We have worked with several contractors in the region. Stafco is one of the few that truly understands what government-grade delivery means: honest, reliable, and skilled.",
        name: 'District Assembly Representative',
        title: 'Infrastructure Officer',
        company: 'South Akyem District Assembly',
      },
      {
        quote:
          "From day one, Stafco showed up prepared. Their work on our residential project was excellent: structured, professional, and finished on schedule. We will use them again.",
        name: 'Dr. Ernest Ofori',
        title: 'Private Client',
        company: 'Spintex Road, Accra',
      },
    ],
  },

  contact: {
    sectionLabel: 'Get In Touch',
    headline: "Let's Build\nTogether",
    subheadline:
      "Have a road to build, a site to prepare, or a project that needs a reliable contractor? Talk to us. We respond promptly.",
    serviceOptions: [
      'New Highways & Feeder Roads',
      'Road Rehabilitation & Upgrading',
      'Site Preparation, Grading & Paving',
      'Drainage & Culvert Systems',
      'Residential & Commercial Building',
      'Public Infrastructure & Buildings',
      'General Contracting',
      'Supply & Distribution of Materials',
      'Other',
    ],
    info: [
      { icon: '📍', label: 'Our Office', value: 'Black Park Avenue, Kantamanto, Accra' },
      { icon: '📮', label: 'Postal Address', value: 'P.O. Box GP17211, Accra-Central, Ghana' },
      { icon: '📞', label: 'Phone', value: '+233 55 460 8569 / +233 24 438 0747' },
      { icon: '✉️', label: 'Email', value: 'stafcoltd@yahoo.com' },
      { icon: '🌐', label: 'Website', value: 'www.stafcolimited.com' },
    ],
    hours: [
      { days: 'Monday – Friday', time: '8:00 AM – 5:00 PM' },
      { days: 'Saturday', time: '9:00 AM – 1:00 PM' },
      { days: 'Sunday', time: 'Closed' },
    ],
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9!2d-0.2050!3d5.5500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2e7b91d%3A0x5bface05041ca6b6!2sKantamanto%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1700000000000',
  },
};
