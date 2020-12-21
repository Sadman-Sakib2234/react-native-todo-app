import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {

    render() {

        return (
            <View style={styles.header}>
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '18%',
        borderBottomWidth: 8,
        borderBottomColor: "#969696",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a1a1a'
    },
    text: {
        fontSize: 55,
        letterSpacing: 1.1,
        fontWeight: 'bold',
        color: '#fff'
    }
});