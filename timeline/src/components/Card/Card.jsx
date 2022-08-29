import React from 'react';
import styles from "./Card.module.scss";
import { motion } from "framer-motion";


export function Card(props) {
    const fecha =  props.fecha;
    const par = props.par;
    const coverTitle = props.coverTitle;
    const photo = props.photo;
    const title = props.title;
    const style = props.style;

    return (
        <motion.div className={styles.card}
        initial={{
            opacity: 0
        }}
        whileInView = {{
            opacity:1
        }} transition = {{
            delay: 0.3,
            default: { ease: "linear" }
        }}>
            <motion.span
            initial={{
                opacity: 0,
                scale: 0.5
            }}
            whileInView = {{
                opacity:1,
                scale: 1
            }} transition = {{
                delay: 0.3,
                default: { ease: "linear" }
            }}>{fecha}</motion.span>
            <p>{par}</p>
            <div className={styles.cover}>
                <motion.h1 style={style}
                initial={{
                    opacity: 0.5,
                    translateX: -90
                }}
                whileInView = {{
                    opacity:1,
                    translateX:-40
                }} 
                transition = {{
                    delay: 0.5,
                    type: "tween",
                    duration: 1
                }}>{coverTitle}</motion.h1>
                <div className={styles.imgContainer}>
                    <motion.img src={photo} alt="HTML"
                    initial={{
                        opacity: 0,
                        scale: 0.5
                    }}
                    whileInView = {{
                        opacity:1,
                        scale: 1
                    }} transition = {{
                        delay: 0.3,
                        default: { ease: "linear" }
                    }}/>
                </div>
            </div>
            <motion.h2
            initial={{
                opacity: 0.5,
                translateX: 90
            }}
            whileInView = {{
                opacity:1,
                translateX:0
            }} 
            transition = {{
                delay: 0.01,
                type: "tween",
                duration: 1
            }}>{title}</motion.h2>
            </motion.div>
    );

};