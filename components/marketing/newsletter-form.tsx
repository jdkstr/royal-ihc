"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle")

  return (
    <form
      className="mt-6"
      onSubmit={(event) => {
        event.preventDefault()
        setStatus("sent")
      }}
    >
      <p className="mb-4 text-2xl font-normal leading-tight">
        Stay up to date with the latest news
      </p>
      {status === "sent" ? (
        <p className="text-sm text-neutral-700">
          Thanks. This POC does not send mail — your details stayed in the
          browser.
        </p>
      ) : (
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="newsletter-email">Email *</Label>
            <Input
              id="newsletter-email"
              name="email"
              type="email"
              required
              className="h-11 rounded-[8px] bg-white"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="newsletter-interest">Main interest *</Label>
            <select
              id="newsletter-interest"
              name="interest"
              required
              defaultValue=""
              className="h-11 w-full rounded-[8px] border border-input bg-white px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <option value="" disabled>
                Select
              </option>
              <option value="dredging">Dredging</option>
              <option value="offshore">Offshore</option>
              <option value="mining">Mining</option>
              <option value="defence">Defence</option>
            </select>
          </div>
          <Button type="submit" variant="ihc" className="h-11 px-6">
            Submit
          </Button>
          <p className="text-xs text-neutral-700">* Required fields</p>
        </div>
      )}
    </form>
  )
}
