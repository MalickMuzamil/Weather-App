import React from 'react'
import './Card2.css'
import { motion } from "framer-motion";


export default function Card2({ items=[] }) {


    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="d-flex flex-wrap section-gap"
        >
            {items.map((it, idx) => (
                <div key={idx} className="now-badge">
                    <strong>{it.label}:</strong> {it.value}
                </div>
            ))}
        </motion.div>
    );
}
