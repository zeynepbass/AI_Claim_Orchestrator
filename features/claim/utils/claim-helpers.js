import {
  AI_EXPLANATIONS,
  COMPLETED_STATUSES,
  DEFAULT_AI_EXPLANATION,
  IN_PROGRESS_STATUS,
  NO_ACTION_MESSAGE,
  NO_PHASE_MESSAGE,
  STATUS_BADGE_CLASSES,
  STATUS_DOT_CLASSES,
} from "../constants/claim-constants";

export function getStatusBadgeClass(status) {
  return STATUS_BADGE_CLASSES[status] ?? STATUS_BADGE_CLASSES.default;
}

export function getStatusDotClass(status) {
  return STATUS_DOT_CLASSES[status] ?? STATUS_DOT_CLASSES.default;
}

export function generateAiExplanation(node) {
  return AI_EXPLANATIONS[node?.title] ?? DEFAULT_AI_EXPLANATION;
}

export function getRequiredAction(processDetails = []) {
  const node = processDetails.find((item) => item.actionRequired);
  return node?.actionRequired || NO_ACTION_MESSAGE;
}

export function getCurrentPhase(processDetails = []) {
  const node = processDetails.find((item) => item.status === IN_PROGRESS_STATUS);
  return node?.title || NO_PHASE_MESSAGE;
}

export function getClaimProgress(processDetails = []) {
  if (!processDetails.length) return 0;

  const doneCount = processDetails.filter((item) =>
    COMPLETED_STATUSES.includes(item.status)
  ).length;

  return Math.round((doneCount / processDetails.length) * 100);
}

export function formatKeyLabel(key) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (char) => char.toUpperCase());
}

export function buildUploadMessage(fileName) {
  return `"${fileName}" uploaded successfully. AI Analyzer detected a readable document and marked it as suitable for submission.`;
}
