import { claimData } from "@/mocks/claim-data";

export async function getClaim() {
  await new Promise((resolve) => setTimeout(resolve, 700));
  return claimData;
}