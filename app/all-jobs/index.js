import React from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { useRouter } from "expo-router";

import styles from "./alljobs.styles";
import NearbyJobCard from "../../components/common/cards/nearby/NearbyJobCard";
import { COLORS } from "../../constants";
import useFetch from "../../hook/useFetch";

const AllJobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React Native developer",
    num_pages: "5",
  });

  return (
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
  );
};

export default AllJobs;