import TopBar from './components/TopBar'
import Nav from './components/Nav'
import Hero from './components/Hero'
import MediaStrip from './components/MediaStrip'      // "As featured in"
import Services from './components/Services'          // "What We Offer" — focus areas
import Practice from './components/Practice'          // "About Phoenix Academy"
import BackedBy from './components/BackedBy'          // "Backed by Phoenix Business Advisory"
import WhyChooseUs from './components/WhyChooseUs'
import VisaPrograms from './components/VisaPrograms'  // "Our Programs"
import Academy from './components/Academy'            // "How It Works" — learning process
import SuccessMetrics from './components/SuccessMetrics'
import Band from './components/Band'                  // Free-webinar CTA strip
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <TopBar />
      <Nav />
      <Hero />
      <MediaStrip />
      <Services />
      <Practice />
      <BackedBy />
      <WhyChooseUs />
      <VisaPrograms />
      <Academy />
      <SuccessMetrics />
      <Band />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}
