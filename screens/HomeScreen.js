import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import Options from "../components/Options";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setOrigin } from "../store/origin";
import { setDestination } from "../store/destination";

const Home = (props) => {
  const dispatch = useDispatch()
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ height: 100, width: 100, resizeMode: "contain" }}
          source={{
            uri: "https://seekvectorlogo.net/wp-content/uploads/2019/07/uber-technologies-inc-vector-logo.png",
          }}
        />
        <GooglePlacesAutocomplete
          styles={{ container: { flex: 0 }, textInput: {fontSize: 18} }}
          placeholder="Where From?"
          query={{ key: GOOGLE_MAPS_APIKEY, language: "en" }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={500}
          minLength={2}
          enablePoweredByContainer={false}
          fetchDetails={true}
          returnKeyType={'search'}
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }))
            dispatch(setDestination(null))
          }}
        />
        <Options />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
