import React, { Fragment } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function QuotationsList() {

    return (
        <Fragment>
            <View style={styles.filters}>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => { }}
                >
                    <Text style={styles.textButtonQuery}>7 d</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => { }}
                >
                    <Text style={styles.textButtonQuery}>15 d</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => { }}
                >
                    <Text style={styles.textButtonQuery}>1 M</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => { }}
                >
                    <Text style={styles.textButtonQuery}>3 M</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => { }}
                >
                    <Text style={styles.textButtonQuery}>6 M</Text>
                </TouchableOpacity>
            </View>
            
        </Fragment>
        
        
    );
}