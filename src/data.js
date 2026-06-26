// ============================================================
// Phoenix Academy — site content (single source of truth)
// Visa-interview preparation for business migration.
// ============================================================
import { MessageSquare, Users, Briefcase, Globe, Mic, Presentation, FileCheck, MapPin } from 'lucide-react'

// Decorative initials shown in the hero trust row
export const avatars = [
  { i: 'R', bg: '#1a3060' }, { i: 'M', bg: '#3a1a60' },
  { i: 'A', bg: '#601a1a' }, { i: 'S', bg: '#1a6040' },
  { i: 'K', bg: '#60401a' }, { i: 'P', bg: '#1a4060' },
]

// Eight focus areas — shown as tags in the "What We Offer" section
export const focusTags = [
  'Visa Interview Coaching',
  'Mock Interview Sessions',
  'Business Case Presentation',
  'Documentation Readiness',
  'Officer Q&A Preparation',
  'Confidence & Communication',
  'Country-Specific Briefings',
  'Family Interview Prep',
]

// "Why Choose Us" cards
export const features = [
  { Icon: MessageSquare, title: 'Real Interview Simulation', desc: 'Mock interviews modeled on actual consular, embassy, and immigration interviews — so the real thing feels familiar.' },
  { Icon: Users, title: 'Mentors Who Know the Process', desc: 'Coached by migration experts who understand exactly what officers ask and what they look for in a business applicant.' },
  { Icon: Briefcase, title: 'Your Business, Clearly Presented', desc: 'Learn to explain your business, investment, and intent with clarity and confidence — no hesitation, no red flags.' },
  { Icon: Globe, title: 'Country-Specific Preparation', desc: 'Tailored coaching for the USA, Australia, New Zealand, and the EU — each pathway has its own questions and expectations.' },
]

// Testimonials. NOTE: names & roles are placeholders — replace with real clients.
export const testimonials = [
  { quote: "I've run my manufacturing business for fifteen years, but the US consular interview terrified me. The mock sessions made the real thing feel routine — approved on the first attempt.", name: 'Rajesh Patel', initials: 'RP', role: 'Manufacturing Business Owner', program: '🇺🇸 USA · L-1 Visa' },
  { quote: 'They knew exactly what the officer would ask. By interview day I could present my business, my investment, and my plans without a moment of hesitation.', name: 'Mei Lin Chen', initials: 'MC', role: 'Trading Company Director', program: '🇦🇺 Australia · National Innovation Visa' },
  { quote: 'Phoenix prepared my whole family for the interview and made sure our documents told one clear story. Their guidance was the difference.', name: 'Andrei Popescu', initials: 'AP', role: 'Technology Founder & Investor', program: '🇪🇺 European Union · Citizenship' },
]

// "About Phoenix Academy" supporting bullet points
export const aboutPoints = [
  'Built for established business owners, directors & investors',
  'Mock interviews modeled on real consular & embassy interviews',
  'Country-specific coaching for the USA, Australia, NZ & EU',
  'Preparation for you — and your family’s interview too',
]

// The four core training programs (rendered in the Programs section)
export const programs = [
  {
    Icon: Mic,
    titleA: 'Visa Interview', titleB: 'Mastery',
    tagline: 'The Core Mock-Interview Program',
    desc: 'Rehearse the interview until it feels routine — answering officer questions with confidence, composure, and consistency under pressure.',
    keyAreas: ['Realistic Mock Interviews', 'Officer Q&A Drills', 'Answering With Confidence', 'Handling Tough Questions', 'Delivery & Body Language'],
    cta: 'Begin Preparation',
    artClass: 'visa-art--usa', region: 'Mock interviews · Q&A · Confidence',
    stat: '98%', statLabel: 'Interview Success Rate',
  },
  {
    Icon: Presentation,
    titleA: 'Business Case', titleB: 'Presentation',
    tagline: 'Present Your Business Convincingly',
    desc: 'Tell the story of your business, investment, and genuine intent so an officer understands it in minutes — and believes it.',
    keyAreas: ['Telling Your Business Story', 'Investment & Financials Narrative', 'Proving Genuine Intent', 'Source-of-Funds Clarity', 'Avoiding Red Flags'],
    cta: 'Begin Preparation',
    artClass: 'visa-art--au', region: 'Story · Investment · Intent',
    stat: '1000+', statLabel: 'Owners Coached',
  },
  {
    Icon: FileCheck,
    titleA: 'Documentation', titleB: 'Readiness',
    tagline: 'Know Your File Inside Out',
    desc: 'Walk through every document in your application so your answers and your paperwork tell one consistent, watertight story.',
    keyAreas: ['Full Document Walkthrough', 'Petition & Application Familiarity', 'Consistency Checks', 'Evidence Mapping', 'Common Documentation Pitfalls'],
    cta: 'Learn More',
    artClass: 'visa-art--nz', region: 'Documents · Evidence · Consistency',
    stat: 'Zero', statLabel: 'Surprises on the Day',
  },
  {
    Icon: MapPin,
    titleA: 'Country-Specific', titleB: 'Briefing',
    tagline: 'USA · Australia · New Zealand · EU',
    desc: 'Targeted preparation for your destination — each country’s officers, process, and expectations are different, and we prepare you for yours.',
    keyAreas: ['USA L-1 Consular Interview', 'Australia NIV Assessment', 'NZ Investor Interview', 'EU CBI Due Diligence', 'Officer Expectations by Country'],
    cta: 'Begin Preparation',
    artClass: 'visa-art--eu', region: 'USA · Australia · NZ · EU',
    stat: '4', statLabel: 'Destination Markets',
  },
]

// "How It Works" — the interview-preparation journey (5 steps)
export const processSteps = [
  { num: '1', title: 'Assessment', desc: 'We review your profile, business, and visa pathway — and pinpoint where the interview is most likely to challenge you.' },
  { num: '2', title: 'Personalized Prep Plan', desc: 'You receive a tailored roadmap focused on your destination, your business case, and your weak spots.' },
  { num: '3', title: 'Coaching & Drills', desc: 'Expert sessions sharpen your answers, your business story, and your command of every document.' },
  { num: '4', title: 'Mock Interviews', desc: 'Realistic simulations with honest feedback, repeated until you are calm and interview-ready.' },
  { num: '5', title: 'Interview Day', desc: 'You walk into the real interview prepared, confident, and ready to present your case.' },
]

// "Trusted by business owners" — success metrics
export const metrics = [
  { num: '1000+', label: 'Business Owners Coached' },
  { num: '98%', label: 'Interview Success Rate' },
  { num: '2500+', label: 'Mock Interviews Conducted' },
  { num: '4', label: 'Visa Destinations Covered' },
]

// Parent practice (Phoenix Business Advisory) — credibility stats
export const parentStats = [
  { num: '$170M+', label: 'Investment capital mobilized' },
  { num: '700+', label: 'Businesses empowered globally' },
  { num: '300+', label: 'Local jobs created' },
]

// Media outlets that have featured Phoenix
export const mediaOutlets = ['Forbes', 'Bloomberg', 'CNBC', 'Times of India', 'Yahoo', 'Khaleej Times']
