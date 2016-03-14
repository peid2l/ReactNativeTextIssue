/** README
 * Demo the Text component will not render anything if text size is large issue
 * To see the problem, copy the string content of data.largetext, and paste to the end of the string text to make the string longer, if you make it up to 16 times larger, text will show, if make it 17 times larger, nothing will be rendered.
 */

'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
} from 'react-native';

var data = [{largetext: '<p>Lorem ipsum dolor sit amet, no deserunt argumentum has, brute mnesarchum id mei. Sapientem sadipscing at qui. Sea ei noster iudicabit, vis exerci intellegat ei. Ei dolore omittantur usu. Viderer repudiandae ad his, vocibus offendit aliquando vis in.</p> <p>Mel ne tractatos petentium, nullam perpetua repudiandae nec te, idque postulant ius te. Unum verterem id per, ius et mucius erroribus suscipiantur. Cum ex dictas tritani pericula, ei prompta instructior eum. Omnium efficiendi ei mei. Cum te ipsum quodsi detracto, cum fastidii complectitur te.</p>'},];
class largetext extends Component {
  render() {
	 var post = data[0];
	 return <Text style={styles.text}>{post.largetext}</Text>
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('largetext', () => largetext);
