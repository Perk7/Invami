import { StyleSheet } from "react-native"
import { lightGray } from "../../constants"

export default StyleSheet.create({
    header: {
        height: 85,
        width: '100%',
        backgroundColor: lightGray,
        justifyContent: 'space-evenly',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 8
    },

    headerTitle: {
        fontSize: 25,
        paddingTop: 0,
        paddingBottom: 0
    },

})