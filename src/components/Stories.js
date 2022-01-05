import React from "react";

import { PoliticsContext } from "../context/context";

const Stories = () => {
  const { isSpinnerLoading, hits, removeStory } =
    React.useContext(PoliticsContext);

  console.log("isSpinnerLoading", isSpinnerLoading);
  // console.log("isLoading", isLoading);

  if (isSpinnerLoading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="stories">
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story;
        return (
          <article key={objectID} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author} | </span> {num_comments}comments
            </p>
            <div>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="read-link"
              >
                Read More
              </a>
              <button className="remove-btn" onClick={() => removeStory(objectID)}>
                Remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
