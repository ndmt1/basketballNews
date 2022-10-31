import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  VirtualizedList,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';

export default function VideoScreen({ navigation }) {
  const [video, setVideo] = React.useState([
    {
      title: 'Why Netflix shares are down 10%',
      cover_photo:
        'https://img.meta.com.vn/Data/image/2021/05/16/anh-lgbt-22.jpg',
      video_url:
        'https://media.istockphoto.com/videos/woman-waving-a-rainbow-flag-at-the-gay-parade-video-id1216142845',
    },
    {
      title:
        'Apple opens another megastore in China amid William Barr criticism',
      cover_photo:
        'https://image.thanhnien.vn/w1024/Uploaded/2022/bfznsfyr.bn/2018_08_26/grab/bantrethamgiadieuhanhlgbt-grabtaiphodibonguyenhue_anhngocduong30_eujo.jpg',
      video_url:
        'https://media.istockphoto.com/videos/happy-black-woman-waving-rainbow-flag-on-camera-lgbtiqq-movement-video-id1345316966',
    },
    {
      title:
        'Spaceflight Inc. debuts new orbital transfer vehicle for satellite rideshare rocket launches',
      cover_photo:
        'https://cdn.webcool.vn/antoanyte.vn/files/news/2021/04/22/01619097565.jpeg',
      video_url:
        'https://media.istockphoto.com/videos/people-clap-cheer-and-hold-wave-rainbow-flags-as-gay-pride-parade-video-id658669598',
    },
    {
      title:
        'The Calm meditation app is getting its own celebrity-filled HBO Max show',
      cover_photo:
        'https://i.ex-cdn.com/nhadautu.vn/files/content/2019/07/01/02-lgbtq-1043.jpg',
      video_url:
        'https://media.istockphoto.com/videos/happy-multiracial-people-celebrating-gay-pride-event-group-of-friends-video-id1290269569',
    },
  ]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.mainView}>
          <Text style={styles.heading}>Video</Text>
        </View>
        <View style={styles.videoCard}>
          <FlatList
            data={video}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Detail Video')}
                >
                  <View style={styles.videoView}>
                    <Image
                      style={styles.coverPhoto}
                      source={{ uri: item.cover_photo }}
                    />

                    <View>
                      <Text style={styles.postTitle}>{item.title}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          ></FlatList>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    padding: 20,
    paddingLeft: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  videoCard: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  coverPhoto: {
    width: '90%',
    height: 300,
    backgroundColor: 'rgba(0,0,0,0.06)',
    marginTop: 20,
    borderRadius: 10,
  },
  videoView: {
    width: '100%',
    alignItems: 'center',
  },
  postTitle: {
    fontSize: 14,
    margin: 15,
  },
});
