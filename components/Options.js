import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const data = [
  {
    id: "1234",
    title: "Find a ride",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-lamborghini-huracan-evo-mmp-1-1600293029.jpg?crop=0.889xw:1.00xh;0.0561xw,0&resize=640:*",
    component: "Map",
  },
  {
    id: "5678",
    title: "Grab Food",
    image:
      "https://www.ocregister.com/wp-content/uploads/2018/07/0729-OPENSHUT-POTBELLY-Turkey-1.jpg",
    component: "Food",
  },
];

const Options = () => {
  const navigation = useNavigation();
  const origin = useSelector(state => state.origin)

  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.component)}
            style={tw`p-2 pt-6 pb-8 pt-4 bg-gray-300 m-2`}
            disabled={!origin}
          >
            <View style={tw`${!origin && "opacity-20"}`}>
              <Image
                style={{ height: 150, width: 150, resizeMode: "contain" }}
                source={{ uri: item.image }}
              />
              <Text style={tw`mt-2 text-center font-semibold text-lg`}>
                {item.title}
              </Text>
              <Icon style={styles.icon} name="navigate-next" color="white" />
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default Options;

const styles = StyleSheet.flatten({
  icon: {
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 9999,
    width: 25,
    marginLeft: 63,
  },
});
