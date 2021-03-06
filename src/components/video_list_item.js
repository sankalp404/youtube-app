import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) =>{
// ES6 {video} is equal to const video = props.video;
  console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={ imageUrl }/>
        </div>

        <div className="media-body">
          <div className="media-heading p-2">
            { title }
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
