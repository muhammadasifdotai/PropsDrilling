// jub hum component bnaty hay to humay props denay prtay hay.


// This example is get from engineerCode walla
// import React from "react";
// import { View } from "react-native";
// import ComponentA from "./src/components/common/ComponentA";

// let x = 'Alhamdulillah'

// export default function App(): JSX.Element {
//   return (
//     <View>
//       <ComponentA x={x}/>
//     </View>
//   )

// }


// This example is get from chatGPT
import React from 'react';
import { View } from 'react-native';
import ChildComponent from './src/components/common/ChildComponent';

export default function ParentComponent(): JSX.Element{
  return (
    <View>
      <ChildComponent title="Algoace" description="In this company this is my 2nd day and the now time is 12 pm" />
    </View>
  );
};
