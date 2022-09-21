import React from "react";
import { View } from "react-native";
import { DuoInfo } from "../DuoInfo";

import { styles } from "./styles";

export interface DuoCardProps {}

export function DuoCard() {
  return (
    //Stoped in 2:03h of 4th class
    <View style={styles.container}>
      <DuoInfo label={"nome"} value={"Batata"}></DuoInfo>
      <DuoInfo label={"nome"} value={"Batata"}></DuoInfo>
      <DuoInfo label={"nome"} value={"Batata"}></DuoInfo>
      <DuoInfo label={"nome"} value={"Batata"}></DuoInfo>
    </View>
  );
}
