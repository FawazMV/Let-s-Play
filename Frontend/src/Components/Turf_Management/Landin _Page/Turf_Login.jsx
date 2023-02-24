import React from 'react'

const Turf_Login = () => {
    return (
        <>
            <div className='absolute z-[-5] bg-gray-700 opacity-70 left-0 top-0 w-full h-screen' />
            <div className='absolute z-[-1] flex justify-center w-full h-screen items-center'>
                <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                        <p className="text-sm text-gray-400">Sign in to access your Turf Dashboard</p>
                    </div>
                    <form novalidate="" autoComplete='of' action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-4">
                            <div>
                                <label for="email" className="block mb-2 text-sm">Email address</label>
                                <input autoComplete='of' type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label for="password" className="text-sm">Password</label>
                                    <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">Forgot password?</a>
                                </div>
                                <input type="password" autoComplete='of' name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div>
                                <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Sign in</button>
                            </div>
                            {/* <p className="px-6 text-sm text-center text-gray-400">Don't have an account yet?
                                <a rel="noopener noreferrer" href="#" className="hover:underline text-violet-400">Sign up</a>.
                            </p> */}
                        </div>
                    </form>
                </div></div>
        </>

    )
}

export default Turf_Login