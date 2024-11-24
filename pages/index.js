import Head from 'next/head';
import Header from '../components/Header';
import CategoriesSection from '../components/CategoriesSection';
import FaqSection from '../components/FaqSection';
import RegistrationForm from '../components/RegistrationForm';
import PrizesSection from '../components/PrizesSection';
import SponsorsSection from '../components/SponsorsSection';
import Timeline from '../components/Timeline';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';


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
        <PrizesSection />
        <SponsorsSection />
        <RegistrationForm />
        <FaqSection />
        <a href="/privacy_policy" className="text-gray-700 hover:text-blue-500">
          Προσωπικά Δεδομένα
        </a>
      </main>
    </div>
  );
}