// Swasthya Community Health - Illustrative Data Models
// Notice: All data is illustrative and designed for demonstration of community workflow concepts.
// Does not constitute real patient records or clinical diagnosis.

export const screeningTopics = [
  {
    id: "general-wellness",
    title: "General Wellness",
    badgeColor: "#2dd4bf",
    badgeBg: "rgba(45, 212, 191, 0.12)",
    icon: "HeartPulse",
    description: "Routine check-in on daily stamina, basic mobility, seasonal hydration, and general physical vitality.",
    neutralPrompt: "Participant reported good daily mobility; discussed seasonal hydration habits; no acute discomfort mentioned.",
    defaultFollowupDays: 30,
    tags: ["Vitality", "Mobility", "Hydration"]
  },
  {
    id: "blood-pressure",
    title: "Blood Pressure Check",
    badgeColor: "#38bdf8",
    badgeBg: "rgba(56, 189, 248, 0.12)",
    icon: "Activity",
    description: "Assisted automated upper-arm cuff measurement, resting pulse assessment, and mindful salt habits review.",
    neutralPrompt: "Seated cuff check completed after 5 minutes of quiet rest. Reviewed practical ways to moderate salt in family cooking.",
    defaultFollowupDays: 14,
    tags: ["Resting Pulse", "Mindful Salt", "Recheck"]
  },
  {
    id: "nutrition-awareness",
    title: "Nutrition & Anaemia Awareness",
    badgeColor: "#a3e635",
    badgeBg: "rgba(163, 230, 53, 0.12)",
    icon: "Apple",
    description: "Conversational review of iron-rich greens, lentils, pulses, dietary diversity, and routine fatigue assessment.",
    neutralPrompt: "Discussed incorporating locally available leafy greens, sprouted lentils, and citrus fruits to support daily energy levels.",
    defaultFollowupDays: 21,
    tags: ["Dietary Iron", "Pulses & Greens", "Energy"]
  },
  {
    id: "blood-sugar",
    title: "Blood Sugar Screening",
    badgeColor: "#fbbf24",
    badgeBg: "rgba(251, 191, 36, 0.12)",
    icon: "Droplets",
    description: "Assisted random capillary glucose check-in and practical guidance on post-meal activity and balanced grain portions.",
    neutralPrompt: "Capillary sample recorded following morning meal. Advised regular water intake and encouraged daily 30-minute walks.",
    defaultFollowupDays: 14,
    tags: ["Glucose Check", "Post-Meal Routine", "Active Walk"]
  },
  {
    id: "emotional-wellbeing",
    title: "Emotional Well-being",
    badgeColor: "#c084fc",
    badgeBg: "rgba(192, 132, 252, 0.12)",
    icon: "Smile",
    description: "Gentle check-in on sleep regularity, daily stress load, family caregiving demands, and community support circles.",
    neutralPrompt: "Participant noted work-related fatigue and irregular sleep cycles. Practiced simple paced breathing and discussed community peer groups.",
    defaultFollowupDays: 14,
    tags: ["Sleep Rhythm", "Community Circle", "Stress Relief"]
  }
];

export const sampleAreas = [
  "North Valley Sector",
  "Riverside Cluster",
  "Hillside Panchayat",
  "East Field Block",
  "Central Village Outpost",
  "Lakeside Belt",
  "Highland Meadow",
  "South Forest Border"
];

