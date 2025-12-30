import React, { useEffect, useState, useRef } from 'react';
import { trackImages } from '../utils';
import { banner_style } from '../assets/styles';
import { useAnimation, motion } from 'framer-motion';



const tracks = [
  {
    image: trackImages.mental_health_nursing,
    title: "Mental Health Nursing",
    subtitle: "Compassionate Care for Mental Wellness",
    description:
      "Mental health nursing focuses on providing care to individuals with mental health disorders, such as depression, anxiety, schizophrenia, and substance abuse issues. Nurses collaborate with psychiatrists and other professionals to create personalized care plans aimed at promoting recovery and managing symptoms. They offer therapeutic support, assist with treatment adherence, and provide education to patients and their families.",
  },
  {
    image: trackImages.infection_control,
    title: "Infection Control & Prevention",
    subtitle: "Safeguarding Healthcare Through Prevention",
    description:
      "Infection control and prevention in healthcare focuses on reducing the spread of infectious diseases by implementing strategies to prevent healthcare-associated infections (HAIs). Key measures include proper hand hygiene, use of PPE, sterilization of instruments, and patient isolation. It also involves outbreak monitoring, staff education, and maintaining a clean environment.",
  },
  {
    image: trackImages.pallative_care,
    title: "Palliative Care",
    subtitle: "Improving Quality of Life Through Comfort-Centered Care",
    description:
      "Palliative care focuses on relieving symptoms, pain, and stress from serious illnesses, prioritizing quality of life over curative treatments. It addresses physical, emotional, and spiritual well-being, and is provided alongside curative care at any stage of illness, emphasizing dignity and support for both patients and families.",
  },
  {
    image: trackImages.pediatric_nursing,
    title: "Pediatric Nursing",
    subtitle: "Holistic Care for Children and Adolescents",
    description:
      "Pediatric nursing focuses on providing care to infants, children, and adolescents, addressing their unique medical, emotional, and developmental needs. Pediatric nurses play a key role in preventing, diagnosing, and treating illnesses, and promoting preventive care while educating and supporting families.",
  },
  {
    image: trackImages.neurodiversity,
    title: "Neurodiversity",
    subtitle: "Embracing Cognitive Differences in Healthcare",
    description:
      "Neurodiversity recognizes and respects neurological differences such as autism, ADHD, and dyslexia as natural variations of the human brain. In healthcare, this perspective promotes inclusive care, personalized interventions, and the celebration of unique strengths and abilities of neurodivergent individuals.",
  },
  {
    image: trackImages.autism,
    title: "Autism",
    subtitle: "Understanding and Supporting Autism Spectrum Disorder",
    description:
      "Autism Spectrum Disorder (ASD) is characterized by challenges in social interaction, communication, and behavior. Symptoms vary widely in severity. Early diagnosis and intervention are crucial for improving outcomes. Healthcare providers play a key role in supporting development and quality of life for individuals with autism.",
  },
  {
    image: trackImages.critical_care_nursing,
    title: "Critical Care Nursing",
    subtitle: "Lifesaving Expertise in Critical Environments",
    description:
      "Critical care nursing involves specialized care for patients with life-threatening conditions, typically in ICUs. Nurses monitor vital signs, manage complex equipment, and work with healthcare teams to stabilize patients. They are skilled in emergency response, treatment delivery, and patient recovery support.",
  },
  {
    image: trackImages.genetic_disorder,
    title: "Genetic Disorders",
    subtitle: "Understanding Inherited Health Conditions",
    description:
      "Genetic disorders result from DNA mutations and can affect physical and mental health. Conditions such as cystic fibrosis, sickle cell anemia, and Down syndrome require early diagnosis, genetic counseling, and multidisciplinary care to manage symptoms and improve quality of life.",
  },
  {
    image: trackImages.geriatric_nursing,
    title: "Geriatric Nursing",
    subtitle: "Comprehensive Care for the Aging Population",
    description:
      "Geriatric nursing focuses on the unique needs of older adults, managing chronic conditions, and promoting healthy aging. Nurses advocate for patient independence and dignity, addressing conditions like dementia, arthritis, and heart disease across hospitals, nursing homes, and home care settings.",
  },
  {
    image: trackImages.epidemiology,
    title: "Epidemiology",
    subtitle: "Tracking and Preventing Disease Spread",
    description:
      "Epidemiology is the study of how diseases affect populations. Epidemiologists identify risk factors and develop prevention strategies by analyzing patterns and causes of health issues. Their work is vital for public health initiatives, outbreak control, and disease surveillance.",
  },
  {
    image: trackImages.chronic_disease_management,
    title: "Chronic Disease Management",
    subtitle: "Sustained Support for Long-Term Conditions",
    description:
      "Chronic disease management involves ongoing care for conditions like diabetes, heart disease, and hypertension. It includes lifestyle guidance, regular monitoring, and personalized care plans, empowering patients to actively manage their health and improve long-term outcomes.",
  },
  {
    image: trackImages.community_nursing,
    title: "Community Nursing",
    subtitle: "Health Promotion Within Communities",
    description:
      "Community nursing delivers healthcare in diverse community settings, focusing on health promotion, disease prevention, and chronic condition management. Nurses work in schools, clinics, and homes to provide accessible care and address public health issues through education and outreach.",
  },
  {
    image: trackImages.nursing_informatics,
    title: "Nursing Informatics",
    subtitle: "Integrating Technology for Better Care",
    description:
      "Nursing informatics combines nursing science with technology to improve patient outcomes. It involves managing electronic health records (EHRs), data analysis, and optimizing clinical workflows. Informatics specialists also train staff and support the development of evidence-based protocols.",
  }
];



