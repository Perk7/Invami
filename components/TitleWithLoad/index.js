import { View, ActivityIndicator } from 'react-native';
import styles from './styles.js'

import Title from '../../ui/Title';
import BackButton from '../../ui/BackButton';

export default function TitleWithLoad({ content, actionBackBtn, displayBackBtn, displayLoad }) {
  return (<>
    <View>
      <Title content={content} center />
      <BackButton action={actionBackBtn} propStyles={{display: displayBackBtn ? 'flex' : 'none'}} />
    </View>
    <ActivityIndicator style={!displayLoad && {opacity: 0}} size="small" color="#fff" />
  </>);
}