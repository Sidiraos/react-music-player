const ErrorFetching = ({ errMsg }) => {
	return (
		<div
			className="rounded-lg border bg-white text-card-foreground shadow-sm max-w-md mx-auto mt-10"
			data-v0-t="card"
		>
			<div className="flex flex-col space-y-1.5 p-6">
				<div className="flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						className="h-8 w-8 text-red-500 mr-2"
					>
						<circle cx="12" cy="12" r="10"></circle>
						<line x1="12" x2="12" y1="8" y2="12"></line>
						<line x1="12" x2="12.01" y1="16" y2="16"></line>
					</svg>
					<h3 className="text-2xl font-semibold leading-none tracking-tight">
						404 - Page Not Found
					</h3>
				</div>
			</div>
			<div className="p-6 text-center">
				<div className="text-sm [&amp;_p]:leading-relaxed mb-4">
					The page you were looking for could not be found.
					{errMsg}
				</div>
			</div>
		</div>
	);
};
export default ErrorFetching;
