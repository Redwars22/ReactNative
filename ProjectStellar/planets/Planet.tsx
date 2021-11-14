import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';

class Planet extends React.Component {
    constructor(props){
        super(props);
    }

    render (){
        return(
        <View style={styles.container}>
            <Image style={styles.planetImage} source={require('./planet.png')}/>
            <View>
                <Text style={styles.description}>Nome: {this.props.name}</Text>
                <Text style={styles.description}>Distância da Terra: {this.props.distanceToEarth}</Text>
                <Text style={styles.description}>Distância do Sol: {this.props.distanceToSun}</Text>
                <Text style={styles.description}>Período Orbital: {this.props.orbitalPeriod}</Text>
                <Text style={styles.description}>Classificação: {this.props.classification}</Text>
                <Text style={styles.description}>Quantidade de Luas: {this.props.moons}</Text>
                <Text style={styles.description}>Diâmetro: {this.props.radius}</Text>
                <Text style={styles.description}>Massa: {this.props.mass}</Text>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    description: {
        color: '#317ada',
    },

    container: {
        backgroundColor: '#2b207252',
        padding: 10,
        borderRadius: 20,
        width: 370,
        margin: 5,
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#2687f7',
    },

    planetImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
        margin: 10,
    }
});

export default Planet;