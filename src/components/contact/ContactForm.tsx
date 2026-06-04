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

export default function ContactForm() {
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
            Message Sent
          </p>
          <p className="font-body-md text-on-surface-variant mt-2">
            Thanks for reaching out. We'll get back to you within 1 business day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" name="name" type="text" placeholder="John Doe" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" name="email" type="email" placeholder="john@company.com" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="company">Company (optional)</Label>
        <Input id="company" name="company" type="text" placeholder="Acme Inc." />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="projectType">Project Type</Label>
        <Select name="projectType" defaultValue="Website Build">
          <SelectTrigger id="projectType">
            <SelectValue placeholder="Select a type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Website Build">Website Build</SelectItem>
            <SelectItem value="Website Rework">Website Rework</SelectItem>
            <SelectItem value="Mobile App Build">Mobile App Build</SelectItem>
            <SelectItem value="Something Else">Something Else</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <Label htmlFor="message">Tell Us About Your Project</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="What are you building, and what does success look like?"
          required
        />
      </div>
      <div className="sm:col-span-2 pt-2">
        <Button type="submit" size="xl">
          Send Message
          <span className="material-symbols-outlined">arrow_forward</span>
        </Button>
      </div>
    </form>
  );
}
