"use client";

import { useQuery } from "@tanstack/react-query";
import { getClaim } from "../api/get-claim";

export function useClaimData() {
  return useQuery({
    queryKey: ["claim-data"],
    queryFn: getClaim,
  });
}