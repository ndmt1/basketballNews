import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  VirtualizedList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";

export default function VideoScreen({ navigation }) {
  const [video, setVideo] = React.useState([
    {
      title: "Steph Curry The Goddest",
      cover_photo:
        "https://media0.giphy.com/media/3oEdv5e5Zd2gsczAhG/giphy.gif?cid=ecf05e47xy4kd2ezlloj91cl90k8hdrqj4rjafsgg90qdp06&rid=giphy.gif&ct=g",
      video_url:
        "https://media.istockphoto.com/videos/woman-waving-a-rainbow-flag-at-the-gay-parade-video-id1216142845",
    },
    {
      title: "Kobe Bryant's",
      cover_photo:
        "https://media1.giphy.com/media/3ornk5Q8IO6gpwDrAQ/giphy.gif?cid=ecf05e47xy4kd2ezlloj91cl90k8hdrqj4rjafsgg90qdp06&rid=giphy.gif&ct=g",
      video_url:
        "https://media.istockphoto.com/videos/woman-waving-a-rainbow-flag-at-the-gay-parade-video-id1216142845",
    },
    {
      title:
        "Los Angeles's 2pts",
      cover_photo:
        "https://media4.giphy.com/media/3o6Ztati8hmTqlCUPC/giphy.gif?cid=ecf05e47ax8zpagr9o2yy2vaghchm7yzj7kxoczg05q9vdxa&rid=giphy.gif&ct=g",
      video_url:
        "https://media.istockphoto.com/videos/happy-black-woman-waving-rainbow-flag-on-camera-lgbtiqq-movement-video-id1345316966",
    },
    {
      title:
        "It's over! Just no more hope",
      cover_photo:
        "https://media3.giphy.com/media/1QjvDoZRq3ySdU9k54/giphy.gif?cid=ecf05e4751gmjj67q1iu3uqnhs9pidh6240snrpupoe7nbvl&rid=giphy.gif&ct=g",
      video_url:
        "https://media.istockphoto.com/videos/people-clap-cheer-and-hold-wave-rainbow-flags-as-gay-pride-parade-video-id658669598",
    },
    {
      title:
        "Funny moments with NBA",
      cover_photo:
        "https://media3.giphy.com/media/mC1B3LPi42qffx7val/giphy.gif?cid=ecf05e47vcncyz918fhnp1dbf0t1in2zssptz31p2kl3pq6v&rid=giphy.gif&ct=g",
      video_url:
        "https://media.istockphoto.com/videos/happy-multiracial-people-celebrating-gay-pride-event-group-of-friends-video-id1290269569",
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', zIndex: 1, alignSelf: 'center', paddingTop: 70, paddingBottom: 10, backgroundColor: "#ef7f4d", width: '100%', height: 130, borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
            <View style={styles.image}>
              <Image
                style={{ height: 65, width: 65}}
                source={require("../assets/logo.png")}
              ></Image>
            </View>
          </View>
        <ScrollView 
        style={{ marginTop: StatusBar.currentHeight }}>

          <View style={styles.background}>
            <View style={styles.image}>
              <Image
                style={{ height: 65, width: 65}}
                source={require("../assets/logo.png")}
              ></Image>
            </View>
          </View>
        <View style={styles.footer}>
          <View style={styles.videoCard}>
            <FlatList
              data={video}
              keyExtractor={(item) => item.title}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Detail Video")}
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
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: "700",
  },

  container: {
    flex: 1,
    backgroundColor: "#ef7f4d",
  },

  background: {
    flex: 1,
    marginTop: 70,
    paddingBottom: 10,
  },

  footer: {
    flex: 12,
    backgroundColor: "#f5f5f5",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -15,
  },
  videoCard: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  coverPhoto: {
    width: "90%",
    height: 300,
    backgroundColor: "rgba(0,0,0,0.06)",
    marginTop: 20,
    borderRadius: 10,
  },
  videoView: {
    width: "100%",
    alignItems: "center",
  },
  postTitle: {
    fontSize: 16,
    margin: 15,
    width: 360,
    alignSelf: 'center'
  },
});
