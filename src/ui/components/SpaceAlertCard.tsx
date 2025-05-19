import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  alert: any;
}

const SpaceAlertCard: React.FC<Props> = ({ alert }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.type}>{alert.messageType}</Text>
      <Text style={styles.time}>{new Date(alert.messageIssueTime).toLocaleString()}</Text>
      <Text style={styles.body}>{alert.messageBody}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
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
    color: '#666',
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
  },
});

export default SpaceAlertCard;
