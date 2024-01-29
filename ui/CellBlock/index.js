import { Text, View } from 'react-native';
import styles from './styles.js'

export default function CellBlock({ cellItems, focused, value, disabled }) {
  return (
    <View style={[styles.inputCellBlock, disabled && styles.cellBlockDisabled]}>
        {cellItems.map((number, i) => 
            <Text 
                key={i} 
                style={[styles.inputCell, ((i === value.length || (i === 5 && value.length == 6)) && focused) && styles.currentCell]}
            >{number}</Text>
        )}
    </View>
  );
}