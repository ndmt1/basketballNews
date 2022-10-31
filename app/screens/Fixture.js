import { StyleSheet, Text, Alert, View, Image, StatusBar } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import ListFix from "../components/ListFixture";

function Fixture() {
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
   
      <ListFix/>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
  button: {
    borderRadius: 16,
    padding: 1,
  },

  heading: {
    fontSize: 30,
    fontWeight: "700",
  },
});

export default Fixture;
