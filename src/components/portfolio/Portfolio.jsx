import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "framer-motion";


const items = [
    {
        id: 1,
        img: "/1.png",
        title: "React Vite Portfolio",
        desc: "Built with React.js and Vite, highlights my projects, skills, and experience through a fast, responsive, and modern design. It features a dynamic project showcase, smooth navigation, and a clean UI for an engaging user experience",
        link: "https://venujaranasinghe.github.io/portfolio-react/",
    },
    {
        id: 2,
        img: "/7.png",
        title: "3D Animated Portfolio",
        desc: "A visually engaging portfolio with smooth 3D animations, built using React.js and Framer Motion for an immersive experience.",
        link: "https://github.com/venujaranasinghe/3d-animated-portfolio",
    },
    {
        id: 3,
        img: "/3.png",
        title: "Floral Shop Admin Dashboardn",
        desc: "A comprehensive admin dashboard for a floral shop, built with Spring Boot, enabling order management, inventory tracking, and customer interactions.",
        link: "https://github.com/venujaranasinghe/OOAD-Group-Assignment",
    },
    {
        id: 4,
        img: "/4.png",
        title: "MERN Blog App Admin Dashboard",
        desc: "An intuitive admin dashboard for the blog app, providing efficient post management, user controls, and analytics for streamlined content moderation",
        link: "https://github.com/venujaranasinghe/FullStack-Blog/tree/main/backend",
    },
    {
        id: 5,
        img: "/5.png",
        title: "Full-Stack Blogging Platform",
        desc: "A feature-rich blog app built with Next.js and MongoDB, offering seamless content management, dynamic posts, and a smooth user experience.",
        link: "https://github.com/venujaranasinghe/FullStack-Blog",
    },
    {
        id: 6,
        img: "/2.png",
        title: "Wallpaper App",
        desc: "A beautifully designed wallpaper app offering a vast collection of high-quality backgrounds, built for a seamless browsing experience.",
        link: "/",
    },
    {
        id: 7,
        img: "/6.png",
        title: "Dark-Themed Blog App UI",
        desc: "A stylish dark-themed blog UI, designed for a smooth reading experience with elegant typography and a minimalistic layout.",
        link: "https://github.com/venujaranasinghe/FullStack-Blog/tree/main/frontend",
    },
];

const imgVariants = {
    initial: {
        x: -500,
        y: 500,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};

const textVariants = {
    initial: {
        x: 500,
        y: 500,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            staggerChildren: 0.05, // change
        },
    },
};

const ListItem = ({ item }) => {

    const ref = useRef();

    const inInView = useInView(ref, {margin: "-100px"})

    return (
        <div className="pItem" ref={ref}>
            <motion.div variants={imgVariants} animate={inInView ? "animate" : "initial"} className="pImg">
                <img src={item.img} alt="" />
            </motion.div>
            <motion.div variants={textVariants} animate={inInView ? "animate" : "initial"} className="pText">
                <motion.h1 variants={textVariants}>{item.title}</motion.h1>
                <motion.p variants={textVariants}>{item.desc}</motion.p>
                <motion.a variants={textVariants} href={item.link}>
                    <button>View Project</button>
                </motion.a>
            </motion.div>
        </div>
    )
}

const Portfolio = () => {
    //   const [containerDistance, setContainerDistance] = useState(0);
    //  const ref = useRef(null);

    // useEffect(() => {
    //   if (ref.current) {
    //     const rect = ref.current.getBoundingClientRect();
    //     setContainerDistance(rect.left);
    //   }
    // }, []);

    // FIX: Re-calculate when screen size changes
    //   useEffect(() => {
    //     const calculateDistance = () => {
    //       if (ref.current) {
    //         const rect = ref.current.getBoundingClientRect();
    //         setContainerDistance(rect.left);
    //       }
    //     };

    //     calculateDistance();

    //     window.addEventListener("resize", calculateDistance);

    //     return () => {
    //       window.removeEventListener("resize", calculateDistance);
    //     };
    //   }, []);

    //   const { scrollYProgress } = useScroll({ target: ref });


    const [containerDistance, setContainerDistance] = useState(0);

    const ref = useRef(null)

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setContainerDistance(rect.left);
        }
    }, []);

    const { scrollYProgress } = useScroll({ target: ref })

    const xTranslate = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -window.innerWidth * items.length]
    );

    return (
        <div className="portfolio" ref={ref}>

            <motion.div className="pList" style={{ x: xTranslate }}>
                <div className="empty"
                    style={{ width: window.innerWidth - containerDistance }}
                />
                {items.map(item => (
                    <ListItem item={item} key={item.id} />
                ))}
            </motion.div>
            <section />
            <section />
            <section />
            <section />
            <section />
            <section />
            <section />
        </div>
    );
};

export default Portfolio;