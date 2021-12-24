import React from 'react';
import TrackPlayer, {
  State as TrackPlayerState,
  Track,
} from 'react-native-track-player';

interface PlayerContextType {
  isPlaying: boolean;
  isPaused: boolean;
  isStopped: boolean;
  isEmpty: boolean;
  isReady: boolean;
  isBuffering: boolean;
  isConnecting: boolean;
  currentTrack: Track | null;
  play: (track?: Track) => void;
  pause: () => void;
}

export const PlayerContext = React.createContext<PlayerContextType>({
  isPlaying: false,
  isPaused: false,
  isStopped: false,
  isEmpty: false,
  isReady: false,
  isBuffering: false,
  isConnecting: false,
  currentTrack: null,
  play: () => null,
  pause: () => null,
});

export const PlayerContextProvider: React.FC = props => {
  const [playerState, setPlayerState] = React.useState<null | TrackPlayerState>(
    null,
  );

  const [currentTrack, setCurrentTrack] = React.useState<null | Track>(null);

  React.useEffect(() => {
    const listener = TrackPlayer.addEventListener(
      'playback-state',
      ({state}: {state: TrackPlayerState}) => {
        setPlayerState(state);
      },
    );

    return () => {
      listener.remove();
    };
  }, []);

  const play = async (track: Track) => {
    if (!track) {
      if (currentTrack) {
        await TrackPlayer.add(track);
      }

      return;
    }

    setCurrentTrack(track);
    await TrackPlayer.play();
  };

  const pause = async () => {
    await TrackPlayer.pause();
  };

  const value: PlayerContextType = {
    isPlaying: playerState === TrackPlayerState.Playing,
    isPaused: playerState === TrackPlayerState.Paused,
    isStopped: playerState === TrackPlayerState.Stopped,
    isEmpty: playerState === null,
    isReady: playerState === TrackPlayerState.Ready,
    isBuffering: playerState === TrackPlayerState.Buffering,
    isConnecting: playerState === TrackPlayerState.Connecting,
    currentTrack,
    pause,
    play,
  };

  return (
    <PlayerContext.Provider value={value}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export const usePlayerContext = () => React.useContext(PlayerContext);
