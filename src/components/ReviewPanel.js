import React from "react";
import ReviewStar from "./ReviewStar";
import LikeDislike from "./LikeDislike";
import PraiseSection from "./PraiseSection";
export default function ReviewPanel({sign, givenDatum}) {
  return (
    <div className="h-[17vh]">
      <div className="text-lg font-bold">{givenDatum.category}</div>
      <div className="text-base font-semibold text-gray-400">{givenDatum.slogan}</div>
     
      <>

      {sign ==='star' ? <ReviewStar rate={givenDatum.rating} /> :sign ==='like'? <LikeDislike />:<PraiseSection/>}
      </>
    </div>
  );
}