export const initialScreeningRecords = [
  {
    id: "SWS-DEMO-101",
    participantName: "Elena Patel",
    ageRange: "36–50",
    area: "Riverside Cluster",
    topicId: "blood-pressure",
    topicTitle: "Blood Pressure Check",
    date: "18 Nov 2026",
    status: "Follow-up suggested",
    notes: "Seated arm cuff check recorded. Participant felt calm and mentioned mild morning fatigue. Encouraged hydration and scheduled a 14-day check-in.",
    vitalContext: "Resting pulse 74 bpm. Seated position verified.",
    followUpDue: "02 Dec 2026",
    followUpReason: "Routine 14-day blood pressure recheck after hydration review",
    referralGuidance: null,
    isIllustrative: true
  },
  {
    id: "SWS-DEMO-102",
    participantName: "David Kumar",
    ageRange: "51–65",
    area: "Hillside Panchayat",
    topicId: "blood-sugar",
    topicTitle: "Blood Sugar Screening",
    date: "17 Nov 2026",
    status: "Referral guidance",
    notes: "Capillary check-in recorded post-meal. Participant noted frequent thirst during afternoon field hours. Encouraged connecting with the local primary clinic doctor.",
    vitalContext: "Sterile single-use lancet; recorded ~2 hours post-breakfast.",
    followUpDue: "24 Nov 2026",
    followUpReason: "Check in after consultation with local primary healthcare provider",
    referralGuidance: "Advised consulting a certified medical officer at the nearest community primary health centre.",
    isIllustrative: true
  },
  {
    id: "SWS-DEMO-103",
    participantName: "Sara Thomas",
    ageRange: "18–35",
    area: "East Field Block",
    topicId: "nutrition-awareness",
    topicTitle: "Nutrition & Anaemia Awareness",
    date: "16 Nov 2026",
    status: "Check-in complete",
    notes: "Reported steady energy levels. Reviewed affordable local greens, lentils, and fresh amla to support iron uptake. Provided printed nutrition guide.",
    vitalContext: "Healthy conjunctiva and nail bed tones observed.",
    followUpDue: null,
    followUpReason: null,
    referralGuidance: null,
    isIllustrative: true
  },
  {
    id: "SWS-DEMO-104",
    participantName: "Marcus Rao",
    ageRange: "65+",
    area: "Central Village Outpost",
    topicId: "general-wellness",
    topicTitle: "General Wellness",
    date: "15 Nov 2026",
    status: "Check-in complete",
    notes: "Regular morning walker. Mentioned mild morning knee stiffness in cool weather. Demonstrated gentle seated knee extension exercises and warm water hydration.",
    vitalContext: "Good mobility and balance; resting pulse regular at 68 bpm.",
    followUpDue: null,
    followUpReason: null,
    referralGuidance: null,
    isIllustrative: true
  },
  {
    id: "SWS-DEMO-105",
    participantName: "Anika Sen",
    ageRange: "36–50",
    area: "North Valley Sector",
    topicId: "emotional-wellbeing",
    topicTitle: "Emotional Well-being",
    date: "14 Nov 2026",
    status: "Follow-up suggested",
    notes: "Discussed balance of seasonal farm work and elderly parent care. Practiced 5-minute paced breathing and connected with local community women's group.",
    vitalContext: "Reported evening restlessness; no acute physical symptoms.",
    followUpDue: "28 Nov 2026",
    followUpReason: "Check-in on sleep regularity and village self-help support group",
    referralGuidance: null,
    isIllustrative: true
  }
];

export const initialFollowUps = [
  {
    id: "FLP-201",
    recordId: "SWS-DEMO-101",
    participantName: "Elena Patel",
    area: "Riverside Cluster",
    topicTitle: "Blood Pressure Check",
    dueDate: "02 Dec 2026",
    status: "upcoming",
    reason: "Blood pressure recheck after hydration and mindful salt habits review",
    isCompleted: false,
    hasReferral: false,
    guidanceNote: "Review resting pulse and check-in on water intake.",
    isIllustrative: true
  },
  {
    id: "FLP-202",
    recordId: "SWS-DEMO-102",
    participantName: "David Kumar",
    area: "Hillside Panchayat",
    topicTitle: "Blood Sugar Screening",
    dueDate: "24 Nov 2026",
    status: "referral_guidance",
    reason: "Check in after consultation with local primary healthcare provider",
    isCompleted: false,
    hasReferral: true,
    guidanceNote: "Advise connecting with the local primary health centre for routine evaluation.",
    isIllustrative: true
  },
  {
    id: "FLP-203",
    recordId: "SWS-DEMO-105",
    participantName: "Anika Sen",
    area: "North Valley Sector",
    topicTitle: "Emotional Well-being",
    dueDate: "28 Nov 2026",
    status: "upcoming",
    reason: "Check-in on sleep regularity and village peer circle participation",
    isCompleted: false,
    hasReferral: false,
    guidanceNote: "Check if evening relaxation exercises helped sleep continuity.",
    isIllustrative: true
  },
  {
    id: "FLP-204",
    recordId: "SWS-DEMO-103",
    participantName: "Sara Thomas",
    area: "East Field Block",
    topicTitle: "Nutrition & Anaemia Awareness",
    dueDate: "10 Nov 2026",
    status: "completed",
    completedDate: "10 Nov 2026",
    reason: "Dietary iron follow-up conversation and leafy green recipe sheet shared",
    isCompleted: true,
    hasReferral: false,
    guidanceNote: "Completed. Participant noted adding sprouted beans to daily meals.",
    isIllustrative: true
  },
  {
    id: "FLP-205",
    recordId: "SWS-DEMO-104",
    participantName: "Marcus Rao",
    area: "Central Village Outpost",
    topicTitle: "General Wellness",
    dueDate: "08 Nov 2026",
    status: "completed",
    completedDate: "08 Nov 2026",
    reason: "Hydration and gentle joint mobility routine check-in",
    isCompleted: true,
    hasReferral: false,
    guidanceNote: "Completed. Participant walking comfortably 30 minutes daily.",
    isIllustrative: true
  }
];

