import React from "react";
import { View } from "react-native";
import ComponentB from "./ComponentB";

export default function ComponentA({x}): JSX.Element {
    return (
        <View>
            <ComponentB x={x}/>
        </View>
    )
}