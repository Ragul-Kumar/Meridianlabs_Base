import * as React from "react";
import { Button } from "@/components/ui/button";

type State = "idle" | "valid" | "invalid";

export default function CertVerify() {
  const [id, setId] = React.useState("");
  const [state, setState] = React.useState<State>("idle");

  function verify() {
    if (!id.trim()) {
      setState("idle");
      return;
    }
    // Mock logic: ID 'MERIDIAN-123' is valid
    setState(id.trim().toUpperCase() === "MERIDIAN-123" ? "valid" : "invalid");
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && verify()}
          placeholder="Enter Certificate ID"
          className="flex-grow rounded-none bg-transparent text-primary font-label-mono uppercase tracking-widest px-4 border border-outline-variant h-14 placeholder:text-on-surface-variant/60 focus:outline-none focus:border-primary-fixed"
        />
        <Button variant="outline" size="lg" className="h-14 px-8" onClick={verify}>
          Verify <span className="material-symbols-outlined">verified_user</span>
        </Button>
      </div>

      {state === "valid" && (
        <div className="p-6 border border-primary-fixed bg-primary-fixed/10 flex items-center gap-4">
          <span className="material-symbols-outlined text-primary-fixed text-3xl">
            task_alt
          </span>
          <div>
            <p className="font-headline-sm text-headline-sm text-primary">
              Certificate Valid
            </p>
            <p className="font-label-mono text-label-mono text-on-surface-variant mt-1">
              Verified on July 14, 2024
            </p>
          </div>
        </div>
      )}

      {state === "invalid" && (
        <div className="p-6 border border-error bg-error/10 flex items-center gap-4">
          <span className="material-symbols-outlined text-error text-3xl">
            warning
          </span>
          <div>
            <p className="font-headline-sm text-headline-sm text-primary">Invalid ID</p>
            <p className="font-label-mono text-label-mono text-on-surface-variant mt-1">
              No certificate found with this identifier.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
