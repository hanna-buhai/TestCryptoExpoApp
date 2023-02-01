import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  welcomeContainer: {
    marginTop: 16,
    marginBottom: 4,
    paddingLeft: 8,
  },
  filterContainer: {
    marginBottom: 8,
    padding: 8,
  },
  filterInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  listContainer: {
    flex: 1,
  },
  listItemSeparator: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginLeft: 8,
    marginRight: 8,
  },
})

export default styles
