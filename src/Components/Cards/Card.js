import React from "react";
import { motion } from "framer-motion";
import { Card as BsCard } from "react-bootstrap";

export default function Card({ icon, label, value }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="stat-card text-center p-3"
    >
      <BsCard.Body>
        <div className="fs-1 mb-2">{icon}</div>
        <h5>{label}</h5>
        <p className="fw-bold fs-5">{value}</p>
      </BsCard.Body>
    </motion.div>
  );
}
