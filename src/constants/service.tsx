import TrackPlayer , {Event} from 'react-native-track-player';

export default async function trackPlayerServices() {
  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());

  //TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.destroy());

  TrackPlayer.addEventListener(Event.RemoteNext, () => TrackPlayer.skipToNext());

  TrackPlayer.addEventListener(Event.RemotePrevious, () =>
    TrackPlayer.skipToPrevious(),
  );

  // TrackPlayer.addEventListener('playback-track-changed', () => {});

  // TrackPlayer.addEventListener('playback-state', state => {});
}
