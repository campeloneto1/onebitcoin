import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function QuotationsItens() {

    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image
                        source={require('../../../img/bitcoin.png')}
                        style={styles.logoBitcoin}
                    />
                    <Text style={styles.dayCotation}>24/11/2021</Text>
                </View>
            </View>
            <View style={styles.contextRight}>
                <Text style={styles.price}>$ 53331.21</Text>
            </View>
                      
        </View>
    );
}