const ShimmerTurf = () => {
    return (
        <>
            {Array(8)
                .fill("")
                .map((e, index) => (
                    <div key={index} className=" bg-gray-900  animate-pulse">
                        <div className="h-52 bg-gray-500 "></div>
                        <div className="flex flex-col flex-1 p-6">
                            <div className="h-3 bg-gray-700 rounded w-1/3"></div>
                            <div className="flex justify-between mt-3">
                                <div className="h-5 bg-gray-700 rounded w-28"></div>
                                <div className="h-4 bg-gray-700 rounded w-20 "></div>
                            </div>
                            <div className="flex justify-between mt-4 mb-2">
                                <div className="h-3 bg-gray-700 rounded w-8"></div>
                                <div className="h-3 bg-gray-700 rounded w-16 "></div>
                            </div>
                        </div>
                    </div>

                ))}
        </>
    );
};

export default ShimmerTurf;

{/* <div className="rounded-md bg-gray-900 p-6">
    <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-gray-700 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            <div className="space-y-2">
                <div className="h-4 bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            </div>
        </div>
    </div>
</div> */}



