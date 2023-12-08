/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dAgn0jYrWxr
 */

export default function IsLoading() {
	return (
		<div className="space-y-4 text-center text-white flex flex-col items-center mt-4">
			<div className="animate-spin ">
				<div className="animate-pulse bg-muted h-12 w-12 rounded-full bg-blue-400/75"></div>
			</div>
			<p className="text-lg font-semibold">Data Music is loading...</p>
		</div>
	);
}
