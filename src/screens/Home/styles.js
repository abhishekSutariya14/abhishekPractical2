import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/Colors';
import {normalize} from '../../utils/UtilityFunction';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: normalize(20),
    backgroundColor: COLORS.WHITE,
  },
  input: {
    height: normalize(40),
    borderColor: COLORS.GRAY,
    borderWidth: normalize(1),
    marginBottom: normalize(10),
    paddingHorizontal: normalize(10),
  },
  addButton: {
    backgroundColor: COLORS.AQUA,
    padding: normalize(10),
    borderRadius: normalize(5),
    alignItems: 'center',
    marginBottom: normalize(10),
  },
  addButtonText: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: normalize(10),
    borderColor: COLORS.GRAY,
    borderWidth: normalize(1),
    borderRadius: normalize(5),
    marginBottom: normalize(5),
  },
  deleteButton: {
    color: COLORS.RED,
    fontWeight: 'bold',
  },
});
