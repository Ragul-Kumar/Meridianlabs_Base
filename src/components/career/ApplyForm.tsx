import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ApplyForm() {
  const [submitted, setSubmitted] = React.useState(false);

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
      className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12"
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input id="fullName" name="fullName" type="text" placeholder="John Doe" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" name="email" type="email" placeholder="john@studio.com" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="role">Intended Role</Label>
        <Select name="role" defaultValue="Design Intern">
          <SelectTrigger id="role">
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Design Intern">Design Intern</SelectItem>
            <SelectItem value="Engineering Intern">Engineering Intern</SelectItem>
            <SelectItem value="Strategy Intern">Strategy Intern</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <Label htmlFor="portfolio">Portfolio Link</Label>
        <Input id="portfolio" name="portfolio" type="url" placeholder="https://yourwork.com" required />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <Label htmlFor="statement">Personal Statement</Label>
        <Textarea id="statement" name="statement" rows={3} placeholder="Why STUDIO?" required />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <Label htmlFor="source">How did you hear about us?</Label>
        <Input id="source" name="source" type="text" placeholder="Twitter, LinkedIn, Referral..." required />
      </div>
      <div className="md:col-span-2 pt-6">
        <Button type="submit" size="xl">
          Apply for Internship
          <span className="material-symbols-outlined">arrow_forward</span>
        </Button>
      </div>
    </form>
  );
}
