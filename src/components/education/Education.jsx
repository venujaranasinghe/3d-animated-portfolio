import "./education.css";
import { motion, useInView } from "framer-motion";
import React, { useState, useRef, Suspense, lazy } from 'react';

const Scene = lazy(() => import('./Scene')); // Ensure Scene component exists

const textVariants = {
  initial: { x: -100, y: -100, opacity: 0 },
  animate: { x: 0, y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const listVariants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.05 },
  },
};

const services = [
  { id: 1, title: "• Python for Beginners (UoM)", tools: "   View Certificate", counter: 6 },
  { id: 2, title: "• AI/ML Stage 1 (SLIIT)", tools: "   View Certificate", counter: 4 },
  { id: 3, title: "• AI/ML Stage 2 (SLIIT)", tools: "   View Certificate", counter: 3 },
  { id: 5, title: "• AI Foundations: Neural Networks (Linkedin Learning)", tools: "   View Certificate", counter: 1 },
  { id: 6, title: "• AI Foundations: Machine Learning (Linkedin Learning)", tools: "   View Certificate", counter: 1 },
  { id: 7, title: "• Full Stack E-Commerce Projects (GreatStack)", tools: "   View Certificate", counter: 1 },
  { id: 8, title: "• Web Design for Beginners (UoM)", tools: "   View Certificate", counter: 1 },
  { id: 9, title: "• Fundamentals of DevOps On Aws (Simplilearn)", tools: "   View Certificate", counter: 1 },
];

const Education = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);
  // const ref = useRef();
  // const isInView = useInView(ref, { margin: "-200px" });

  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });


  return (
    <div className="education" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          Certificates
        </motion.h1>
        <motion.div
          variants={listVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="serviceList"
        >
          {services.map((service) => (
            <motion.div
              variants={textVariants}
              className="service"
              key={service.id}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="serviceIcon">
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.tools}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="sSection right">
        <Suspense fallback={<div>Loading...</div>}>
          <Scene />
        </Suspense>
      </div>
    </div>


  );
};

export default Education;
