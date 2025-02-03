import Speech from "./Speech"
import "./hero.css"
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hSection left">
                <h1 className="hTitle">
                    Hi,
                    <br />
                    <span>I'm Venuja</span>
                </h1>
                <div className="awards">
                    <h2>A Computer Science Undergraduate
                        <br />
                        Web Developer & Machine Learning Enthusiast
                    </h2>
                    <p>As a passionate computer science student, I specialize in building responsive websites and applications. Check out my latest projects</p>
                    <div className="awardList">
                        <img src="/git.gif" alt="" />
                        <img src="/up.png" alt="" />
                        <img src="/stack.png" alt="" />
                    </div>
                </div>
                <a href="#services" className="scroll">
                    <svg
                        width="50px"
                        height="50px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
                            stroke="black"
                            strokeWidth="1"
                        />
                        <motion.path
                            animate={{ y: [0, 5] }}
                            transition={{
                                repeat: Infinity,
                                duration: 4,
                                ease: "easeInOut",
                            }}
                            d="M12 5V8"
                            stroke="black"
                            strokeWidth="1"
                            strokeLinecap="round"
                        />
                    </svg>
                </a>
            </div>

            <div className="hSection right">
                <Speech />
                {/* <div className="follow">
                    <a href="/">
                        <img src="/insta.png" alt="" />
                        <img src="/fb.png" alt="" />
                        <img src="/linkedin.png" alt="" />
                    </a>
                    <div className="followTextContainer">
                        <div className="followText">
                            VISIT ME!
                        </div>
                    </div>
                </div> */}
                {/* BUBBLE */}
                
                {/* CONTACT BUTTON */}
                <motion.a
                    href="/#contact"
                    className="contactLink"
                    animate={{
                        x: [200, 0],
                        opacity: [0, 1],
                    }}
                    transition={{
                        duration: 2,
                    }}
                >
                    <motion.div
                        className="contactButton"
                        animate={{ rotate: [0, 360] }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <svg viewBox="0 0 200 200" width="150" height="150">
                            <circle cx="100" cy="100" r="90" fill="lightblue" />
                            <path
                                id="innerCirclePath"
                                fill="none"
                                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                            />
                            <text className="circleText">
                                <textPath href="#innerCirclePath">Hire Now •</textPath>
                            </text>
                            <text className="circleText">
                                <textPath href="#innerCirclePath" startOffset="44%">
                                    Contact Me •
                                </textPath>
                            </text>
                        </svg>
                        <div className="arrow">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="50"
                                height="50"
                                fill="none"
                                stroke="black"
                                strokeWidth="2"
                            >
                                <line x1="6" y1="18" x2="18" y2="6" />
                                <polyline points="9 6 18 6 18 15" />
                            </svg>
                        </div>
                    </motion.div>
                </motion.a>
            </div>
        </div>
    )
}

export default Hero 