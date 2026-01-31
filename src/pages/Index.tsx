import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Highlights from "../components/Highlights";
import ExperienceTimeline from "../components/ExperienceTimeline";
import CaseStudies from "../components/CaseStudies";
import ContactSection from "../components/ContactSection";

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Highlights />
      <ExperienceTimeline />
      <Skills />
      <CaseStudies />
      <ContactSection />
    </Layout>
  );
};

export default Index;
