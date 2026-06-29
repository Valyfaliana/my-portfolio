import { contactSection } from "@/lib/data";
import ContactFooter from "../ui/ContactFooter";
import MyContact from "../ui/MyContact";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-surface px-6 py-24">
      <div className="mx-auto w-full max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-8 py-32 md:px-12 md:py-44">
          <div
            aria-hidden
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: "url('/build_together.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          />
    
          <div aria-hidden className="absolute inset-0 bg-bg/35" />

          <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
            <SectionTitle className="mb-4 text-2xl font-heading font-bold tracking-tight text-text md:text-4xl">
              {contactSection.title}
            </SectionTitle>
       
            <ScrollReveal>
              <p className="mb-8 text-base text-muted md:text-xl">
                {contactSection.description}
              </p>
            </ScrollReveal>

            <MyContact className="mb-0 flex-wrap items-center justify-center" />
          </div>
        </div>

        <ContactFooter />
      </div>
    </section>
  );
}
