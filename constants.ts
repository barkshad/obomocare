import { SiteContent } from './types';

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDF3FnrxPYa6Hj_0lIT59FP9CSCIk7aS0w",
  authDomain: "mati-foundation-2d67e.firebaseapp.com",
  projectId: "mati-foundation-2d67e",
  storageBucket: "mati-foundation-2d67e.firebasestorage.app",
  messagingSenderId: "769000463528",
  appId: "1:769000463528:web:efbfbb32b885aa7071369d",
  measurementId: "G-EHP18C5S41"
};

export const CLOUDINARY_CLOUD_NAME = "dycbotqpw";
export const CLOUDINARY_UPLOAD_PRESET = "obomo_unsigned";

export const DEFAULT_CONTENT: SiteContent = {
  theme: {
    primaryColor: "#1A0FAB"
  },
  hero: {
    headline: "Delivering care. Restoring dignity.",
    subheadline: "OBOMOCARE is a registered Community Based Organisation serving vulnerable households in Kisii and Nyamira Counties — bringing food, transport, personal care, and companionship to those left behind by formal systems.",
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
    mission: "OBOMOCARE was founded in 2020 by members of the Gusii community who witnessed at close range the compounding hardships facing the most vulnerable households in Kisii and Nyamira Counties. The elderly, the chronically ill, persons living with disabilities, and households headed by orphaned children were living without food, without transport to health facilities, without personal care, and without companionship. The name comes from the Gusii word obomo — nurturing warmth, the sustaining care a parent gives a child. That word is both our name and our mission: dignified, practical, integrated support as a matter of right, not charity. For five years we have operated entirely on community-generated resources — personal contributions, supermarket donations, church networks, and Harambee fundraising. We have served over two thousand families. Now we are ready to scale.",
    vision: "A future where every vulnerable household in Kisii and Nyamira Counties receives dignified, integrated care — food, transport, personal support, and companionship — as a matter of right, not charity. A community where no one is left behind.",
    founderStory: "OBOMOCARE was founded in 2020 by members of the Gusii community who witnessed at close range the compounding hardships facing the most vulnerable households in Kisii and Nyamira Counties. The elderly, the chronically ill, persons living with disabilities, and households headed by orphaned children were living without food, without transport to health facilities, without personal care, and without companionship. The name comes from the Gusii word obomo — nurturing warmth, the sustaining care a parent gives a child. That word is both our name and our mission: dignified, practical, integrated support as a matter of right, not charity. For five years we have operated entirely on community-generated resources. We have served over two thousand families. Now we are ready to scale.",
    founderImage: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=800&fit=crop",
    values: ["Dignity", "Compassion", "Community", "Accountability", "Integrity", "Inclusion", "Non-partisan", "Not-for-profit", "Sustainability"],
    homePreviewImage1: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=750&fit=crop",
    homePreviewImage2: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=750&fit=crop"
  },
  getInvolved: {
    introTitle: "Get Involved",
    introText: "Whether you contribute funds, supplies, or your time as a volunteer caregiver, you are making a tangible difference in the lives of vulnerable households across Kisii and Nyamira Counties.",
    financialText: "100% of your contribution goes directly to programme beneficiaries. We maintain strict transparency and provide quarterly financial reports to all donors and partners.",
    suppliesText: "We are always in need of food items, sanitary supplies, clothing, and mobility aids for the households we serve.",
    volunteerText: "Are you a trained caregiver, health worker, or community member? We welcome volunteers to join our corps of 40 trained caregivers providing home-based care."
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
      description: "A fortnightly OBOMOCARE Food Basket delivered to enrolled households, plus meal coordination for elderly persons who cannot cook independently. Sourced through supermarket, business, and church partnerships.",
      image: "https://images.unsplash.com/flagged=1/photo-1544022613-e87ca75a784a?w=800&h=600&fit=crop",
      stats: "2,000+ Families Served"
    },
    {
      id: "p2",
      title: "Transport Facilitation",
      description: "Formal partnerships with boda boda associations ensure enrolled beneficiaries reach health facilities, attend clinic appointments, and maintain medication regimens — removing the cost and physical barrier of rural transport.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop",
      stats: "Healthcare Access"
    },
    {
      id: "p3",
      title: "Personal Care and Dignity",
      description: "Trained volunteer caregivers provide bathing, dressing, grooming, wound care, and hygiene support at the household level. Dignity is not a luxury. It is a right. Every visit is documented to catch deterioration early.",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop",
      stats: "40 Active Caregivers"
    },
    {
      id: "p4",
      title: "Companionship and Inclusion",
      description: "Structured social engagement — conversation, games, storytelling, accompaniment to community events — combats isolation that accelerates cognitive decline and withdrawal. We have seen it restore people's will to live fully.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop",
      stats: "Community Resilience"
    }
  ],
  stories: [
    {
      id: "s1",
      title: "From the Community, For the Community",
      author: "OBOMOCARE",
      date: "2020-06-15",
      excerpt: "Founded by Gusii community members who witnessed compounding hardships facing vulnerable households in Kisii and Nyamira Counties. The elderly, chronically ill, persons with disabilities, and child-headed households were living without food, transport, care, or companionship.",
      content: "OBOMOCARE was founded in 2020 by members of the Gusii community who witnessed at close range the compounding hardships facing the most vulnerable households. The name comes from the Gusii word obomo — nurturing warmth, the sustaining care a parent gives a child.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=400&fit=crop",
      category: "Success Story"
    },
    {
      id: "s2",
      title: "Five Years of Community-Funded Impact",
      author: "OBOMOCARE",
      date: "2025-01-01",
      excerpt: "For five years we have operated entirely on community-generated resources — personal contributions, supermarket donations, church networks, and Harambee fundraising. We have served over two thousand families without a single dollar of international funding.",
      content: "We have served over two thousand families. Our current volunteer base includes 22 active caregivers and 18 CHV partners linked. Now we are ready to scale with international partnership support.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=400&fit=crop",
      category: "Community"
    },
    {
      id: "s3",
      title: "The Volunteer Caregiver Corps",
      author: "OBOMOCARE",
      date: "2025-03-01",
      excerpt: "Forty trained community volunteers deliver home-based care across Kisii and Nyamira. Training covers personal care techniques, safeguarding, basic health literacy, first aid, and waste management — delivered in partnership with a qualified health institution.",
      content: "Our volunteer caregivers are the heart of OBOMOCARE. Drawn from the communities they serve, trained to a professional standard, and supported to stay. Volunteers receive a monthly support stipend, transport reimbursements, peer support groups, and formal recognition.",
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
      bio: "Supporting elderly persons living alone with meal delivery, personal care, companionship, and transport to health facilities. Every visit is documented to catch health deterioration early.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=500&fit=crop",
      needsSponsorship: true
    },
    {
      id: "c2",
      name: "Household Care Programme",
      age: 0,
      dream: "Complete Household Support",
      bio: "Fortnightly food baskets, hygiene supplies, and care visits for vulnerable households including those headed by orphaned children or persons living with disabilities.",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&h=500&fit=crop",
      needsSponsorship: true
    },
    {
      id: "c3",
      name: "Volunteer Caregiver Corps",
      age: 0,
      dream: "Professional Community Care",
      bio: "40 trained volunteer caregivers providing bathing, dressing, grooming, wound care, and companionship at the household level. Training includes personal care techniques, first aid, and basic mental health support.",
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
