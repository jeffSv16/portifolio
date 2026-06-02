import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Stacks from './components/Stacks'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <div className="bg-noise" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <About />
        <Stacks />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