const TrackCard = ({ title, subtitle, description, image, reverse }) => {
  const imageControls = useAnimation();
  const textControls = useAnimation();

  const cardRef = useRef(null);
  const [isImagePaused, setIsImagePaused] = useState(false);
  const [isTextPaused, setIsTextPaused] = useState(false);

  // Animate image
  useEffect(() => {
    if (isImagePaused) {
      imageControls.stop();
    } else {
      imageControls.start({
        y: [0, -10, 0],
        transition: { duration: 4, repeat: Infinity }
      });
    }
  }, [isImagePaused]);

  // Animate text
  useEffect(() => {
    if (isTextPaused) {
      textControls.stop();
    } else {
      textControls.start({
        y: [0, -10, 0],
        transition: { duration: 4, repeat: Infinity }
      });
    }
  }, [isTextPaused]);

  // Click to scroll card into center
  const handleCardClick = () => {
    cardRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };

  return (
    <div
      ref={cardRef}
      className={`flex flex-col md:flex-row ${
        reverse ? 'md:flex-row-reverse' : ''
      } items-center gap-8 mb-12 cursor-pointer`}
      onClick={handleCardClick}
    >
      {/* Image Container */}
      <motion.div
        className="w-full md:w-1/2 cursor-pointer"
        animate={imageControls}
        onMouseEnter={() => setIsImagePaused(true)}
        onMouseLeave={() => setIsImagePaused(false)}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-72 object-cover rounded shadow-md cursor-pointer"
        />
      </motion.div>

      {/* Text Container */}
      <motion.div
        className="w-full md:w-1/2"
        animate={textControls}
        onMouseEnter={() => setIsTextPaused(true)}
        onMouseLeave={() => setIsTextPaused(false)}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-one mb-2">
          {title}
        </h2>
        <h3 className="text-lg font-semibold text-gray-600 mb-2">
          {subtitle}
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

const TracksSection = () => {
  return (
    <section className="container max-w-7xl mx-auto">
       <div className={`${banner_style} mx-auto tracks-banner`}>
        <h1 className="text-slate-900 text-3xl sm:text-5xl font-bold">
          Conference Tracks
        </h1>
      </div>
      <div className="flex flex-col gap-8">
        {tracks.map((track, index) => (
          <TrackCard key={index} {...track} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};

export default TracksSection;