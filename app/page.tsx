import ClientSay from "@/components/ClientSay";
import Section from "@/components/Section";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import FAQ from "@/components/FAQ";
import Journey from "@/components/Journey";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="max-lg:px-4">
        <Hero />/
        <Section
          title="Featured Properties"
          desc='Explore our handpicked selection of featured properties. Each
        listing offers a glimpse into exceptional homes and investments
        available through Estatein. Click "View Details" for more
        information.'
          link="#"
          linkTxt="View All Properties"
        >
          <Featured />
        </Section>
        <Section
          title="What Our Clients Say"
          desc="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
          link="#"
          linkTxt="View All Testimonials"
        >
          <ClientSay />
        </Section>
        <Section
          title="Frequently Asked Questions"
          desc="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
          link="#"
          linkTxt="View All FAQ’s"
        >
          <FAQ />
        </Section>
      </div>
      <Footer />
    </>
  );
}
