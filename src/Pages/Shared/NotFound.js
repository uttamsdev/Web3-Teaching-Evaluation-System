import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 dark:text-gray-400">This page does not exist or you don't have permission to visit the page. Thank you</p>
			<Link to="/" rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded bg-gray-200 text-gray-900">Back to homepage</Link>
		</div>
	</div>
</section>
  )
}

export default NotFound;