import { StyleSheet } from "react-native"
import { goldenColor } from "../../constants"

export default StyleSheet.create({
    inputCellBlock: {
        height: 50,
        width: "100%",
        marginTop: 15,
  
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
  
      inputCell: {
        height: 50,
        width: '12%',
        fontSize: 35,
        color: '#FFF',
  
        textAlign: 'center',
  
        borderBottomWidth: 2,
        borderColor: '#FFF',
      },
  
      currentCell: {
        borderColor: goldenColor
      },

      cellBlockDisabled: {
        opacity: 0.6
      }
})