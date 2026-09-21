import ProcessNodeRenderer from "./process-node-renderer";

export default function ProcessList({ items = [] }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <ProcessNodeRenderer
          key={item.title}
          item={item}
          index={index}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
}
