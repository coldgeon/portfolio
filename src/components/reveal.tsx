'use client';
import { motion, useReducedMotion } from 'motion/react';
export function Reveal({children, className = ''}:{children:React.ReactNode;className?:string}) {
  const reduced = useReducedMotion();
  return <motion.div
    className={`scroll-reveal ${className}`}
    initial={false}
    animate={reduced ? {opacity:1,y:0} : undefined}
    whileInView={reduced ? undefined : {opacity:[0.2,1],y:[20,0]}}
    viewport={{once:false,amount:'some',margin:'0px 0px -32px 0px'}}
    transition={{duration:reduced ? 0 : 0.6,ease:[0.22,1,0.36,1]}}
  >{children}</motion.div>;
}
