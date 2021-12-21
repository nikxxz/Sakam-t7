import TrackPlayer from 'react-native-track-player';

export default async function trackPlayerServices() {
  TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());

  TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());

  TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.destroy());
  
  TrackPlayer.addEventListener('remote-next', () => TrackPlayer.skipToNext());
  TrackPlayer.addEventListener('remote-previous', () => TrackPlayer.skipToPrevious());

  TrackPlayer.addEventListener('remote-next', () => TrackPlayer.skipToNext());

  TrackPlayer.addEventListener('remote-previous', () =>
    TrackPlayer.skipToPrevious(),
  );

  TrackPlayer.addEventListener('playback-track-changed', () => {});

  TrackPlayer.addEventListener('playback-state', state => {});
}
