import React, { useRef, useState, useEffect } from 'react';
import { View,Text,TouchableOpacity,StyleSheet,Dimensions } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
const windowWidth = Dimensions.get("window").width;



const VideoItem = ({ mediaUrl, isFocused }) => {
    const video = useRef(null);
    // Play/pause the video based on focus
    const [isPlaying, setIsPlaying] = useState(isFocused);

    // Mute/unmute the video based on focus
    const [isMuted, setIsMuted] = useState(isFocused);

    // Update video playback status when focus changes
    useEffect(() => {
        if (isFocused) {
            setIsPlaying(true);
            setIsMuted(false);
        } else {
            setIsPlaying(false);
            setIsMuted(true);
        }
    }, [isFocused]);

    return (

        <View>

            <View style={PostStyles.detailsContainer}>
                <TouchableOpacity >
                    
                </TouchableOpacity>
                <View style={PostStyles.nameContainer}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity >
                            <Text style={PostStyles.name}>
                                Rohit Nandagawali
                            </Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>

            </View>
            {/* Main Content */}
            <View style={PostStyles.mainContent}>

                <Text style={PostStyles.mainContentText}>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</Text>

             
                    <View style={{ marginTop: 10, backgroundColor: "black" }}>
                        <View style={{ marginTop: 10, backgroundColor: 'black' }}>
                            <Video
                                ref={video}
                                style={{ width: '80%', aspectRatio: 1, alignSelf: 'center' }}
                                source={{
                                    uri: mediaUrl,
                                }}
                                shouldPlay={isPlaying}
                                isMuted={isMuted}
                                resizeMode={ResizeMode.CONTAIN}
                                useNativeControls={false} // You might need custom controls
                            />
                        </View>


                    </View>

            </View>
        </View>
        //     <View style={{ marginTop: 10, backgroundColor: 'black' }}>
        //     <Video
        //       ref={video}
        //       style={{ width: '80%', aspectRatio: 1, alignSelf: 'center' }}
        //       source={{
        //         uri: mediaUrl,
        //       }}
        //       shouldPlay={isPlaying}
        //       isMuted={isMuted}
        //       resizeMode={ResizeMode.CONTAIN}
        //       useNativeControls={false} // You might need custom controls
        //     />
        //   </View>

    );
};


const PostStyles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      paddingHorizontal: 15,
      borderRadius: 15,
      marginBottom: 15,
      position: "relative",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    menu: {
      position: "absolute",
      right: 0,
      top: 20,
    },
    pfp: {
      width: 50,
      height: 50,
      borderRadius: 50,
      marginTop: 10,
    },
    detailsContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    nameContainer: {
      marginLeft: 0.02 * windowWidth,
    },
    name: {
    
      fontSize: 14,
    },
    postDurationText: {
     
      fontSize: 12,
      color: "grey",
      paddingTop: 2,
    },
    mainContent: {
      marginTop: 10,
    },
    mainContentText: {
    
      marginBottom: 10,
    },
    postMedia: {
      width: "100%",
      height: undefined,
      aspectRatio: 16 / 9,
      borderRadius: 15,
      marginTop: 10,
    },
   
    hugCount: {
      color: "#747474",
    
      paddingLeft: 5,
    },
    replyText: {
 
      color: "#747474",
      marginRight: 10,
      paddingLeft: 5,
    },
  });
  
export default VideoItem