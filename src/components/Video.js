import React from 'react';

const Video = () => {
  // 2. This code loads the IFrame Player API code asynchronously.
  let tag = document.createElement('script');

  tag.src = 'https://www.youtube.com/iframe_api';
  let firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  let player;

  const onYouTubeIframeAPIReady = () => {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'M71c1UVf-VE',
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  };

  // 4. The API will call this function when the video player is ready.
  const onPlayerReady = (e) => {
    e.target.playVideo();
  };

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  let done = false;
  const onPlayerStateChange = (e) => {
    if (e.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  };

  const stopVideo = () => {
    player.stopVideo();
  };

  return (
    <div className='video-wrapper'>
      <div id='player'></div>
    </div>
  );
};

export default Video;
