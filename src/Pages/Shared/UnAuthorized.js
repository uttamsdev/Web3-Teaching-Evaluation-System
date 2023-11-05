import React from 'react'
import { Link } from 'react-router-dom';    

const UnAuthorized = () => {
  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100 animate-pulse transition-all">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-4xl text-center">
			<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">You Attempted an UnAuthorized Access.</p>
			<p className="mt-4 mb-8 dark:text-gray-400">You don't have permission to visit the page</p>
			<Link to="/" rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded bg-gray-200 text-gray-900">Back to homepage</Link>
            <img className='w-1/3 block m-auto mt-10  rounded-3xl	' src="alert.png" alt="" />
		</div>
	</div>
</section>
  )
}

export default UnAuthorized