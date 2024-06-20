'use client'
import { useScroll,motion } from "framer-motion";
import { useRef } from "react";

const Paragraph = ({value}) =>{
    const element = useRef(null);
    const {scrollYProgress} = useScroll({
        target : element,
        offset: ['start 0.9', 'start start']
    });
    


    return(
        <motion.div className="bg-black text-white text-5xl max-w-auto max-h-full rounded-lg shadow-lg">
            <motion.p
            ref={element}
            style={{opacity: scrollYProgress}}

            >{value}
            </motion.p>
        </motion.div>
    )
};


export default Paragraph;
