import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

export default function VideoDetail({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [statusSecordVideo, setStatusSecondVideo] = React.useState({});

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ height: 400, backgroundColor: 'grey', width: '100%' }}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: 'https://media.istockphoto.com/videos/woman-waving-a-rainbow-flag-at-the-gay-parade-video-id1216142845',
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </View>
      <Text style={styles.videoTitle}>Why Netflix shares are down 10%</Text>
      <Text style={styles.author}>
        By Steven W.Thrasher | May 30, 2022 - 12:24
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  videoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#646464',
  },
  author: {
    fontSize: 14,
    color: '#646464',
    marginTop: 20,
  },
  video: {
    alignSelf: 'center',
    width: 420,
    height: 400,
  },
});
