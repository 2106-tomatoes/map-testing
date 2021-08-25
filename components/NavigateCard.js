import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import tw from "tailwind-react-native-classnames";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../store/destination";
import { useNavigation } from "@react-navigation/core";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation()

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Text style={tw`text-2xl text-center py-5`}>Hello</Text>
      <View style={tw`flex-shrink border-t border-gray-200`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            styles={styles}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={500}
            enablePoweredByContainer={false}
            fetchDetails={true}
            minLength={2}
            returnKeyType={"search"}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard")
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "white",
    paddingTop: 20,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 20,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
