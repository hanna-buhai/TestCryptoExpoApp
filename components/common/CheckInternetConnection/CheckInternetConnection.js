import { StyleSheet, Text, View } from 'react-native'
import { useNetInfo } from "@react-native-community/netinfo";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1
  },
  errorContainer: {
    backgroundColor: 'red',
    color: 'white',
    padding: 8,
  },
  errorText: {
    color: 'white'
  }
})


const CheckInternetConnection = ({ children }) => {
    const netInfo = useNetInfo();
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>{children}</View>
            {!netInfo.isConnected && <View style={styles.errorContainer}><Text style={styles.errorText}>No Internet Connection</Text></View>}
        </View>
    )
}

export default CheckInternetConnection
