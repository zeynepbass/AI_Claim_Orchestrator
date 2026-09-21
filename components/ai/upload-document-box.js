"use client";

import { useState } from "react";
import { FileCheck2, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { buildUploadMessage } from "@/features/claim/utils/claim-helpers";

export default function UploadDocumentBox() {
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setMessage(buildUploadMessage(file.name));
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
          <Upload className="h-5 w-5" />
        </div>

        <div>
          <h3 className="text-base font-semibold text-slate-900">
            AI Document Analyzer
          </h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Upload the requested occupational certificate and simulate instant
            AI-based validation.
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">
        <Input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleFileChange}
          className="bg-white"
        />
        <p className="mt-3 text-xs text-slate-500">
          Supported for demo: PDF, JPG, PNG
        </p>
      </div>

      {message && (
        <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <div className="flex items-start gap-3">
            <FileCheck2 className="mt-0.5 h-4 w-4 text-emerald-700" />
            <p className="text-sm leading-6 text-emerald-700">{message}</p>
          </div>
        </div>
      )}
    </div>
  );
}
