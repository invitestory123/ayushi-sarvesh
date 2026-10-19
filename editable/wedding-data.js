/**
 * wedding-data.js — Customer-facing editable data layer for ayushi-sarvesh
 * Edit this file to update couple names, tagline, dates, events, venue, and images.
 */

window.WEDDING_DATA = {
  couple: {
    bride: "Dr. Pallavi Purohit",
    groom: "Dr. Sarvesh Kumar Singh",
    tagline: "#FromOTTableToWeddingVows",
    hashtag: "#FromOTTableToWeddingVows",
    displayNames: "Dr. Pallavi & Dr. Sarvesh",
  },

  family: {
    bride: {
      name: "Dr. Pallavi Purohit",
      title: "The Bride",
      father: "Dr. Birendra Kumar Purohit",
      mother: "Dr. Sujata Hota",
      brother: "Prateek Purohit",
      sisterInLaw: "Ayushi Singh",
      portrait: "./editable/assets/bride-portrait.jpg",
    },
    groom: {
      name: "Dr. Sarvesh Kumar Singh",
      title: "The Groom",
      father: "Anil Kumar Singh",
      mother: "Late Sarswati Singh",
      portrait: "./editable/assets/groom-portrait.jpg",
    },
  },

  wedding: {
    dateLabel: "Puri, Odisha",
    weddingISO: "2026-11-28T18:30:00+05:30",
  },

  venue: {
    name: "Empires Beachfront, Puri",
    address: "New Marine Drive Road, Sipasarubali, Baliapanda, Puri, Odisha 752001",
    mapsUrl: "https://share.google/67zNSpffo3mrQLxCX",
    searchMapsUrl: "https://www.google.com/maps/search/?api=1&query=Empires+Beachfront,+Puri",
  },

  events: [
    {
      name: "Mehendi",
      day: "Day 1",
      glyph: "❁",
      date: "Day 1",
      time: "12:30 PM – 4:00 PM (with lunch)",
      venue: "Garden Area",
      dressCode: "Colourful Indo Western",
      note: "Henna, melody & delightful lunch in the garden.",
      caricature: "./editable/assets/caricature-mehendi.jpg",
    },
    {
      name: "Engagement",
      day: "Day 1",
      glyph: "💍",
      date: "Day 1",
      time: "4:30 PM – 5:30 PM (with high tea)",
      venue: "Garden Area",
      dressCode: "Pastel Indo Western",
      note: "Two rings, two hearts & sunset high tea.",
      caricature: "./editable/assets/caricature-engagement.jpg",
    },
    {
      name: "Sangeet",
      day: "Day 1",
      glyph: "✧",
      date: "Day 1",
      time: "7:30 PM onwards (dinner)",
      venue: "Kalinga Hall",
      dressCode: "Bling Indo Western",
      note: "A night of dance, music & celebratory dinner.",
      caricature: "./editable/assets/caricature-sangeet.jpg",
    },
    {
      name: "Haldi",
      day: "Day 2",
      glyph: "❋",
      date: "Day 2",
      time: "10:00 AM – 1:00 PM",
      venue: "Pool Side",
      dressCode: "Shades of Yellow Indo Western",
      note: "Sunshine, turmeric laughter & poolside splashes.",
      caricature: "./editable/assets/caricature-haldi.jpg",
    },
    {
      name: "Wedding & Reception",
      day: "Day 2",
      glyph: "☀",
      date: "Day 2",
      time: "6:30 PM onwards",
      venue: "Ground (Varmala) & Kalinga Hall (Wedding)",
      dressCode: "Traditional Indian",
      subEvents: [
        { label: "Celebration begins", time: "6:30 PM onwards", venue: "Empires Beachfront" },
        { label: "Varmala", time: "8:00 PM", venue: "Ground" },
        { label: "Wedding Ceremony", time: "10:30 PM", venue: "Kalinga Hall" },
      ],
      note: "Varmala at 8:00 PM (Ground) · Wedding at 10:30 PM (Kalinga Hall).",
      caricature: "./editable/assets/caricature-wedding.jpg",
    },
  ],

  eventDates: {
    Mehendi: "2026-11-27T12:30:00+05:30",
    Engagement: "2026-11-27T16:30:00+05:30",
    Sangeet: "2026-11-27T19:30:00+05:30",
    Haldi: "2026-11-28T10:00:00+05:30",
    "Wedding & Reception": "2026-11-28T18:30:00+05:30",
  },

  music: {
    src: "./editable/assets/bg-music.mp3",
    startTime: 23.0,
    title: "Dam Tara Dam Tara Dam-Dam (Flute Instrumental Cover)",
  },

  images: {
    couple: "./editable/assets/couple-walking.png",
    hero: "./editable/assets/hero-arch.jpg",
    ringsVignette: "./editable/assets/rings-seashell-vignette.png",
    venueMap: "./editable/assets/venue-map-puri.jpg",
    footerWash: "./editable/assets/footer-wash-DG1rtX_C.jpg",
    openerVideo: "./editable/assets/wedding-opener.mp4",
    ganeshJi: "./editable/assets/ganesh-ji.png",
    bridePortrait: "./editable/assets/bride-portrait.jpg",
    groomPortrait: "./editable/assets/groom-portrait.jpg",
  },
};
