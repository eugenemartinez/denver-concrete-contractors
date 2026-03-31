"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
	FaChevronLeft,
	FaChevronRight,
	FaRegEye,
	FaTimes,
} from "react-icons/fa";
import ProjectFeatures from "./ProjectFeatures";
import ModalPortal from "../common/ModalPortal";

const ProjectModal = ({ project, closeModal, navigateProjects }) => {
	const modalContentRef = useRef(null);
	const scrollPositionRef = useRef(0);

	// Close modal when clicking outside
	const handleBackdropClick = (e) => {
		if (
			modalContentRef.current &&
			!modalContentRef.current.contains(e.target)
		) {
			closeModal();
		}
	};

	// Close modal on escape key
	useEffect(() => {
		const handleEscKey = (e) => {
			if (e.key === "Escape") closeModal();
		};

		document.addEventListener("keydown", handleEscKey);

		return () => {
			document.removeEventListener("keydown", handleEscKey);
		};
	}, [closeModal]);

	return (
		<ModalPortal>
			{/* Modal overlay with highest possible z-index */}
			<div
				className="fixed inset-0"
				style={{
					zIndex: 2147483647, // Maximum z-index value (2^31 - 1)
				}}
			>
				<motion.div
					className="flex overflow-y-auto fixed inset-0 justify-center items-center p-4 backdrop-blur-md bg-black/70"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					onClick={handleBackdropClick}
				>
					<motion.div
						className="overflow-auto relative w-full max-w-4xl bg-white rounded-lg shadow-2xl max-h-[90vh]"
						ref={modalContentRef}
						initial={{ scale: 0.9, y: 20, opacity: 0 }}
						animate={{ scale: 1, y: 0, opacity: 1 }}
						exit={{ scale: 0.9, y: 20, opacity: 0 }}
						transition={{ duration: 0.4, type: "spring", damping: 25 }}
					>
						{/* Modal header */}
						<div className="flex sticky top-0 z-10 justify-between items-center p-4 text-white bg-[#2B2B2B]">
							<h3 className="text-xl font-bold">{project.title}</h3>
							<motion.button
								onClick={closeModal}
								className="flex justify-center items-center w-8 h-8 rounded-full hover:text-[#FFCC00]"
								aria-label="Close modal"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
							>
								<FaTimes size={18} />
							</motion.button>
						</div>

						{/* Modal content */}
						<div className="p-0">
							<div className="relative aspect-video">
								<Image
									src={project.image}
									alt={project.title}
									fill
									sizes="(max-width: 1200px) 100vw, 1200px"
									className="object-cover"
									priority
								/>

								{/* Navigation buttons */}
								<motion.button
									onClick={() => navigateProjects("prev")}
									className="flex absolute left-4 top-1/2 justify-center items-center w-10 h-10 text-white bg-black bg-opacity-50 rounded-full transition-colors -translate-y-1/2 hover:text-black hover:bg-[#FFCC00]"
									aria-label="Previous project"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
								>
									<FaChevronLeft size={18} />
								</motion.button>
								<motion.button
									onClick={() => navigateProjects("next")}
									className="flex absolute right-4 top-1/2 justify-center items-center w-10 h-10 text-white bg-black bg-opacity-50 rounded-full transition-colors -translate-y-1/2 hover:text-black hover:bg-[#FFCC00]"
									aria-label="Next project"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
								>
									<FaChevronRight size={18} />
								</motion.button>
							</div>
							<motion.div
								className="p-6"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2, duration: 0.4 }}
							>
								<div className="flex flex-col gap-2 justify-between mb-4 sm:flex-row sm:items-center">
									<h4 className="text-2xl font-bold text-[#2B2B2B]">
										{project.title}
									</h4>
									<span className="inline-block py-1 px-3 text-sm rounded-full bg-[#F5F5F5] text-[#666666]">
										{project.category}
									</span>
								</div>
								<p className="leading-relaxed text-[#666666]">
									{project.description}
								</p>

								{/* Project features */}
								<ProjectFeatures />

								{/* CTA */}
								<motion.div
									className="mt-6"
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.5, duration: 0.4 }}
								>
									<Link
										href="#contact"
										onClick={closeModal}
										className="inline-block py-3 px-6 font-bold tracking-wider text-black uppercase rounded shadow-md transition-colors hover:text-white bg-[#FFCC00] hover:bg-[#2B2B2B]"
									>
										<span className="flex items-center">
											<FaRegEye className="mr-2" /> Request Similar Project
										</span>
									</Link>
								</motion.div>
							</motion.div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</ModalPortal>
	);
};

export default ProjectModal;

