import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

// Routes
import Navigation from './components/Navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
        <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});

export default App;