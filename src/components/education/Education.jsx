"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Award, ExternalLink, ChevronRight, Search, X, Calendar, MapPin, School, Bookmark, ChevronLeft } from 'lucide-react'
import "./education.css"

const certificates = [
  {
    id: 1,
    title: "Computer Science (UG)",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    date: "2023-2027",
    location: "Colombo, Sri Lanka",
    description:
      "Bachelor's degree in Computer Science with a focus on software engineering, data structures, and algorithms.",
    image: "/certificates/cs-degree.jpg",
    link: "https://example.com/certificate1",
    category: "Degree",
  },
  {
    id: 2,
    title: "Python for Beginners",
    institution: "University of Moratuwa",
    date: "June 2024",
    location: "Moratuwa, Sri Lanka",
    description:
      "Comprehensive introduction to Python programming language covering fundamentals, data structures, and basic algorithms.",
    image: "/c2.png",
    link: "https://example.com/certificate2",
    category: "Programming",
  },
  {
    id: 3,
    title: "AI/ML Stage 1",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    date: "August 2024",
    location: "Colombo, Sri Lanka",
    description:
      "Introduction to artificial intelligence and machine learning concepts, including supervised and unsupervised learning.",
    image: "/c4.png",
    link: "https://example.com/certificate3",
    category: "AI/ML",
  },
  {
    id: 4,
    title: "AI/ML Stage 2",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    date: "November 2024",
    location: "Colombo, Sri Lanka",
    description:
      "Advanced machine learning techniques including neural networks, deep learning, and practical applications.",
    image: "/c5.png",
    link: "https://example.com/certificate4",
    category: "AI/ML",
  },
  {
    id: 5,
    title: "AI Foundations: Neural Networks",
    institution: "LinkedIn Learning",
    date: "January 2024",
    location: "Online",
    description:
      "Deep dive into neural network architectures, backpropagation, and implementation using modern frameworks.",
    image: "/c9.png",
    link: "https://example.com/certificate5",
    category: "AI/ML",
  },
  {
    id: 6,
    title: "AI Foundations: Machine Learning",
    institution: "LinkedIn Learning",
    date: "February 2024",
    location: "Online",
    description:
      "Comprehensive overview of machine learning algorithms, feature engineering, and model evaluation techniques.",
    image: "/c8.png",
    link: "https://example.com/certificate6",
    category: "AI/ML",
  },
  {
    id: 7,
    title: "Web Design for Beginners",
    institution: "University of Moratuwa",
    date: "March 2025",
    location: "Moratuwa, Sri Lanka",
    description: "Introduction to web design principles, HTML, CSS, and responsive design techniques.",
    image: "/c6.png",
    link: "https://example.com/certificate7",
    category: "Web Development",
  },
  {
    id: 8,
    title: "Fundamentals of DevOps On AWS",
    institution: "Simplilearn",
    date: "April 2024",
    location: "Online",
    description:
      "Overview of DevOps practices and implementation on AWS cloud platform, including CI/CD pipelines and infrastructure as code.",
    image: "/c1.png",
    link: "https://example.com/certificate8",
    category: "Cloud & DevOps",
  },
  {
    id: 9,
    title: "Full-Stack E-Commerce Project",
    institution: "GreatStack",
    date: "August 2024",
    location: "Online",
    description:
      "Certificate for completing E-commerce Project using MERN Stack.",
    image: "/c1.png",
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
  const [currentPage, setCurrentPage] = useState(1)
  const certificatesPerPage = 2

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" })

  // Filter certificates based on search query and category
  const filteredCertificates = certificates.filter((cert) => {
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = activeCategory === "All" || cert.category === activeCategory

    return matchesSearch && matchesCategory
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredCertificates.length / certificatesPerPage)
  const indexOfLastCertificate = currentPage * certificatesPerPage
  const indexOfFirstCertificate = indexOfLastCertificate - certificatesPerPage
  const currentCertificates = filteredCertificates.slice(indexOfFirstCertificate, indexOfLastCertificate)

  // Get unique categories
  const categories = ["All", ...new Set(certificates.map((cert) => cert.category))]

  const openModal = (certificate) => {
    setSelectedCertificate(certificate)
    setIsModalOpen(true)
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsModalOpen(false)
    // Restore body scrolling when modal is closed
    document.body.style.overflow = "auto"
  }

  // Handle escape key to close modal
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal()
    }
  }

  // Reset filters and pagination
  const resetFilters = () => {
    setSearchQuery("")
    setActiveCategory("All")
    setCurrentPage(1)
  }

  // Handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // Handle previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  // Handle next page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  // When filters change, reset to first page
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  return (
    <section className="education-section" ref={sectionRef} onKeyDown={handleKeyDown}>
      <div className="container">
        <div className="education-content">
          <motion.div
            className="education-header"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h1 className="education-title">Education & Certificates</h1>
            <p className="education-subtitle">My academic journey and professional certifications</p>
          </motion.div>

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
                onChange={handleSearchChange}
                aria-label="Search certificates"
              />
              {searchQuery && (
                <button className="clear-search" onClick={() => setSearchQuery("")} aria-label="Clear search">
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-filter ${activeCategory === category ? "active" : ""}`}
                  onClick={() => handleCategoryChange(category)}
                  aria-pressed={activeCategory === category}
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
            {currentCertificates.length > 0 ? (
              currentCertificates.map((certificate) => (
                <motion.div
                  key={certificate.id}
                  className="certificate-card"
                  variants={itemVariants}
                  onClick={() => openModal(certificate)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="certificate-category-badge">
                    <Bookmark size={14} />
                    <span>{certificate.category}</span>
                  </div>

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
                    <p className="certificate-location">
                      <MapPin size={14} />
                      {certificate.location}
                    </p>
                  </div>

                  <div className="certificate-action">
                    <span>View Details</span>
                    <ChevronRight size={16} />
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div className="no-results" variants={fadeInVariants}>
                <div className="no-results-icon">
                  <Search size={32} />
                </div>
                <h3>No certificates found</h3>
                <p>Try adjusting your search or filter criteria</p>
                <button className="reset-search-btn" onClick={resetFilters}>
                  Reset Filters
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Pagination */}
          {filteredCertificates.length > 0 && (
            <div className="pagination">
              <button
                className={`pagination-arrow ${currentPage === 1 ? "disabled" : ""}`}
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="pagination-numbers">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    className={`pagination-number ${currentPage === i + 1 ? "active" : ""}`}
                    onClick={() => paginate(i + 1)}
                    aria-label={`Page ${i + 1}`}
                    aria-current={currentPage === i + 1 ? "page" : undefined}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                className={`pagination-arrow ${currentPage === totalPages ? "disabled" : ""}`}
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
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
              <button className="modal-close" onClick={closeModal} aria-label="Close modal">
                <X size={24} />
              </button>

              <div className="certificate-modal-content">
                <div className="certificate-modal-image">
                  <div className="certificate-category-badge modal-badge">{selectedCertificate.category}</div>
                  <img
                    src={selectedCertificate.image || "/placeholder.svg?height=300&width=500"}
                    alt={`${selectedCertificate.title} certificate`}
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=300&width=500"
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
                    <h3>Description</h3>
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
    </section>
  )
}

export default Education
