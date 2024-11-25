'use client'
import { CSSProperties, ReactNode, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from 'framer-motion'

type RevealProps = {
    children: ReactNode;
    slideFromSide?: boolean;
    style?: CSSProperties | undefined;
    className?: string | undefined
}

function Reveal({ children, slideFromSide, style, className }: RevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start(isFromSide ? { x: 0, opacity: 1 } : 'visible')
        }
    }, [isInView])

    const isFromSide = slideFromSide !== undefined && slideFromSide

    return (
        <div ref={ref} className={className} style={style !== undefined ? style : { position: 'relative', overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 20, y: 100 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial={isFromSide ? { x: -95, opacity: 0 } : 'hidden'}
                animate={mainControls}
                transition={isFromSide ? { type: 'inertia', velocity: 120, duration: 0.4, delay: 0.2 } : { duration: 1, delay: 0.35 }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default Reveal;

// transition = {{ type: 'inertia', velocity: 120, duration: 0.4, delay: 0.2 }}
// animate = {{ x: 0, opacity: 1 }}
// initial = {{ x: -100, opacity: 0 }}