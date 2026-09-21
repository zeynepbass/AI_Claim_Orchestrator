export const COMPLETED_STATUSES = ["Completed", "Report Completed"];
export const IN_PROGRESS_STATUS = "In Progress";

export const NO_ACTION_MESSAGE = "No immediate action required";
export const NO_PHASE_MESSAGE = "Not started";

export const STATUS_BADGE_CLASSES = {
  Completed: "border-emerald-200 bg-emerald-50 text-emerald-700",
  "In Progress": "border-blue-200 bg-blue-50 text-blue-700",
  Pending: "border-amber-200 bg-amber-50 text-amber-700",
  "Report Completed": "border-violet-200 bg-violet-50 text-violet-700",
  default: "border-slate-200 bg-slate-50 text-slate-700",
};

export const STATUS_DOT_CLASSES = {
  Completed: "bg-emerald-500",
  "In Progress": "bg-blue-500",
  Pending: "bg-amber-500",
  "Report Completed": "bg-violet-500",
  default: "bg-slate-400",
};

export const DEFAULT_AI_EXPLANATION =
  "This step includes claim-related details. An AI summary is not available for this specific item yet.";

export const AI_EXPLANATIONS = {
  "Towing Service":
    "Your vehicle towing process has been completed successfully. The car was collected from the pickup point and moved into the claims workflow.",
  "Claim Notification":
    "Your insurance claim was officially created after the incident was reported. This step records the first formal case details.",
  Appraisal:
    "An assigned appraisal expert reviewed the vehicle damage and submitted the assessment report required for claim evaluation.",
  "Substitute Rental Vehicle":
    "Your temporary rental vehicle support was arranged for the approved duration while the main claim process continued.",
  "File Review":
    "Your file is currently being reviewed by the insurance team. They are checking the submitted information and validating documents before the next step.",
  "Deduction Reason":
    "This section explains the deductions that may reduce the final payable amount. The system currently expects an occupational certificate from you.",
  "Payment Information":
    "Payment information has been prepared but the process is still pending. Final approval or completion of previous steps may still be required.",
  Closed:
    "The case is not yet closed. Closure will happen only after all pending operational and payment-related steps are finished.",
};
