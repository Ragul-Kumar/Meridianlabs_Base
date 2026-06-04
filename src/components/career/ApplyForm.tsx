import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const selectCls =
  "w-full appearance-none rounded-none border-0 border-b border-outline-variant bg-transparent px-0 py-2 pr-8 font-body-md text-body-md text-primary focus:outline-none focus:border-primary-fixed cursor-pointer";

// Required-field marker
const Req = () => <span className="text-primary-fixed" aria-hidden="true">*</span>;

export default function ApplyForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [fileName, setFileName] = React.useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-primary-fixed bg-primary-fixed/10 p-10 flex items-start gap-4">
        <span className="material-symbols-outlined text-primary-fixed text-3xl">
          task_alt
        </span>
        <div>
          <p className="font-headline-sm text-headline-sm text-primary">
            Application Received
          </p>
          <p className="font-body-md text-on-surface-variant mt-2">
            We've received your application. Expect a response within 5 working
            days.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
    >
      <div className="flex flex-col gap-3">
        <Label htmlFor="fullName">Full Name <Req /></Label>
        <Input id="fullName" name="fullName" type="text" placeholder="John Doe" required />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="email">Email Address <Req /></Label>
        <Input id="email" name="email" type="email" placeholder="john@email.com" required />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="phone">Phone Number <Req /></Label>
        <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" required />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="role">Intended Role <Req /></Label>
        <div className="relative">
          <select id="role" name="role" defaultValue="Design Intern" className={selectCls}>
            <option className="bg-surface-card" value="Design Intern">Design Intern</option>
            <option className="bg-surface-card" value="Engineering Intern">Engineering Intern</option>
            <option className="bg-surface-card" value="Strategy Intern">Strategy Intern</option>
          </select>
          <span className="material-symbols-outlined pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-primary-fixed">
            expand_more
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:col-span-2">
        <Label htmlFor="portfolio">
          Portfolio Link <span className="text-on-surface-variant/60 normal-case">(optional)</span>
        </Label>
        <Input id="portfolio" name="portfolio" type="url" placeholder="https://yourwork.com" />
      </div>

      <div className="flex flex-col gap-3 md:col-span-2">
        <Label htmlFor="resume">Resume / CV <Req /></Label>
        <label
          htmlFor="resume"
          className="flex items-center justify-between gap-3 border border-outline-variant bg-transparent px-4 py-4 cursor-pointer hover:border-primary-fixed transition-colors"
        >
          <span className={`font-body-md text-body-md truncate ${fileName ? "text-primary" : "text-on-surface-variant/70"}`}>
            {fileName || "Upload PDF, DOC, or DOCX (max 5MB)"}
          </span>
          <span className="material-symbols-outlined text-primary-fixed shrink-0">upload_file</span>
        </label>
        <input
          id="resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          required
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
        />
      </div>

      <div className="md:col-span-2 pt-4">
        <Button type="submit" size="xl">
          Apply for Internship
          <span className="material-symbols-outlined">arrow_forward</span>
        </Button>
      </div>
    </form>
  );
}
