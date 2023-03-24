import { useState } from "react";
import ReviewModal from "./Components/ReviewModal";

const ReviewTab = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <button type="button" onClick={() => setOpen(true)} className="px-5 flex float-right py-3 font-semibold border rounded border-gray-100 text-gray-100">
                <span>
                    <svg fill="currentColor" className="mr-2 w-6 h-6" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                </span>
                Add Your Review
            </button>

            {open && <ReviewModal onClose={() => setOpen(false)} open={open} />}
            <h2 className="text-lg font-medium text-gray-900"> Reviews</h2>
            {/* {
                reviews.map((review) => {
                    return (
                        <div className="review bg-white rounded-lg p-4 shadow-md">
                            <img className="author-image rounded-full w-10 h-10 mr-2" src={review.authorImage} alt={`${review.authorName}'s profile picture`} />
                            <div className="author-name font-bold text-gray-700">{review.authorName}</div>
                            <div className="comment text-gray-600">{review.comment}</div>
                        </div>
                    );
                })
            } */}
        </>
    )
}
export default ReviewTab