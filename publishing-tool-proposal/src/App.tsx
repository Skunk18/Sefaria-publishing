import React, { useState } from 'react';
import Header from './components/Header';
import Slide from './components/Slide';
import './styles/App.css'; // Ensure correct path to your CSS file

// Updated slides array with iconName property
const slides = [
  {
    title: "Sefaria-Gently Ventures Product Incubator",
    content: "Scaling Sefaria's impact through product-led growth.",
    footer: "Proposed by: Dave Weinberg, Founder of Gently Ventures",
    iconName: "GentlyIcon" // Custom icon for this slide
  },
  {
    title: "Executive Summary",
    content: `
      - Joint product incubator for innovative Jewish educational technology.
      - Initial project: Custom Publishing Platform.
      - 2-year timeline with $1 million budget.
      - Goal: New revenue streams, expanded impact, and product innovation.
      - Led by experienced entrepreneur and team builder.
    `,
    iconName: "DocumentIcon" // Custom icon for this slide
  },
  {
    title: "Dave Weinberg - Gently Ventures",
    content: `
      - Leadership: Extensive experience in team leadership and organization building.
      - Expertise: Background in technology, Jewish non-profits, and education.
      - Scaling: Successful fundraising and scaling programs.
      - Innovation: Proven ability to drive product-led growth and innovation.
    `,
    iconName: "LeadershipIcon" // Custom icon for this slide
  },
  {
    title: "Relevant Projects & Experiments",
    content: `
      - Rav AI Voice Assistant: AI-powered voice assistant for Jewish learning and guidance.
      - AI-Assisted Publishing: Efficient book creation from concept to final product.
      - AI Content Platform: Media and content platform using AI for scalable content generation.
      - Rapid Children's Book Creation: Process to create children's books in just 1 hour.
    `,
    iconName: "ProjectIcon" // Custom icon for this slide
  },
  {
    title: "Incubator Implementation Plan",
    content: `
      1. Concept refinement and partnership agreement.
      2. Secure funding and establish operational framework.
      3. Develop and launch initial product (Custom Publishing Platform).
      4. Explore secondary products based on Sefaria's priorities.
      5. Scale successful products and iterate on incubator model.
    `,
    iconName: "PlanIcon" // Custom icon for this slide
  },
  {
    title: "Custom Publishing Platform - First Product",
    content: `
      - Self-service tool for creating personalized Jewish books and materials.
      - Leverages Sefaria's extensive digital library.
      - AI-enhanced content curation and editing.
      - Potential for physical and digital distribution.
    `,
    iconName: "PublishingIcon" // Custom icon for this slide
  },
  {
    title: "Incubator Structure",
    content: `
      - Product Development: Agile development of innovative products.
      - Community Engagement: Events and outreach programs.
      - Partnerships: Strategic collaborations and alliances.
      - Investment: Funding for promising ideas and startups.
    `,
    iconName: "StructureIcon" // Custom icon for this slide
  },
  {
    title: "Benefits for Sefaria",
    content: `
      - New revenue streams through innovative products.
      - Enhanced user engagement with Sefaria's content.
      - Expansion into new markets and audiences.
      - Position as a leader in Jewish educational technology.
      - Sustainable model for ongoing innovation and growth.
    `,
    iconName: "BenefitsIcon" // Custom icon for this slide
  },
  {
    title: "Contact Information",
    content: `
      - Schedule our next call: 
      - Dave Weinberg, Gently Ventures.
      - LinkedIn: ["https://www.linkedin.com/in/daveweinberg/"](LinkedIn)
      - Email: dave@gentlyventures.com
      - Phone: 240-678-6863
    `,
    iconName: "ContactIcon" // Custom icon for this slide
  },
];

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goNext = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const goBack = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="slide-container">
        <Slide {...slides[currentSlide]} />
      </div>
      <div className="navigation-container">
        {currentSlide > 0 && (
          <button className="nav-button" onClick={goBack}>
            Back
          </button>
        )}
        {currentSlide < slides.length - 1 && (
          <button className="nav-button" onClick={goNext}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
