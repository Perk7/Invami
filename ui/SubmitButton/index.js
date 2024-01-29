import { Pressable, Text } from 'react-native';
import styles from './styles.js'

export default function SubmitButton({ label, onPress, disabled }) {
  return (
    <Pressable disabled={disabled} style={[styles.btnSubmit, disabled && styles.btnDisabled]} onPress={onPress}>
        <Text style={styles.btnText}>{label}</Text>
    </Pressable>
  );
}