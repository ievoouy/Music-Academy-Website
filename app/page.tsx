import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
import Courses from "./components/Courses"

export default function Home() {
  return (
    <main>
      <Hero />
      <Courses />
      <ContactForm />
    </main>
  );
}