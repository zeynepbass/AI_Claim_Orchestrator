export function getStatusBadgeClass(status) {
    switch (status) {
      case "Completed":
        return "border-emerald-200 bg-emerald-50 text-emerald-700";
      case "In Progress":
        return "border-blue-200 bg-blue-50 text-blue-700";
      case "Pending":
        return "border-amber-200 bg-amber-50 text-amber-700";
      case "Report Completed":
        return "border-violet-200 bg-violet-50 text-violet-700";
      default:
        return "border-slate-200 bg-slate-50 text-slate-700";
    }
  }
  
  export function getStatusDotClass(status) {
    switch (status) {
      case "Completed":
        return "bg-emerald-500";
      case "In Progress":
        return "bg-blue-500";
      case "Pending":
        return "bg-amber-500";
      case "Report Completed":
        return "bg-violet-500";
      default:
        return "bg-slate-400";
    }
  }
  
  export function generateAiExplanation(node) {
    const explanations = {
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
  
    return (
      explanations[node?.title] ||
      "This step includes claim-related details. An AI summary is not available for this specific item yet."
    );
  }
  
  export function getRequiredAction(processDetails = []) {
    const node = processDetails.find((item) => item.actionRequired);
    return node?.actionRequired || "No immediate action required";
  }
  
  export function getClaimProgress(processDetails = []) {
    if (!processDetails.length) return 0;
  
    const completedStatuses = ["Completed", "Report Completed"];
    const doneCount = processDetails.filter((item) =>
      completedStatuses.includes(item.status)
    ).length;
  
    return Math.round((doneCount / processDetails.length) * 100);
  }
  
  export function formatKeyLabel(key) {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (char) => char.toUpperCase());
  }