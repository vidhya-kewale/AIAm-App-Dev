import React from 'react';
import { SafeAreaView, FlatList, Text, TouchableOpacity } from 'react-native';
import data from '../data/open_roles.json';

export default function OpenRolesScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detail', { item })} style={{ paddingVertical: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.title}</Text>
            <Text style={{ marginTop: 4 }}>{item.department}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <Text style={{ opacity: 0.1 }}>
---
</Text>}
      />
    </SafeAreaView>
  );
}
