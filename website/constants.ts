import { SiteContent } from './types';

export const FIREBASE_CONFIG = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

export const CLOUDINARY_CLOUD_NAME = "dycbotqpw";
export const CLOUDINARY_UPLOAD_PRESET = "obomo_unsigned";

export const DEFAULT_CONTENT: SiteContent = {
  theme: {
    primaryColor: "#1A0FAB"
  },
  hero: {
    headline: "Delivering care. Restoring dignity.",
    subheadline: "We are a registered CBO in Kisii and Nyamira. Food. Transport. Personal care. Companionship. The things that keep people alive and human — we bring them to the households formal systems keep missing.",
    heroImage: "https://images.unsplash.com/flagged=1/photo-1544022613-e87ca75a784a?w=1920&h=1080&fit=crop"
  },
  homePage: {
    stats: [
      { id: "st1", value: 2000, suffix: "+", label: "Families served since 2020" },
      { id: "st2", value: 5, suffix: " yrs", label: "Community-funded operation" },
      { id: "st3", value: 40, suffix: "", label: "Volunteer caregivers" }
    ],
    aboutPreviewTitle: "Who we are",
    aboutPreviewHeadline: "A community that refuses to leave its most vulnerable behind",
    programsTitle: "Four pillars. One integrated model.",
    programsSubtitle: "We don't choose between food or healthcare or dignity. The needs don't arrive separately — and neither do our interventions."
  },
  about: {
    mission: "To provide integrated community support through food assistance, healthcare access, transportation facilitation, volunteer caregiving, companionship, community partnerships, and sustainable development initiatives that improve the lives of vulnerable households.",
    vision: "A community where every vulnerable person lives with dignity, receives compassionate care, has access to essential services, and belongs to a supportive and inclusive society.",
    founderStory: "In 2020, a group of us watched the lockdowns hit our community harder than anyone in Nairobi was reporting. Elderly neighbours whose children worked in the city could not reach them. People on chronic medication could not get to the clinic. The formal systems — what formal systems? A helpline number that rang forever. A county health officer who meant well but had no budget. We were not development experts. We were neighbours. We pooled money, bought maize flour and soap, and started walking door to door. Someone said the word obomo — the nurturing warmth a mother gives her child. It stuck. It is still what drives us. Not charity. Just people taking care of their own.",
    founderImage: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=800&fit=crop",
    values: ["Dignity", "Compassion", "Community", "Integrity", "Accountability", "Inclusion", "Sustainability", "Transparency", "Respect", "Service"],
    homePreviewImage1: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=750&fit=crop",
    homePreviewImage2: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=750&fit=crop"
  },
  getInvolved: {
    introTitle: "Get Involved",
    introText: "Cash, supplies, or your time. Pick what fits. Everything reaches a household that needs it.",
    financialText: "Every shilling goes to beneficiaries. Nothing is deducted for admin. We publish quarterly financial reports — any donor can see them. That is not a promise. That is how we operate.",
    suppliesText: "We need food, sanitary towels, soap, clothing, and mobility aids. A bag of maize flour feeds a household for two weeks. A bar of soap stops a skin infection. Drop-off points in Kisii and Nyamira.",
    volunteerText: "Are you a trained caregiver, a nurse, a community health volunteer, or someone who just wants to help? We train and deploy 40 caregivers across the two counties. You get a stipend, transport money, and a clear career path into county health roles."
  },
  contact: {
    address: "Kisii and Nyamira Counties, Gusii Region, Kenya",
    email: "obomocare@gmail.com",
    phone: "+254 700 000 000",
    whatsapp: "+254 712 146179",
    bankDetails: "Equity Bank Kenya\nAccount Name: OBOMOCARE Community Based Organisation\nAccount Number: 0123456789\nBranch: Kisii\nSWIFT Code: EQBLKENA\nM-Pesa Paybill: 123456, Account: Donation",
    mpesa: "Paybill: 123456, Account: Donation",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "",
      linkedin: ""
    }
  },
  programs: [
    {
      id: "p1",
      title: "Food Support",
      description: "A food basket every two weeks. Maize flour, beans, cooking oil, salt, soap. For elderly beneficiaries who cannot cook, we coordinate meals. We source through supermarkets, local businesses, and church networks.",
      image: "https://images.unsplash.com/flagged=1/photo-1544022613-e87ca75a784a?w=800&h=600&fit=crop",
      stats: "2,000+ Families Served"
    },
    {
      id: "p2",
      title: "Transport Facilitation",
      description: "We partner with boda boda associations in Kisii and Nyamira. Beneficiaries get subsidised rides to clinics, hospitals, and pharmacy pickups. A missed appointment means failed treatment. We make sure they get there.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop",
      stats: "Healthcare Access"
    },
    {
      id: "p3",
      title: "Personal Care and Dignity",
      description: "Trained caregivers visit homes to help with bathing, dressing, grooming, wound care. We document every visit so we catch deterioration early. Dignity is not a luxury. It is the baseline.",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop",
      stats: "40 Active Caregivers"
    },
    {
      id: "p4",
      title: "Companionship and Inclusion",
      description: "We sit and talk. We play games. We accompany people to community events. Isolation kills — it accelerates cognitive decline and deepens depression. We have watched people come back to life when someone shows up regularly.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop",
      stats: "Community Resilience"
    }
  ],
  stories: [
    {
      id: "s1",
      title: "Started during the lockdowns",
      author: "OBOMOCARE",
      date: "2020-06-15",
      excerpt: "We watched our elderly neighbours struggle while the rest of the country was focused on Covid statistics. So we pooled money and started walking.",
      content: "In 2020, during the lockdowns, a group of us in the Gusii community noticed something nobody was reporting. Our elderly neighbours were running out of food. People on hypertension drugs could not get to the clinic because the boda boda riders had stopped operating. We pooled personal money, bought maize flour and soap, and started delivering door to door. The word obomo means nurturing warmth in our language. It is what kept us going.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=400&fit=crop",
      category: "Success Story"
    },
    {
      id: "s2",
      title: "Five Years, Zero International Funding",
      author: "OBOMOCARE",
      date: "2025-01-01",
      excerpt: "Not one dollar of foreign funding. Two thousand families served. Every shilling raised locally.",
      content: "Five years, and we have never received international funding. Personal contributions. Supermarket donations. Church offerings. Harambee. We have served over two thousand families this way. We have 22 active caregivers and 18 community health volunteers linked to our network. Now we are ready to scale, but we will not compromise how we operate.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=400&fit=crop",
      category: "Community"
    },
    {
      id: "s3",
      title: "Building a Caregiver Corps",
      author: "OBOMOCARE",
      date: "2025-03-01",
      excerpt: "Forty volunteers trained to provide professional home-based care. A stipend, transport reimbursement, and a career pathway into county health.",
      content: "Forty community volunteers now deliver home-based care across Kisii and Nyamira. They train in personal care techniques, first aid, CPR, waste management, basic mental health support, and safeguarding. It is not just volunteering — it is a career pathway. Skills gained qualify volunteers for community health assistant roles within the county government system. They get a monthly stipend, transport money, peer support, and formal recognition.",
      image: "https://images.unsplash.com/flagged=1/photo-1544022613-e87ca75a784a?w=800&h=400&fit=crop",
      category: "Education"
    }
  ],
  children: [
    {
      id: "c1",
      name: "Elderly Support Programme",
      age: 0,
      dream: "Dignity in Later Life",
      bio: "Elderly persons living alone. We bring food, help them bathe, keep them company, and get them to the clinic. Every visit documented so we catch problems before they become emergencies.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=500&fit=crop",
      needsSponsorship: true
    },
    {
      id: "c2",
      name: "Household Care Programme",
      age: 0,
      dream: "Complete Household Support",
      bio: "Households headed by orphaned children or persons with disabilities. Food baskets every two weeks, hygiene supplies, and regular care visits. We do not let them fall through the cracks.",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&h=500&fit=crop",
      needsSponsorship: true
    },
    {
      id: "c3",
      name: "Volunteer Caregiver Corps",
      age: 0,
      dream: "Professional Community Care",
      bio: "40 trained caregivers. They bathe, dress, groom, treat wounds, and keep people company. Training covers personal care, first aid, and basic mental health. A stipend, transport, and a career path.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=500&fit=crop",
      needsSponsorship: true
    }
  ],
  gallery: [
    {
      id: "g1",
      url: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&h=800&fit=crop",
      publicId: "obomo/g1",
      type: "image",
      category: "General",
      createdAt: "2024-01-01T00:00:00.000Z"
    },
    {
      id: "g2",
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=800&fit=crop",
      publicId: "obomo/g2",
      type: "image",
      category: "Community",
      createdAt: "2024-01-02T00:00:00.000Z"
    },
    {
      id: "g3",
      url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=800&fit=crop",
      publicId: "obomo/g3",
      type: "image",
      category: "Welfare",
      createdAt: "2024-01-03T00:00:00.000Z"
    },
    {
      id: "g4",
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=800&fit=crop",
      publicId: "obomo/g4",
      type: "image",
      category: "General",
      createdAt: "2024-01-04T00:00:00.000Z"
    },
    {
      id: "g5",
      url: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=800&fit=crop",
      publicId: "obomo/g5",
      type: "image",
      category: "Community",
      createdAt: "2024-01-05T00:00:00.000Z"
    },
    {
      id: "g6",
      url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=800&fit=crop",
      publicId: "obomo/g6",
      type: "image",
      category: "Welfare",
      createdAt: "2024-01-06T00:00:00.000Z"
    }
  ]
};
