import Head from 'next/head';
import Header from '../components/Header';
import CategoriesSection from '../components/CategoriesSection';
import FaqSection from '../components/FaqSection';
import RegistrationForm from '../components/RegistrationForm';
import SponsorsSection from '../components/SponsorsSection';
import Timeline from '../components/Timeline';
import HeroSection from '@/components/HeroSection/HeroSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import EvaluationCriteriaSection from '@/components/EvaluationCriteriaSection';
import PrizesSectionLastTime from '@/components/Prizes/PrizesSectionLastTime';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Datathon UoM 2024</title>
        <meta name="description" content="Join our exciting datathon event!" />
      </Head>

      <main>
        <Header />
        <HeroSection />
        <AboutSection />
        <CategoriesSection />
        <Timeline />
        <PrizesSectionLastTime />
        <SponsorsSection />
        <EvaluationCriteriaSection />
        <RegistrationForm />
        <FaqSection />
        <Footer />
      </main>
    </div>
  );
}
