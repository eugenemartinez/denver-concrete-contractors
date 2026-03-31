"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	FaGithub,
	FaCheckCircle,
	FaTimes,
	FaExternalLinkAlt,
} from "react-icons/fa";

const DemoEndModal = ({ isOpen, onClose }) => {
	const themeUrl =
		"https://github.com/eugenemartinez/denver-concrete-contractors/tree/main/theme";

	const backdropVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	const modalVariants = {
		hidden: { opacity: 0, scale: 0.9, y: 20 },
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: { type: "spring", duration: 0.5, bounce: 0.3 },
		},
		exit: {
			opacity: 0,
			scale: 0.9,
			y: 20,
			transition: { duration: 0.3 },
		},
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<div className="flex fixed inset-0 justify-center items-center p-4 z-[100]">
					<motion.div
						className="absolute inset-0 bg-black/60 backdrop-blur-sm"
						variants={backdropVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
						onClick={onClose}
					/>

					<motion.div
						className="overflow-hidden relative w-full max-w-lg bg-white rounded-xl shadow-2xl"
						variants={modalVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
					>
						{/* Header Accent - matching your brand yellow */}
						<div className="w-full h-2 bg-[#FFCC00]" />

						<button
							onClick={onClose}
							className="absolute top-4 right-4 p-2 transition-colors cursor-pointer text-[#666666] hover:text-[#2B2B2B]"
						>
							<FaTimes size={20} />
						</button>

						<div className="p-8 text-center">
							<motion.div
								className="inline-flex justify-center items-center mb-6 w-16 h-16 text-green-600 bg-green-50 rounded-full"
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ delay: 0.2, type: "spring" }}
							>
								<FaCheckCircle size={32} />
							</motion.div>

							<h3 className="mb-2 text-2xl font-bold text-[#2B2B2B]">
								Project Demo Complete
							</h3>

							<p className="mb-8 leading-relaxed text-[#666666]">
								Thanks for exploring the Denver Concrete Contractors interface!
								This Next.js build serves as the architectural blueprint for the
								high-performance WordPress theme.
							</p>

							<div className="space-y-4">
								<a
									href={themeUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="flex gap-3 justify-center items-center py-4 px-6 w-full font-bold text-black rounded-lg shadow-md transition-all hover:text-white bg-[#FFCC00] hover:bg-[#2B2B2B]"
								>
									<FaGithub size={20} />
									<span>View Theme Source</span>
									<FaExternalLinkAlt size={14} className="opacity-50" />
								</a>

								<button
									onClick={onClose}
									className="py-3 px-6 w-full font-medium bg-gray-100 rounded-lg transition-colors cursor-pointer hover:bg-gray-200 text-[#666666]"
								>
									Return to Interface
								</button>
							</div>

							<div className="flex gap-6 justify-center pt-6 mt-8 font-mono tracking-widest uppercase border-t border-gray-100 text-[10px] text-[#999999]">
								<span>Next.js</span>
								<span>WordPress</span>
								<span>Framer Motion</span>
							</div>
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
};

export default DemoEndModal;
