import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
import Courses from "./components/Courses"
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <main>
      <Hero />
      <Courses />
      <WhyUs />
      <Testimonials />
      <ContactForm />

    </main>
  );
}