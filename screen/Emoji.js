import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class Emoji extends Component {

    data = [
        { image: require("../assets/emoji/angry.png") },
        { image: require("../assets/emoji/care.png") },
        { image: require("../assets/emoji/haha.png") },
        { image: require("../assets/emoji/like.png") },
        { image: require("../assets/emoji/love.png") },
        { image: require("../assets/emoji/sad.png") },
    ]

    state = {
        image: this.data[0].image
    }

    renderEmoji = () => {
        return this.data.map((item, index) => {
            return <TouchableOpacity key={index} style={styles.container__emoji__touch} onPress={()=>{
                this.setState({
                    image:item.image
                })
            }}>
                <Image source={item.image} style={styles.container__emoji__touch_image}/>
            </TouchableOpacity>
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.container__text}>Bạn đang cảm thấy như thế nào ?</Text>
                <View>
                    <Image source={this.state.image} />
                </View>
                <View style={styles.container__emoji}>
                    {this.renderEmoji()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    container__text: {
        fontSize: 20,
        fontWeight: "bold"
    },
    container__emoji: {
        flexDirection: "row",
        marginTop:15
    },
    container__emoji__touch:{
        height:50,
        width:50,
        marginLeft:15
    },
    container__emoji__touch_image:{
        height:50,
        width:50
    }
})