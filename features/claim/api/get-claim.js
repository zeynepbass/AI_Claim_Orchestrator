import { claimData } from "@/mocks/claim-data";

const MOCK_LATENCY_MS = 700;

export async function getClaim() {
  await new Promise((resolve) => setTimeout(resolve, MOCK_LATENCY_MS));
  return claimData;
}
