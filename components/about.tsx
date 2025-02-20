"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a <span className="font-medium">28-year-old professional</span>{" "}
        based in <span className="font-medium">Reykjavik, Iceland</span>, with a
        diverse background that blends{" "}
        <span className="font-medium">finance</span>,{" "}
        <span className="font-medium">technology</span>, and{" "}
        <span className="font-medium">fitness coaching</span>. My career journey
        reflects a strong commitment to{" "}
        <span className="font-medium">continuous learning</span>, personal
        growth, and making a meaningful impact on both{" "}
        <span className="font-medium">individuals</span> and{" "}
        <span className="font-medium">society</span>.
      </p>

      <p className="mb-3">
        With an <span className="font-medium">M.Sc. in Finance</span> from{" "}
        <span className="font-medium">ESADE</span>, a{" "}
        <span className="font-medium">B.Sc. in Business Administration</span>{" "}
        with a minor in <span className="font-medium">Computer Science</span>{" "}
        from <span className="font-medium">Reykjavik University</span>, and
        additional certifications in{" "}
        <span className="font-medium">Financial Management</span> and{" "}
        <span className="font-medium">Frontend Development</span>, I possess a
        solid foundation in financial analysis, corporate finance, and
        technological solutions. My professional experiences at{" "}
        <span className="font-medium">Deloitte Iceland</span> and{" "}
        <span className="font-medium">Mar Advisors</span> have honed my skills
        in financial consulting, valuations, investor presentations, and
        corporate finance, enabling me to deliver data-driven insights and
        strategic recommendations.
      </p>

      <p className="mb-3">
        Parallel to my corporate career, I am deeply passionate about{" "}
        <span className="font-medium">sports</span> and{" "}
        <span className="font-medium">personal development</span>. Having
        practiced various sports throughout my life, I currently coach and train
        at a <span className="font-medium">functional fitness gym</span>, where
        I lead <span className="font-medium">CrossFit classes</span> for
        individuals of all ages and abilities. This role not only fuels my
        enthusiasm for health and fitness but also strengthens my leadership,
        motivational, and communication skills.
      </p>

      <p>
        Outside of work, I am an avid reader with a keen interest in{" "}
        <span className="font-medium">finance</span>,{" "}
        <span className="font-medium">technology</span>, and{" "}
        <span className="font-medium">self-development literature</span>. I am
        fascinated by topics that explore the intricacies of the human mind and
        soul, always seeking new perspectives to enhance self-understanding and
        personal growth.
      </p>

      <p>
        Driven by a desire to create impactful contributions to society and help
        others improve, I strive to blend my{" "}
        <span className="font-medium">financial acumen</span>,{" "}
        <span className="font-medium">technical expertise</span>, and{" "}
        <span className="font-medium">coaching experience</span> to inspire
        positive change and support both organizational goals and individual
        aspirations.
      </p>

      <p>
        <span className="italic">My journey is a continuous evolution,</span>{" "}
        always aiming to expand my skills and make a lasting impact.{" "}
        <span className="underline">I believe in the power of growth</span>,
        both professionally and personally, as a means to contribute
        meaningfully to the world around me.
      </p>
    </motion.section>
  );
}
