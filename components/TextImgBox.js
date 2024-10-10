import { useState } from 'react'
import { TextInput, View, StyleSheet, Dimensions, Text, Image, Touchable, TouchableOpacity, Vibration, Button } from "react-native";
import EI from "react-native-vector-icons/EvilIcons"
var { width, height } = Dimensions.get('screen')


export default function TextImgBox({ w, h = 50, ...props }) {


    const imageSources = {
        india: require('../assets/india1.png'),
        china: require('../assets/china.png'),
        usa: require('../assets/usa.png'),
    };

    const [currentImage, setCurrentImage] = useState(imageSources.india);

    const handleImageClick = () => {
        switch (currentImage) {
            case imageSources.india:
                setCurrentImage(imageSources.china)
                props.setCode('+86')
                break;

            case imageSources.china:
                setCurrentImage(imageSources.usa)
                props.setCode('+1')
                break;

            case imageSources.usa:
                setCurrentImage(imageSources.india)
                props.setCode('+91')
                break;

            default:
                setCurrentImage(imageSources.india)
                props.setCode('+91')
        }

    };

    const [color, setColor] = useState(false)
    return (
        <View style={{ marginVertical: 2 }}>
            <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: "center", marginVertical: 0, width: width * w, height: h, borderWidth: 1, borderRadius: 12, borderColor: '#4834d4', }}>
                <TouchableOpacity onPress={handleImageClick}  >
                    
                        <Image source={currentImage} />
                    
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
