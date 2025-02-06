import { Suspense } from "react";
import Shape from "./Shape";
import Speech from "./Speech"
import "./hero.css"
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";

const awardVariants = {
    initial: {
        x: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
        },
    },
};

const followVariants = {
    initial: {
        y: -100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
        },
    },
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="hSection left">
                <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="hTitle">
                    Hello there!
                    <br />
                    <span>I'm Venuja</span>
                </motion.h1>
                <motion.div variants={awardVariants}
                    initial="initial"
                    animate="animate"
                    className="awards">
                    <motion.h2 variants={awardVariants} >A Computer Science Undergraduate,
                        Web Developer & Machine Learning Enthusiast
                    </motion.h2>
                    <motion.p variants={awardVariants} >As a passionate computer science student, I specialize in building responsive websites and applications. Check out my latest projects.</motion.p>
                    <motion.img variants={awardVariants} src="/gitnew.png" alt="" />
                    {/* <div className="awardList">
                        <h2>Let's Connect!</h2>
                        <img src="/up.png" alt="" />
                        <img src="/stack.png" alt="" />
                    </div> */}
                </motion.div>
                <motion.a
                    animate={{ y: [0, 5], opacity: [0, 1, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut",
                    }}
                    href="#services"
                    className="scroll"
                >
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
                </motion.a>
            </div>

            <div className="hSection right">
                <Speech />
                <motion.div
                    variants={followVariants}
                    initial="initial"
                    animate="animate" className="social">
                    <motion.h2 variants={followVariants}>Let's Connect!</motion.h2>
                    <motion.a variants={followVariants} href="/">
                        <img src="/instanew.png" alt="" />
                    </motion.a>
                    <motion.a variants={followVariants} href="/">
                        <img src="/fbnew.png" alt="" />
                    </motion.a>
                    <motion.a variants={followVariants} href="/">
                        <img src="/linkedinnew.png" alt="" />
                    </motion.a>
                </motion.div>
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
            <div className="bg">
                <Canvas>
                    <Suspense fallback="loading...">
                        <Shape />
                    </Suspense>
                </Canvas>
                <div className="hImg">
                    <img src="/v2.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero 