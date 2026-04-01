/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Hero, Features, Fleet, Services, About, Contact, Footer } from "./components/NexDrive";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Fleet />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
