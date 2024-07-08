import React from "react";
import { Text, View } from "react-native";

export default function ComponentB({x}): JSX.Element {
    return (
        <View>
            <Text>First of all I wanna say: {x}</Text>
        </View>
    )
}