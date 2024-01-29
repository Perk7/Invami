import { ScrollView, View } from 'react-native';
import styles from './styles.js'

import Header from '../../components/Header';

export default function GrayView({ children, title, center }) {
  return (
    <View style={styles.container}>
      <Header title={title} />
      <ScrollView contentContainerStyle={[center && styles.contentView, {flexGrow: 1}]} keyboardShouldPersistTaps={'handled'}>
        {children}
      </ScrollView>
    </View>
  );
}