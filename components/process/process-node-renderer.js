import DefaultNodeCard from "./nodes/default-node-card";
import FileReviewNode from "./nodes/file-review-node";
import DeductionReasonNode from "./nodes/deduction-reason-node";
import PaymentInformationNode from "./nodes/payment-information-node";

const NODE_REGISTRY = {
  "File Review": FileReviewNode,
  "Deduction Reason": DeductionReasonNode,
  "Payment Information": PaymentInformationNode,
};

export default function ProcessNodeRenderer({ item, index, isLast }) {
  const Component = NODE_REGISTRY[item.title] || DefaultNodeCard;

  return <Component item={item} index={index} isLast={isLast} />;
}
