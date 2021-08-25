import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";

const Map = () => {
  const origin = useSelector((state) => state.origin);
  const destination = useSelector((state) => state.destination);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!origin || !destination) return;

    mapRef.current.fitToSuppliedMarkers(["start", "end"], {
      edgePadding: { top: 75, right: 75, bottom: 75, left: 75 }, animated: true
    });
  }, [origin, destination]);
  return (
    <MapView
      style={{ flex: 1 }}
      ref={mapRef}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}
      {origin !== null && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Start"
          description={origin.description}
          identifier="start"
          pinColor="black"
        />
      )}
      {destination !== null && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="End"
          description={destination.description}
          identifier="end"
          pinColor="black"
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
