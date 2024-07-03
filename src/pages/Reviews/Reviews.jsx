import React, { useState } from "react";
import cl from "./Reviews.module.css";
import ReviewCard from "../../components/reviewCard/reviewCard";
import { reviewsScheme } from "../../hardcode/reviews";
import ReviewModal from "../../components/reviewModal/reviewModal";

const Reviews = () => {
    const [reviews, setReviews] = useState(reviewsScheme);
    const [modal, setModal] = useState(false);

    return (
        <div className={cl.wrapper}>
            <div className={cl.header}>
                <h1>Reviews</h1>
                <button onClick={() => setModal(true)}>Make Review</button>
            </div>

            <div className={cl.content}>
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.id}
                        name={review.name}
                        rate={review.rate}
                        text={review.text}
                        date={review.date}
                    />
                ))}
            </div>

            <ReviewModal
                modal={modal}
                setModal={setModal}
                setReviews={setReviews}
                reviews={reviews}
            />
        </div>
    );
};

export default Reviews;
