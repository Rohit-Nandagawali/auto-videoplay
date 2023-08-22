import React, { useRef, useState, useCallback,useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import VideoFlatList from './components/VideoFlatList';


// const VideoItem = ({ mediaUrl, isFocused }) => {
//   const video = useRef(null);
//   // Play/pause the video based on focus
//   const [isPlaying, setIsPlaying] = useState(isFocused);

//   // Mute/unmute the video based on focus
//   const [isMuted, setIsMuted] = useState(isFocused);

//   // Update video playback status when focus changes
//   useEffect(() => {
//     if (isFocused) {
//       setIsPlaying(true);
//       setIsMuted(false);
//     } else {
//       setIsPlaying(false);
//       setIsMuted(true);
//     }
//   }, [isFocused]);

//   return (
//     <View style={{ marginTop: 10, backgroundColor: 'black' }}>
//       <Video
//         ref={video}
//         style={{ width: '100%', aspectRatio: 1, alignSelf: 'center' }}
//         source={{
//           uri: mediaUrl,
//         }}
//         shouldPlay={isPlaying}
//         isMuted={isMuted}
//         resizeMode={ResizeMode.CONTAIN}
//         useNativeControls={false} // You might need custom controls
//       />
//     </View>
//   );
// };

// const VideoFlatList = ({ videoData }) => {
//   const [focusedIndex, setFocusedIndex] = useState(-1);

//   // Calculate which video is in focus
//   const onViewableItemsChanged = useCallback(({ viewableItems }) => {
//     if (viewableItems.length > 0) {
//       const maxAreaItem = viewableItems.reduce((prev, curr) =>
//         curr.item.area > prev.item.area ? curr : prev
//       );
//       setFocusedIndex(maxAreaItem.index);
//     }
//   }, []);

//   return (
//     <FlatList
//       data={videoData}
//       keyExtractor={(item) => item.id.toString()}
//       renderItem={({ item, index }) => (
//         <VideoItem mediaUrl={item.url} isFocused={index === focusedIndex} />
//       )}
//       onViewableItemsChanged={onViewableItemsChanged}
//       viewabilityConfig={{ itemVisiblePercentThreshold: 50 }} // Adjust threshold as needed
//     />
//   );
// };

// Example usage

const videoData = [
  { id: 1, url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
  { id: 2, url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
  { id: 3, url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
  { id: 4, url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
  { id: 5, url:  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"},
  // ... other video items
];


function App() {
  return (
    <View style={{ flex: 1 }}>
      <VideoFlatList videoData={videoData} />
      {/* <VideoFlatList */}
    </View>
  );
}

export default App;
