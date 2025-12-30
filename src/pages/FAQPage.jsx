import React, { useState } from "react";

const faqLinks = {
  tracks: "/zerotrustai-conference-tracks/",
  abstractSubmission: "/abstract-submission",
  schedule:"/zerotrustai-event-schedule",
  email: "mailto:hello@helixconferences.com",

};

export const faqData = [
  {
    question: "What is ZEROTRUSTAI-2026?",
    answer:
      "ZEROTRUSTAI-2026, officially titled the “Zero-Trust Security & AI Defense Forum”, is a premier international conference organized by Helix Conferences. The forum brings together cybersecurity leaders, AI researchers, defense experts, enterprises, startups, and policymakers to explore Zero-Trust architectures, AI-driven security, cyber resilience, threat intelligence, and next-generation defense strategies.",
  },
  {
    question: "When and where will ZEROTRUSTAI-2026 take place?",
    answer:
      "ZEROTRUSTAI-2026 will be held on September 24–25, 2026, in Osaka, Japan.",
  },
  {
    question: "What are the key highlights of ZEROTRUSTAI-2026?",
    answer:
      "Keynote addresses by global cybersecurity experts, AI security workshops, real-world Zero-Trust implementations, advanced threat detection sessions, panel discussions, live technology demonstrations, startup showcases, and high-impact networking opportunities.",
  },
  {
    question: "What topics and tracks are covered at ZEROTRUSTAI-2026?",
    answer: (
      <>
        Explore the complete list of conference tracks here:{" "}
        <a
          href={faqLinks.tracks}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          ZEROTRUSTAI-2026 Tracks
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I present my research or explore sponsorship opportunities?",
    answer: (
      <>
        To present your research, demonstrate technology, or discuss sponsorship
        opportunities, please contact us at{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I submit an abstract or proposal?",
    answer: (
      <>
        Abstract and presentation submissions can be made{" "}
        <a
          href={faqLinks.abstractSubmission}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "How will I receive my invoice?",
    answer:
      "Invoices will be sent to the registered email address after successful registration.",
  },
  {
    question: "What materials will participants receive?",
    answer:
      "Registered participants will receive a digital conference kit including the agenda, speaker profiles, session details, and exhibitor information.",
  },
  {
    question: "What is the duration of presentation slots?",
    answer:
      "Standard presentation slots are typically 15–20 minutes, including Q&A. Final guidelines will be shared upon acceptance.",
  },
  {
    question: "Who should attend ZEROTRUSTAI-2026?",
    answer:
      "Cybersecurity professionals, CISOs, AI researchers, cloud architects, DevSecOps engineers, government officials, defense professionals, technology providers, startups, and academicians.",
  },
  {
    question: "How many participants are expected?",
    answer:
      "ZEROTRUSTAI-2026 is expected to host 150+ international participants, including speakers, delegates, exhibitors, and sponsors.",
  },
  {
    question: "Can I submit multiple abstracts?",
    answer:
      "Yes, multiple abstract submissions are allowed if each represents a unique topic or solution.",
  },
  {
    question: "Are keynote and featured speaker slots available?",
    answer:
      "Yes, a limited number of keynote and featured speaker slots are available. Applicants can indicate their preference during submission.",
  },
  {
    question: "What is expected from speakers and exhibitors?",
    answer:
      "Speakers and exhibitors are expected to deliver insightful, industry-relevant, and innovation-driven sessions while actively engaging with attendees.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Yes, registration fees apply for attendees, speakers, and exhibitors. Pricing details are available under the “Buy A Ticket” section.",
  },
  {
    question: "How can I view the conference schedule?",
    answer: (
      <>
        The detailed schedule will be released soon. You can view it{" "}
        <a
          href={faqLinks.schedule}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "Can I view the agenda and speaker list before the event?",
    answer:
      "Yes, the full agenda, confirmed speakers, and exhibitors will be announced prior to the event.",
  },
  {
    question: "Is early registration available?",
    answer:
      "Yes, early registration is available and recommended as slots may be limited.",
  },
  {
    question: "How can I get assistance with travel or accommodation?",
    answer: (
      <>
        For travel and accommodation support, please contact{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
];




const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300 mb-4">
          <button
            className="w-full text-left py-4 px-2 font-medium text-lg flex justify-between items-center"
            onClick={() => toggle(index)}
          >
            {item.question}
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-700">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
