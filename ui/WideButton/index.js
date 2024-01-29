import { Pressable, Text } from 'react-native';
import styles from './styles.js'

export default function WideButton({ label, onPress, disabled }) {
  return (
      <Pressable style={[styles.btnSubmit, disabled && styles.btnDisabled]} onPress={onPress} disabled={disabled}>
          <Text style={styles.btnText}>{label}</Text>
      </Pressable>
  );
}