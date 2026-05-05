const CONTENT = {
  name: "Claudia Olev",
  tagline: "Minerva University · San Francisco / Tallinn",
  email: "claudia.olev@uni.minerva.edu",

  about: `I'm an undergraduate at Minerva University (Social Sciences & Natural Sciences), currently based in San Francisco. I grew up in Tallinn, Estonia, where I spent several years founding youth science and civic programs, competing in international science olympiads, and making art that got exhibited at the Estonian Academy of Arts.

I'm drawn to problems where evidence quality matters and decisions are expensive — which is why I'm currently building an automated technical due diligence platform for the biotech sector. I also tutor, write, and shoot on film.`,

  olympiads: [
    {
      title: "International Earth Science Olympiad (IESO)",
      result: "Gold & Silver medal",
      detail: "84 countries",
    },
    {
      title: "European Olympiad of Experimental Sciences (EOES)",
      result: "Silver medal",
      detail: "Estonian A team",
    },
    {
      title: "International Biology Olympiad (IBO)",
      result: "Bronze medal",
      detail: "304 participants, 76 countries",
    },
    {
      title: "International Junior Science Olympiad (IJSO)",
      result: "Bronze medal",
      detail: "67 countries",
    },
    {
      title: "Climate Science Olympiad",
      result: "Bronze medal — 27th of 50,600",
      detail: "Top 0.54% globally",
    },
    {
      title: "Estonian Biology Olympiad",
      result: "5× national first place",
      detail: "2017, 2018, 2019, 2021, 2022 — described by organizers as unprecedented. Distinctions: Best in Botanics, Best in Anatomy, Best in Theory, Best in Practica",
    },
    {
      title: "Riga–Vilnius–Tallinn–Helsinki–Västerås–St. Petersburg Olympiad",
      result: "2nd place",
      detail: "Natural sciences",
    },
  ],

  work: [
    {
      role: "Communication Manager",
      org: "Biopunk Lab (for Minerva's CCP)",
      period: "2025–2026",
      bullets: [
        "Led visual identity and accessibility framing for a public-facing redesign of a community biotech lab's site.",
        "Co-host of the Human Enhancement Hackathon (sponsors include Benchling, $6.1B valuation, and Pilgrim, $367.7M).",
      ],
    },
    {
      role: "Writing Peer Tutor",
      org: "Minerva University",
      period: "2025–2026",
      bullets: [
        "Provided writing support to fellow students, helping strengthen argumentation, structure, and clarity across academic assignments.",
      ],
    },
    {
      role: "Tutor (sciences and humanities)",
      org: "Eratunnid OÜ",
      period: "2022–2025",
      bullets: [
        "1,045+ private lessons across seven subjects to 150+ students, elementary through grade 12.",
      ],
    },
    {
      role: "Founder",
      org: "Noorte Keskkonnaühisus (Youth Environmental Association)",
      period: "2022–2023",
      bullets: [
        "Founded a youth-led organization for environmental and policy debate.",
        "Organized a policy forum for 100+ young people with scientists, NGOs, politicians, and entrepreneurs; opening remarks by Estonian Minister of the Environment Erki Savisaar.",
        "Negotiated a partnership with the City of Tallinn during its term as European Green Capital (EU-level distinction).",
        "Invited to discourse with Frans Timmermans, then Executive Vice President of the European Commission for the European Green Deal.",
        "Organization is still active.",
      ],
    },
    {
      role: "Founder & Curriculum Lead",
      org: "Noor Teadlane (Young Scientist Program)",
      period: "2019–2023",
      bullets: [
        "Built a year-long, experiment-based science program for 11–14-year-olds — a gap in Tallinn's curriculum.",
        "Co-developed a 15-class curriculum; peer-teaching model where high schoolers serve as paid instructors.",
        "Seven years on, has taught 240+ students. Program is still active.",
      ],
    },
    {
      role: "Founder",
      org: "Gustav Adolf Grammar School Peer Mentorship Program",
      period: "2021–2023",
      bullets: [
        "Connected struggling students with academically strong peers across age groups.",
        "Awarded Tallinn's "Act of Education of the Month."",
      ],
    },
    {
      role: "Student Representative — Board of Trustees, VP Student Council",
      org: "Gustav Adolf Grammar School",
      period: "2018–2020",
      bullets: [
        "Elected student representative to the school's governance body alongside city legislature representatives, parents, alumni, and teachers.",
      ],
    },
  ],

  art: [
    {
      title: "Of the Fetishization of National Heritage",
      type: "Photo series (8 photographs)",
      year: "2022–2023",
      description:
        "An 8-photo series examining how Estonian populist politicians exploit national heritage and identity. Combines Mulgi, Viru-Nigula, and Lihula folk costumes with BDSM/fetish elements, drawing on vintage Estonian family photos.",
      accolade:
        "Two-time winner of "Kasulik Kunst?!" — the only high school art competition held by the Estonian Academy of Arts. Jury: "The jury praises her for the courage to go to the border of taboos and for highlighting social problems with a clear image."",
    },
    {
      title: "The Reach",
      type: "Sculpture",
      year: "2023",
      description:
        "A work on human inability to be satisfied, referencing Goethe's Faust and the over-commodified fragment of Michelangelo's Creation of Adam. A meditation on whether we should always reach for more.",
    },
    {
      title: "The Creators of the Future",
      type: "Film photography series",
      year: "2022",
      description:
        "Portraits of young artists from different fields (music, architecture, writing, painting, photography, performance), shot on film. Each subject was interviewed about art and environmental impact before being photographed. Shot on film to illustrate resource limitation.",
    },
    {
      title: "Eesti Mälumajakad 2023",
      type: "Photography",
      year: "2023",
      description:
        "Photos taken at the Hara submarine harbour — a former USSR secret site — exploring how a broken environment tries to normalize itself. With my grandfather.",
      accolade:
        "Laureate of "Eesti Mälumajakad" (under the patronage of the Prime Minister of Estonia). Thank-you letter from Prime Minister Kaja Kallas.",
    },
    {
      title: "Eesti Mälumajakad 2024",
      type: "Photography",
      year: "2024",
      description:
        "Puise shore — a meditation on the mass deportation of Estonians, on memory and fragility, written from the limestone shore of Läänemaa.",
      accolade:
        "Laureate of "Eesti Mälumajakad." Thank-you letter from Prime Minister Kristen Michal.",
    },
  ],

  other: [
    {
      title: "Biotech due diligence platform (in progress)",
      description:
        "Building an automated technical due diligence tool for the biotech sector. Evaluates reliability and replicability of scientific evidence; integrates LLM-based extraction with live supply-chain APIs and regulatory databases to identify scalability killers early.",
    },
    {
      title: "BAFF Leadership Academy alumna",
      description:
        "Selected from ~700 applicants (10 chosen) for the Baltic-American Freedom Foundation Leadership Academy in Maine. Team won the capstone competition with a chitin-extraction business plan for the blueberry packaging industry.",
    },
    {
      title: "Noore Õpetlase Stipendium",
      description:
        "Young Scholar Scholarship, 2025. Recipients selected by international entrepreneurs including Kristo Käärmann, CEO of Wise (€10B valuation).",
    },
    {
      title: "Student Startup SuperCamp 2023",
      description:
        "Won the international university hackathon at the University of Tartu. The project — an event venue booking system — became a startup now operating in 7 countries.",
    },
    {
      title: "Volunteer — Müürileht",
      description: "Estonian cultural newspaper.",
    },
    {
      title: "Biology research thesis",
      description:
        "Identified yeast species from naturally occurring apple-associated samples in Estonia via ITS region sequencing. Supervised by Tiina Tamm, PhD, University of Tartu Institute of Molecular and Cell Biology.",
    },
    {
      title: "Languages",
      description: "Estonian (native) · English (fluent) · French (working knowledge)",
    },
  ],

  education: [
    {
      school: "Minerva University",
      detail: "Intended Majors: Social Sciences and Natural Sciences",
      period: "2025–present",
      location: "Global",
    },
    {
      school: "Institut Français de la Mode",
      detail: "Management for Creative Industries",
      period: "2024–2025",
      location: "Paris, France",
    },
    {
      school: "Gustav Adolf Grammar School",
      detail: "Mathematics-English concentration — graduated with gold medal",
      period: "2011–2023",
      location: "Tallinn, Estonia",
    },
  ],
};