export const healthArticles = [
  {
    id: "art-heart",
    category: "Heart health habits",
    title: "Everyday Habits for Steady Heart Health and Calm Circulation",
    readTime: "4 min read",
    summary: "Practical, realistic adjustments for everyday cooking and daily physical movement that support cardiovascular wellness over time.",
    keyPoints: [
      "Gradually temper excess salt in home cooking by accentuating natural herbs, lemon, garlic, and toasted spices.",
      "A brisk 30-minute daily walk before peak afternoon heat helps maintain vascular elasticity and stamina.",
      "Stay hydrated across field hours with boiled drinking water, herbal infusions, or unsweetened fresh lime water.",
      "Aim for 7 to 8 hours of quiet, restful sleep to give the circulatory and nervous systems adequate recovery."
    ],
    mythsVsFacts: [
      {
        myth: "High blood pressure always produces a warning headache or dizziness.",
        fact: "Elevated pressure often develops without any noticeable sensations, which is why routine non-diagnostic checks are so valuable."
      },
      {
        myth: "Reducing added salt removes all richness from traditional home meals.",
        fact: "Taste buds adapt comfortably within two to three weeks, uncovering the natural flavours of fresh ingredients."
      }
    ],
    consultationAdvice: "If you experience sudden pressure in the chest, unexplained breathlessness during basic tasks, or lightheadedness, consult a qualified healthcare provider immediately."
  },
  {
    id: "art-nutrition",
    category: "Balanced meals and iron-rich foods",
    title: "Nutrient-Dense Local Grains, Greens, and Everyday Iron",
    readTime: "5 min read",
    summary: "How indigenous leafy vegetables, whole millets, and sprouted legumes can sustain steady vitality and protect against common fatigue.",
    keyPoints: [
      "Locally accessible leafy greens such as moringa, spinach, and amaranth provide bioavailable iron, dietary fibre, and essential micronutrients.",
      "Pair plant iron sources with vitamin C—such as freshly squeezed lemon or seasonal citrus—to significantly improve nutrient absorption.",
      "Incorporate unpolished grains like finger millet, sorghum, and lentils into daily family meals for balanced energy release.",
      "Avoid drinking strong black tea or coffee right alongside meals, as tannins can temporarily impede iron absorption."
    ],
    mythsVsFacts: [
      {
        myth: "Only expensive dietary supplements can resolve everyday lethargy and low iron.",
        fact: "Accessible whole foods—lentils, sprouted beans, sesame seeds, and garden greens—provide potent nutrition at minimal cost."
      },
      {
        myth: "Whole millets are difficult to digest for children and elders.",
        fact: "When prepared as gentle porridge or steamed cakes, millets are nourishing, light, and easily digested across all ages."
      }
    ],
    consultationAdvice: "If an individual experiences persistent paleness, rapid fatigue from minor walking, or brittle nails, request a simple laboratory evaluation at the local health clinic."
  },
  {
    id: "art-preventive",
    category: "Preventive check-ins",
    title: "Why Regular Preventive Check-ins Protect Communities",
    summary: "Understanding the role of early, assisted health screenings in identifying lifestyle patterns before they escalate into acute complications.",
    keyPoints: [
      "Preventive check-ins are designed precisely for when you feel well; their goal is preserving existing health and early lifestyle adaptation.",
      "Assisted community checks provide an unhurried, comfortable setting to discuss lifestyle, nutrition, and resting vitals.",
      "Continuity of simple personal records allows individuals to see patterns over seasons and share them clearly with doctors.",
      "Early awareness prevents unexpected emergency medical visits, shielding families from severe out-of-pocket healthcare costs."
    ],
    mythsVsFacts: [
      {
        myth: "One should only visit a health kiosk or practitioner when feeling intense pain.",
        fact: "Subtle metabolic and circulatory shifts frequently happen quietly. Early lifestyle adaptations avoid lifelong complications."
      },
      {
        myth: "A preventive check-in will immediately lead to lifelong medication.",
        fact: "Most initial observations simply highlight that adjustments in water intake, sleep, or walking can restore steady balance."
      }
    ],
    consultationAdvice: "Take any summary slips or past notes when attending an annual doctor's check-up to provide helpful background context."
  },
  {
    id: "art-emotional",
    category: "Emotional well-being",
    title: "Cultivating Calm, Restful Sleep, and Community Connection",
    summary: "Recognising the physical toll of mental stress and building simple communal practices for recovery and emotional resilience.",
    keyPoints: [
      "Emotional strain frequently manifests physically—as tight neck muscles, digestive discomfort, shallow breathing, or interrupted sleep.",
      "Dedicate 10 minutes at sundown to practice deep, belly-focused breathing to signal safety to your nervous system.",
      "Talking openly with trusted family members, peer collectives, or community leaders lightens individual psychological burdens.",
      "Protect evening hours from bright mobile screens and excessive caffeine to protect your natural sleep rhythm."
    ],
    mythsVsFacts: [
      {
        myth: "Feeling overwhelmed or fatigued is a sign of personal weakness.",
        fact: "Emotional fatigue is a natural response to demanding physical labor, caregiving, or financial stress. Seeking support reflects strength."
      },
      {
        myth: "Emotional well-being has no bearing on physical heart health.",
        fact: "Chronic stress elevates stress hormones and resting pulse. Calm practices directly support cardiovascular wellness."
      }
    ],
    consultationAdvice: "If persistent feelings of hopelessness, severe anxiety, or sleep deprivation last more than a fortnight, speak confidentially with a qualified healthcare professional."
  },
  {
    id: "art-family",
    category: "Family and community well-being",
    title: "Whole-Family Health: Supporting Women, Adolescents, and Elders",
    summary: "A holistic look at equitable family nutrition, supportive adolescent transitions, and proactive elder mobility in rural settings.",
    keyPoints: [
      "Ensure equitable portions of protein, fresh vegetables, and dairy for women and adolescent girls, who often eat after others.",
      "Adolescent girls require mindful calcium and iron intake during growth spurts; encourage roasted legumes and clean water.",
      "Support gentle, consistent daily mobility for elders to preserve balance, joint flexibility, and independence.",
      "Encourage open household dialogue on hygiene, clean sanitation facilities, and timely medical consultations for expectant mothers."
    ],
    mythsVsFacts: [
      {
        myth: "Pregnant women should dramatically double their total food quantity.",
        fact: "Nutrient density and balanced variety matter far more than mere volume. Quality greens, eggs/pulses, and fruit provide true vitality."
      },
      {
        myth: "Older adults should remain completely still to prevent joint wear.",
        fact: "Gentle daily walking and light stretching actually lubricate joints, preserve bone density, and prevent falls."
      }
    ],
    consultationAdvice: "Consult your primary healthcare clinic for age-appropriate vaccinations, prenatal check-ups, and maternal health tracking."
  }
];

export const libraryCategories = [
  "All",
  "Preventive check-ins",
  "Heart health habits",
  "Balanced meals and iron-rich foods",
  "Emotional well-being",
  "Family and community well-being"
];
