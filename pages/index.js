import Head from 'next/head';
import Header from '../components/2024/Header';
import CategoriesSection from '../components/2024/CategoriesSection';
import FaqSection from '../components/2024/FaqSection';
import SponsorsSection from '../components/2024/SponsorsSection';
import Timeline from '../components/2024/Timeline';
import HeroSection from '@/components/2024/HeroSection/HeroSection';
import AboutSection from '@/components/2024/AboutSection';
import Footer from '@/components/2024/Footer';
import EvaluationCriteriaSection from '@/components/2024/EvaluationCriteriaSection';
import PrizesSectionLastTime from '@/components/2024/Prizes/PrizesSectionLastTime';
import WinnersSection from '@/components/2024/WinnersSection';
import Form from '@/components/2024/Form';

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
        <WinnersSection />
        <AboutSection />
        <CategoriesSection />
        <Timeline />
        <PrizesSectionLastTime />
        <SponsorsSection />
        <EvaluationCriteriaSection />
        <Form />
        <FaqSection />
        <Footer />
      </main>
    </div>
  );
}
