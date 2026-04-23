import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
import Courses from "./components/Courses"
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Courses />
      <ContactForm />
      <WhyUs />
    </main>
  );
}