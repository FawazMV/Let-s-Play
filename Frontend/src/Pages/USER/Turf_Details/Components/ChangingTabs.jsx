import BookingCalendar from "./BookingCalendar";

const ChangingTabs = ({ reviews, bookings }) => {
    const [activeTab, setActiveTab] = useState("details");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="w-full shadow">
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex" aria-label="Tabs">
                    <button className={`${activeTab === "details"
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"
                        } w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm uppercase`}
                        onClick={() => handleTabClick("details")} > Book Your Spot
                    </button>
                    <button className={`${activeTab === "reviews"
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"
                        } w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm uppercase`}
                        onClick={() => handleTabClick("reviews")}  >  Reviews & Ratings
                    </button>
                </nav>
            </div>
            <div className="py-8 px-4">
                {activeTab === "details" && (
                    <div>
                        {/* <h2 className="text-lg font-medium text-gray-900">Book Your Spot</h2> */}
                        {/* Add product details content here */}
                        <BookingCalendar bookings={bookings} />
                    </div>
                )}
                {activeTab === "reviews" && (
                    <div>
                        <h2 className="text-lg font-medium text-gray-900"> Reviews</h2>
                        {reviews.map((review) => {
                            return (
                                <div className="review bg-white rounded-lg p-4 shadow-md">
                                    <img className="author-image rounded-full w-10 h-10 mr-2" src={review.authorImage} alt={`${review.authorName}'s profile picture`} />
                                    <div className="author-name font-bold text-gray-700">{review.authorName}</div>
                                    <div className="comment text-gray-600">{review.comment}</div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ChangingTabs