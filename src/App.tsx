/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AutoScrollingPortfolio } from './components/AutoScrollingPortfolio';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { JournalismWorks } from './components/JournalismWorks';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AutoScrollingPortfolio />
        <About />
        <Resume />
        <JournalismWorks />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
