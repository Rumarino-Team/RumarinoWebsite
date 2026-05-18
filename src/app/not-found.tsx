'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		// Auto-play the video when the component mounts
		if (videoRef.current) {
			videoRef.current.play().catch(console.error);
		}
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 flex items-center justify-center p-4">
			<div className="max-w-2xl mx-auto text-center">
				{/* Video Easter Egg */}
				<div className="mb-8 relative">
					<video
						ref={videoRef}
						className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
						controls
						loop
						muted
						playsInline
					>
						<source src="/videos/not_shrek.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>

				{/* 404 Content */}
				<div className="text-white space-y-6">
					<div className="space-y-2">
						<h1 className="text-8xl font-bold font-headline bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
							404
						</h1>
						<h2 className="text-3xl font-semibold">
							Page Not Found
						</h2>
					</div>

					<p className="text-xl text-blue-100 max-w-md mx-auto">
						Oops, this page does not exist! To compensate for the inconvenience, here's a totally legally obtained movie for you to watch.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
						<Button
							asChild
							variant="default"
							size="lg"
							className="bg-white text-blue-900 hover:bg-blue-50"
						>
							<Link href="/" className="flex items-center gap-2">
								<Home className="h-5 w-5" />
								Return Home
							</Link>
						</Button>

						<Button
							asChild
							size="lg"
							className="border-white text-white hover:bg-white hover:text-blue-900"
							onClick={() => window.history.back()}
						>
							<button className="flex items-center gap-2">
								<ArrowLeft className="h-5 w-5" />
								Go Back
							</button>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
