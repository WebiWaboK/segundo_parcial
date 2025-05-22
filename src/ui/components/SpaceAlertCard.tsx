import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../state/context/ThemeContext';

interface Props {
  alert: any;
}

const SpaceAlertCard: React.FC<Props> = ({ alert }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <View style={[styles.card, { backgroundColor: isDark ? '#1e293b' : '#fff' }]}>
      <Text style={[styles.type, { color: isDark ? '#fff' : '#000' }]}>{alert.messageType}</Text>
      <Text style={[styles.time, { color: isDark ? '#cbd5e1' : '#666' }]}>
        {new Date(alert.messageIssueTime).toLocaleString()}
      </Text>
      <Text style={[styles.body, { color: isDark ? '#e2e8f0' : '#000' }]}>{alert.messageBody}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  type: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  time: {
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
  },
});

export default SpaceAlertCard;
