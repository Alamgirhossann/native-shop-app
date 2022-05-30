import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.homeContainer}>
        <View>
          <Image
            style={{
              marginTop: 50,
              marginBottom: 110,
              height: 130,
              width: 130,
            }}
            source={require("../images/LOGO.png")}
          />
        </View>
        <View style={styles.delivery}>
          <View>
            <Image
              style={{ height: 70, width: 70 }}
              source={require("../images/Icon.png")}
            />
          </View>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "SF Pro Display",
              fontWeight: 700,
              color: "#2D0C57",
              textAlign: "center",
              marginHorizontal: 80,
            }}
          >
            Non-Contact Deliveries
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontFamily: "SF Pro Display",
              fontVariant: 400,
              color: "#9586A8",
              marginHorizontal: 10,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            When placing an order, select the option “Contactless delivery” and
            the courier will leave your order at the door.
          </Text>
          <Pressable
            style={{ marginTop: 30, width: "90%",backgroundColor:'#0BCE83',borderRadius:5 }}
            onPress=
            {() => {
              navigation.navigate("Detail");
            }}>
            <Text style={{textAlign:"center", paddingVertical:10,color:"white",fontSize:15}}>order now</Text>
          </Pressable>
          <Pressable
            style={{ marginTop: 30,}}
            >
            <Text style={{textAlign:"center", paddingVertical:10,fontSize:15,color:"#9586A8"}}>Dismiss</Text>
          </Pressable>
        </View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    height: 700,
    backgroundColor: "#A259FF",
  },
  delivery: {
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 420,
    alignItems: "center",
    padding: 10,
  },
});
