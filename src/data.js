// ============================================================
// Phoenix Academy — site content (single source of truth)
// ============================================================
import { Target, Users, Wrench, Handshake, Mic, Rocket, Globe, Lightbulb } from 'lucide-react'

// Decorative initials shown in the hero social-proof row
export const avatars = [
  { i: 'A', bg: '#1a3060' }, { i: 'D', bg: '#3a1a60' },
  { i: 'P', bg: '#601a1a' }, { i: 'S', bg: '#1a6040' },
  { i: 'R', bg: '#60401a' }, { i: 'M', bg: '#1a4060' },
]

// Eight focus areas — shown as tags in the "What We Offer" section
export const focusTags = [
  'Interview Preparation',
  'Career Coaching',
  'Job Readiness Programs',
  'Business Migration Readiness',
  'International Career Guidance',
  'Soft Skills & Communication',
  'Resume & LinkedIn Optimization',
  'Entrepreneurship & Global Business',
]

// "Why Choose Us" cards
export const features = [
  { Icon: Target, title: 'Industry-Focused Learning', desc: 'Programs designed around real employer expectations, current market trends, and practical business requirements.' },
  { Icon: Users, title: 'Expert Mentorship', desc: 'Learn from experienced professionals who provide guidance beyond textbooks and theory.' },
  { Icon: Wrench, title: 'Practical Skill Development', desc: 'Develop communication, interview, leadership, and professional skills that create measurable career growth.' },
  { Icon: Handshake, title: 'Personalized Career Support', desc: 'Receive tailored advice, career planning support, and individual mentoring to achieve your goals.' },
]

// Testimonials. NOTE: names & roles are placeholders — replace with real learners.
export const testimonials = [
  { quote: 'Phoenix Academy completely changed the way I approached interviews. The mock sessions and feedback helped me become confident and prepared.', name: 'Ananya Sharma', initials: 'AS', role: 'Software Engineer', program: '🎯 Interview Mastery' },
  { quote: 'The career guidance program gave me clarity, structure, and a practical roadmap for my professional growth.', name: 'Daniel Okafor', initials: 'DO', role: 'Marketing Professional', program: '🚀 Career Acceleration' },
  { quote: 'The mentors genuinely care about your success and provide guidance that is relevant, actionable, and easy to implement.', name: 'Priya Menon', initials: 'PM', role: 'Aspiring Entrepreneur', program: '💡 Entrepreneurship Development' },
]

// "About Phoenix Academy" supporting bullet points
export const aboutPoints = [
  'Skills aligned with real employer expectations',
  'Mentorship from experienced industry professionals',
  'Clear, structured pathways from learning to opportunity',
  'Support for employment, growth, entrepreneurship & global expansion',
]

// The four core programs (rendered in the Programs section)
export const programs = [
  {
    Icon: Mic,
    titleA: 'Interview Mastery', titleB: 'Program',
    tagline: 'Interviews & Communication',
    desc: 'Learn how to confidently handle HR interviews, technical interviews, behavioral assessments, and professional discussions.',
    keyAreas: ['Interview Techniques', 'Communication Skills', 'Confidence Building', 'Mock Interviews', 'Personal Branding'],
    cta: 'Enroll Now',
    artClass: 'visa-art--usa', region: 'Interviews · Communication · Confidence',
    stat: '500+', statLabel: 'Mock Interviews',
  },
  {
    Icon: Rocket,
    titleA: 'Career Acceleration', titleB: 'Program',
    tagline: 'Employability & Growth',
    desc: 'Designed for students and professionals seeking career growth and improved employability.',
    keyAreas: ['Resume Building', 'LinkedIn Optimization', 'Networking Strategies', 'Job Search Planning', 'Career Roadmapping'],
    cta: 'Enroll Now',
    artClass: 'visa-art--au', region: 'Resume · LinkedIn · Job Search',
    stat: '95%', statLabel: 'Satisfaction Rate',
  },
  {
    Icon: Globe,
    titleA: 'Business Migration', titleB: 'Readiness',
    tagline: 'USA · Australia · New Zealand · EU',
    desc: 'Get ready for international opportunities across the USA, Australia, New Zealand, and the European Union — with structured guidance on business planning, compliance, investment readiness, and market entry, informed by Phoenix Business Advisory.',
    keyAreas: ['USA, Australia, NZ & EU Pathways', 'Business Planning', 'Compliance Fundamentals', 'Investment Readiness', 'Expansion Strategy'],
    cta: 'Learn More',
    artClass: 'visa-art--nz', region: 'USA · Australia · NZ · EU',
    stat: '4', statLabel: 'Destination Markets',
  },
  {
    Icon: Lightbulb,
    titleA: 'Entrepreneurship', titleB: 'Development',
    tagline: 'Build & Grow Ventures',
    desc: 'Build the mindset, skills, and strategic knowledge required to launch and grow successful ventures.',
    keyAreas: ['Business Foundations', 'Growth Strategy', 'Market Research', 'Sales Fundamentals', 'Leadership Development'],
    cta: 'Enroll Now',
    artClass: 'visa-art--eu', region: 'Mindset · Strategy · Leadership',
    stat: 'Founder', statLabel: 'Mindset & Skills',
  },
]

// "How It Works" — the learning process (5 steps)
export const processSteps = [
  { num: '1', title: 'Assessment', desc: 'Understand your current position, goals, strengths, and improvement areas.' },
  { num: '2', title: 'Personalized Learning Plan', desc: 'Receive a customized roadmap designed around your objectives.' },
  { num: '3', title: 'Expert Training', desc: 'Participate in practical learning sessions focused on real-world outcomes.' },
  { num: '4', title: 'Mentorship & Feedback', desc: 'Get continuous support, evaluations, and improvement recommendations.' },
  { num: '5', title: 'Career & Business Readiness', desc: 'Apply your knowledge confidently in interviews, workplaces, and business environments.' },
]

// "Empowering Future Professionals" — success metrics
export const metrics = [
  { num: '1000+', label: 'Learners Trained' },
  { num: '95%', label: 'Program Satisfaction Rate' },
  { num: '500+', label: 'Mock Interviews Conducted' },
  { num: '100+', label: 'Career Mentoring Sessions' },
]

// Parent practice (Phoenix Business Advisory) — credibility stats
export const parentStats = [
  { num: '$170M+', label: 'Investment capital mobilized' },
  { num: '700+', label: 'Businesses empowered globally' },
  { num: '300+', label: 'Local jobs created' },
]

// Media outlets that have featured Phoenix
export const mediaOutlets = ['Forbes', 'Bloomberg', 'CNBC', 'Times of India', 'Yahoo', 'Khaleej Times']
