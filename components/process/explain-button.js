"use client";

import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useClaimStore } from "@/features/claim/store/claim-store";

export default function ExplainButton({
  item,
  variant = "outline",
  className,
}) {
  const openExplanation = useClaimStore((state) => state.openExplanation);

  return (
    <Button
      onClick={() => openExplanation(item)}
      variant={variant}
      className={cn("gap-2 rounded-xl", className)}
    >
      <Bot className="h-4 w-4" />
      Explain with AI
    </Button>
  );
}
