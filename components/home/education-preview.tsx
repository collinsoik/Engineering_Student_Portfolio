'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Globe } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { education } from '@/lib/constants';

export function EducationPreview() {
	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="container px-4">
				<SectionHeader
					title="Education"
					description="Academic foundation in engineering that fuels my passion for building innovative solutions and tackling complex technical challenges."
				/>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
				>
					{education.map((item, index) => (
						<motion.div
							key={index}
							variants={fadeIn('up', 0.2 + index * 0.1)}
						>
							<Card className="card-gradient h-full hover:shadow-lg transition-shadow">
								<CardContent className="p-6">
									<div className="flex items-start justify-between mb-4">
										<div className="flex items-center">
											{item.field.includes('Exchange') ? (
												<Globe className="h-6 w-6 text-primary mr-3" />
											) : (
												<GraduationCap className="h-6 w-6 text-primary mr-3" />
											)}
											<div>
												<h3 className="font-semibold text-lg">{item.degree}</h3>
												<p className="text-primary font-medium">{item.field}</p>
											</div>
										</div>
										{item.gpa && (
											<Badge variant="secondary" className="ml-2">
												GPA: {item.gpa}
											</Badge>
										)}
									</div>

									<div className="mb-4">
										<p className="font-medium text-muted-foreground">{item.institution}</p>
										<p className="text-sm text-muted-foreground">{item.location}</p>
										<p className="text-sm text-muted-foreground">
											{item.startDate} - {item.endDate}
										</p>
									</div>

									{item.achievements && item.achievements.length > 0 && (
										<div>
											<h4 className="text-sm font-semibold mb-2">Key Highlights:</h4>
											<ul className="space-y-1">
												{item.achievements.map((achievement, achievementIndex) => (
													<li
														key={achievementIndex}
														className="text-sm text-muted-foreground flex items-start"
													>
														<span className="text-primary mr-2">•</span>
														{achievement}
													</li>
												))}
											</ul>
										</div>
									)}
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					variants={fadeIn('up', 0.5)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="text-center mt-10"
				>
					<Button asChild>
						<Link href="/education">
							View Full Education Details <ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</motion.div>
			</div>
		</section>
	);
}