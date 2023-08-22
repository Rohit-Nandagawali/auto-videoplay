import React, { useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import VideoItem from './VideoItem';



const VideoFlatList = ({ videoData }) => {
    const [focusedIndex, setFocusedIndex] = useState(-1);
  
    // Calculate which video is in focus
    const onViewableItemsChanged = useCallback(({ viewableItems }) => {
      if (viewableItems.length > 0) {
        const maxAreaItem = viewableItems.reduce((prev, curr) =>
          curr.item.area > prev.item.area ? curr : prev
        );
        setFocusedIndex(maxAreaItem.index);
      }
    }, []);
  
    return (
      <FlatList
        data={videoData}
        contentContainerStyle={{ paddingBottom: 300 }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <VideoItem mediaUrl={item.url} isFocused={index === focusedIndex} />
       
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }} // Adjust threshold as needed
      />
    );
  };
  
export default VideoFlatList;