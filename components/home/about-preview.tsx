'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn } from '@/lib/motion';

export function AboutPreview() {
	return (
		<section className="py-16 md:py-24">
			<div className="container px-4">
				<SectionHeader
					title="About Me"
					description="Passionate engineer who loves turning ideas into reality through hands-on building, creative problem-solving, and innovative engineering solutions."
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="relative h-[400px] rounded-lg overflow-hidden"
					>
						<Image
							src="/about-me.jpg"
							alt="Collin Soik - Engineer portrait"
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>

					<motion.div
						variants={fadeIn('left', 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="flex flex-col justify-center"
					>
						<h3 className="text-2xl font-bold mb-4">Engineer & Builder</h3>
						<p className="text-muted-foreground mb-6">
							I'm an engineering student who thrives on building things from the ground up. Whether it's designing FPGA control systems,
							developing full-stack applications, or creating hardware monitoring solutions, I love the entire process of turning concepts
							into working systems that solve real problems. My passion lies in hands-on engineering and creative problem-solving.
						</p>

						<div className="grid grid-cols-2 gap-4 mb-6">
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">GPA</h4>
									<p className="text-sm text-muted-foreground">3.94/4.0</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Projects Built</h4>
									<p className="text-sm text-muted-foreground">7+ Systems</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Users Impacted</h4>
									<p className="text-sm text-muted-foreground">5,000+ Users</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Technologies</h4>
									<p className="text-sm text-muted-foreground">Hardware + Software</p>
								</CardContent>
							</Card>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}