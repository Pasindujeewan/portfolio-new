"use client";

import { motion } from "framer-motion";

// Central exports keep server components from importing framer-motion directly.
export const MotionDiv = motion.div;
export const MotionSection = motion.section;
