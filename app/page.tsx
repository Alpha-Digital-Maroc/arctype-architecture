import Image from 'next/image'
import styles from '../styles/globals.css'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-black">
      <header className="bg-silver py-4">
        <h1 className="text-3xl text-center">Arctype Architecture</h1>
      </header>
      <main className="flex-1 container mx-auto py-8">
        <section id="hero" className="py-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Design. Build. Inspire.</h2>
          <p className="text-lg">We create interiors that transform spaces.</p>
        </section>
        <section id="services" className="py-12">
          <h3 className="text-2xl font-semibold mb-4">Services</h3>
          <ul className="list-disc list-inside">
            <li>Interior Design</li>
            <li>Space Planning</li>
            <li>Custom Furniture</li>
          </ul>
        </section>
        <section id="portfolio" className="py-12">
          <h3 className="text-2xl font-semibold mb-4">Portfolio</h3>
          <p>Coming soon...</p>
        </section>
        <section id="testimonials" className="py-12">
          <h3 className="text-2xl font-semibold mb-4">Testimonials</h3>
          <p>Coming soon...</p>
        </section>
        <section id="about" className="py-12">
          <h3 className="text-2xl font-semibold mb-4">About</h3>
          <p>About Arctype Architecture.</p>
        </section>
        <section id="contact" className="py-12">
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <p>Phone: +212600000000</p>
          <p>Email: info@arctype.ma</p>
        </section>
      </main>
      <footer className="bg-silver py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Arctype Architecture</p>
      </footer>
    </div>
  );
}
