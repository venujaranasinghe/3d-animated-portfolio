import React, { useState, useRef, Suspense, lazy } from 'react';
import { motion, useInView } from "framer-motion";
import "./services.css";
import Counter from './Counter'; // Ensure Counter component exists

const Scene = lazy(() => import('./Scene')); // Ensure Scene component exists

const textVariants = {
  initial: { x: -100, y: -100, opacity: 0 },
  animate: { x: 0, y: 0, opacity: 1, transition: { duration: 1 } },
};

const listVariants = {
  initial: { x: -100, opacity: 0 },
  animate: { 
    x: 0, 
    opacity: 1, 
    transition: { duration: 1, staggerChildren: 0.5 } 
  },
};

const services = [
  { id: 1, img: "/ui.png", title: "Front-End Development & UI Design", tools: "Tools: Html, Css, ReactJs, NextJs, Figma", counter: 6 },
  { id: 2, img: "/be.png", title: "Back-End Development & API Integration", tools: "Tools: Java Springboot, Python Jango", counter: 4 },
  { id: 3, img: "/bd.png", title: "Database Design and Management", tools: "Tools: Mysql, Mongodb, Postresql", counter: 3 },
  { id: 4, img: "/ml.png", title: "Machine Learning", tools: "Tools: Python", counter: 1 },
];

const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1 
          variants={textVariants} 
          initial="initial" 
          animate={isInView ? "animate" : "initial"} 
          className="sTitle"
        >
          How do I help?
        </motion.h1>
        <motion.div 
          variants={listVariants} 
          initial="initial" 
          animate={isInView ? "animate" : "initial"} 
          className="serviceList"
        >
          {services.map(service => (
            <motion.div 
              variants={listVariants} 
              className="service" 
              key={service.id} 
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="serviceIcon">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.tools}</h3>
                <h3>{service.counter} Projects</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={7} text="Projects Completed" />
          <Counter from={0} to={2} text="Happy Clients" />
        </div>
      </div>

      <div className="sSection right">
        <Suspense fallback={<div>Loading...</div>}>
          <Scene />
        </Suspense>
      </div>
    </div>
  );
};

export default Services;
