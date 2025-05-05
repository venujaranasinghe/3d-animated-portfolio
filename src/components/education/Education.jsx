"use client"

import { useState, useRef, Suspense, lazy } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Award, ExternalLink, ChevronRight, Search, X, Calendar, MapPin, School } from 'lucide-react'
import "./education.css"

// Lazy load the 3D scene component
//const Scene = lazy(() => import("./Scene"))

const certificates = [
  {
    id: 1,
    title: "Computer Science (UG)",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    date: "2019 - 2023",
    location: "Colombo, Sri Lanka",
    description: "Bachelor's degree in Computer Science with a focus on software engineering, data structures, and algorithms.",
    image: "/certificates/cs-degree.jpg",
    link: "https://example.com/certificate1",
    category: "Degree",
  },
  {
    id: 2,
    title: "Python for Beginners",
    institution: "University of Moratuwa",
    date: "June 2021",
    location: "Moratuwa, Sri Lanka",
    description: "Comprehensive introduction to Python programming language covering fundamentals, data structures, and basic algorithms.",
    image: "/certificates/python.jpg",
    link: "https://example.com/certificate2",
    category: "Programming",
  },
  {
    id: 3,
    title: "AI/ML Stage 1",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    date: "August 2022",
    location: "Colombo, Sri Lanka",
    description: "Introduction to artificial intelligence and machine learning concepts, including supervised and unsupervised learning.",
    image: "/certificates/ai-ml-1.jpg",
    link: "https://example.com/certificate3",
    category: "AI/ML",
  },
  {
    id: 4,
    title: "AI/ML Stage 2",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    date: "November 2022",
    location: "Colombo, Sri Lanka",
    description: "Advanced machine learning techniques including neural networks, deep learning, and practical applications.",
    image: "/certificates/ai-ml-2.jpg",
    link: "https://example.com/certificate4",
    category: "AI/ML",
  },
  {
    id: 5,
    title: "AI Foundations: Neural Networks",
    institution: "LinkedIn Learning",
    date: "January 2023",
    location: "Online",
    description: "Deep dive into neural network architectures, backpropagation, and implementation using modern frameworks.",
    image: "/certificates/neural-networks.jpg",
    link: "https://example.com/certificate5",
    category: "AI/ML",
  },
  {
    id: 6,
    title: "AI Foundations: Machine Learning",
    institution: "LinkedIn Learning",
    date: "February 2023",
    location: "Online",
    description: "Comprehensive overview of machine learning algorithms, feature engineering, and model evaluation techniques.",
    image: "/certificates/machine-learning.jpg",
    link: "https://example.com/certificate6",
    category: "AI/ML",
  },
  {
    id: 7,
    title: "Web Design for Beginners",
    institution: "University of Moratuwa",
    date: "March 2021",
    location: "Moratuwa, Sri Lanka",
    description: "Introduction to web design principles, HTML, CSS, and responsive design techniques.",
    image: "/certificates/web-design.jpg",
    link: "https://example.com/certificate7",
    category: "Web Development",
  },
  {
    id: 8,
    title: "Fundamentals of DevOps On AWS",
    institution: "Simplilearn",
    date: "April 2023",
    location: "Online",
    description: "Overview of DevOps practices and implementation on AWS cloud platform, including CI/CD pipelines and infrastructure as code.",
    image: "/certificates/devops-aws.jpg",
    link: "https://example.com/certificate8",
    category: "Cloud & DevOps",
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const titleVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

const Education = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  
  const sectionRef = useRef()
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" })

  // Filter certificates based on search query and category
  const filteredCertificates = certificates.filter((cert) => {
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         cert.institution.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = activeCategory === "All" || cert.category === activeCategory
    
    return matchesSearch && matchesCategory
  })

  // Get unique categories
  const categories = ["All", ...new Set(certificates.map(cert => cert.category))]

  const openModal = (certificate) => {
    setSelectedCertificate(certificate)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="education-container" ref={sectionRef}>
      <div className="education-content single-column">
        <div className="education-left">
          <motion.h1 
            className="education-title"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Education & Certificates
          </motion.h1>
          
          <motion.div 
            className="education-search-container"
            variants={fadeInVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="search-input-container">
              <Search className="search-icon" size={18} />
              <input 
                type="text" 
                placeholder="Search certificates..." 
                className="education-search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button className="clear-search" onClick={() => setSearchQuery("")}>
                  <X size={16} />
                </button>
              )}
            </div>
            
            <div className="category-filters">
              {categories.map(category => (
                <button 
                  key={category}
                  className={`category-filter ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="certificates-list"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {filteredCertificates.length > 0 ? (
              filteredCertificates.map((certificate) => (
                <motion.div 
                  key={certificate.id} 
                  className="certificate-card"
                  variants={itemVariants}
                  onClick={() => openModal(certificate)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="certificate-icon">
                    <Award size={24} />
                  </div>
                  <div className="certificate-info">
                    <h3>{certificate.title}</h3>
                    <p className="certificate-institution">
                      <School size={14} />
                      {certificate.institution}
                    </p>
                    <p className="certificate-date">
                      <Calendar size={14} />
                      {certificate.date}
                    </p>
                  </div>
                  <div className="certificate-action">
                    <ChevronRight size={20} />
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="no-results"
                variants={fadeInVariants}
              >
                No certificates found matching your search.
              </motion.div>
            )}
          </motion.div>
        </div>
        
        {/* <div className="education-right">
          <Suspense fallback={<div className="scene-loading">Loading 3D Scene...</div>}>
            <Scene />
          </Suspense>
        </div> */}
      </div>
      
      {/* Certificate Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCertificate && (
          <motion.div 
            className="certificate-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="certificate-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <X size={24} />
              </button>
              
              <div className="certificate-modal-content">
                <div className="certificate-modal-image">
                  <img 
                    src={selectedCertificate.image || "/placeholder.svg?height=300&width=500"} 
                    alt={selectedCertificate.title} 
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=300&width=500";
                    }}
                  />
                </div>
                
                <div className="certificate-modal-details">
                  <h2>{selectedCertificate.title}</h2>
                  
                  <div className="certificate-detail">
                    <School size={18} />
                    <p>{selectedCertificate.institution}</p>
                  </div>
                  
                  <div className="certificate-detail">
                    <Calendar size={18} />
                    <p>{selectedCertificate.date}</p>
                  </div>
                  
                  <div className="certificate-detail">
                    <MapPin size={18} />
                    <p>{selectedCertificate.location}</p>
                  </div>
                  
                  <div className="certificate-description">
                    <p>{selectedCertificate.description}</p>
                  </div>
                  
                  <a 
                    href={selectedCertificate.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="view-certificate-btn"
                  >
                    View Certificate <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Education
