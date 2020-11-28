import React, { Fragment } from "react";
import ReactPlayer from "react-player";

const Heroku = () => {
  return (
    <Fragment>
      <div className="row">
          
        <div className="col s12 m4" style={{ padding: "10px" }}>
            <strong>
            This is one of the simple and the best video tutorials for deployment of React App to Heroku
            </strong>
        </div>
        <div className="col s12 m8" style={{ padding: "10px" }}>
          <div className="video-container">
            <ReactPlayer
              className="react-player"
              url={`https://www.youtube.com/watch?v=dn4mmfbletg`}
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Heroku;
