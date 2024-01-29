import { Pressable, Text } from 'react-native';
import styles from './styles.js'

export default function TextButton({ label, action, disabled }) {
  return (
    <Pressable onPress={action} disabled={disabled}> 
      <Text style={[styles.buttonLabel, disabled && styles.buttonDisabled]}>{label}</Text>
    </Pressable>
  );
}