import React from "react";
import { View, Text, ActivityIndicator, FlatList, SafeAreaView } from "react-native";
import { useRouter, Stack } from "expo-router";

import styles from "./alljobs.styles";
import NearbyJobCard from "../../components/common/cards/nearby/NearbyJobCard";
import { COLORS, icons } from '../../constants'
import useFetch from "../../hook/useFetch";
import { ScreenHeaderBtn } from "../../components";

const AllJobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React Native developer",
    num_pages: "5",
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
          options={{
              headerStyle: { backgroundColor: COLORS.lightWhite },
              headerShadowVisible: false,
              headerLeft: () => (
                  <ScreenHeaderBtn
                      iconUrl={icons.left}
                      dimension='60%'
                      handlePress={() => router.back()}
                  />
              ),
              headerTitle: "",
          }}
      />
      <View style={styles.container}>
        <Text style={styles.headerTitle}>All jobs</Text>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <NearbyJobCard
                job={item}
                handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
              />
            )}
            keyExtractor={(item) => `all-job-${item.job_id}`}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default AllJobs;