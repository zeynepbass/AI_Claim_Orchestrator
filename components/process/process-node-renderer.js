import DefaultNodeCard from "./nodes/default-node-card";
import FileReviewNode from "./nodes/file-review-node";
import DeductionReasonNode from "./nodes/deduction-reason-node";
import PaymentInformationNode from "./nodes/payment-information-node";

export default function ProcessNodeRenderer({ item, index, isLast }) {
  const registry = {
    "File Review": FileReviewNode,
    "Deduction Reason": DeductionReasonNode,
    "Payment Information": PaymentInformationNode,
  };

  const Component = registry[item.title] || DefaultNodeCard;

  return <Component item={item} index={index} isLast={isLast} />;
}