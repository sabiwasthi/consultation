import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

type LeadPayload = {
  fullName?: string;
  email?: string;
  whatsapp?: string;
  businessName?: string;
  website?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;

    const requiredFields = [
      ["fullName", body.fullName],
      ["email", body.email],
      ["whatsapp", body.whatsapp],
      ["businessName", body.businessName],
      ["website", body.website],
    ];

    const missingField = requiredFields.find(([, value]) => !value?.trim());
    if (missingField) {
      return NextResponse.json({ error: `${missingField[0]} is required` }, { status: 400 });
    }

    const leadRecord = {
      submittedAt: new Date().toISOString(),
      fullName: body.fullName?.trim(),
      email: body.email?.trim(),
      whatsapp: body.whatsapp?.trim(),
      businessName: body.businessName?.trim(),
      website: body.website?.trim(),
      message: body.message?.trim() || "",
    };

    const dataDirectory = path.join(process.cwd(), "data");
    const leadsFile = path.join(dataDirectory, "leads.jsonl");
    await mkdir(dataDirectory, { recursive: true });
    await appendFile(leadsFile, `${JSON.stringify(leadRecord)}\n`, "utf8");

    let emailDelivered = false;

    try {
      const response = await fetch("https://formsubmit.co/ajax/sabiwasthi@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New Meta Ads Consultation Request - Marketing by Sabi",
          _template: "table",
          _captcha: "false",
          _replyto: body.email?.trim(),
          "Full Name": body.fullName?.trim(),
          Email: body.email?.trim(),
          "WhatsApp Number": body.whatsapp?.trim(),
          "Business Name": body.businessName?.trim(),
          "Website or Facebook Page Link": body.website?.trim(),
          "Message for Us": body.message?.trim() || "No additional message provided.",
        }),
      });

      emailDelivered = response.ok;
    } catch {
      emailDelivered = false;
    }

    return NextResponse.json({ success: true, emailDelivered });
  } catch {
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}
