import { describe, it, expect } from "vitest";
import * as dotenv from "dotenv";
dotenv.config();

describe("Web3Forms integration", () => {
  it("should accept a submission with the configured access key", async () => {
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    expect(accessKey, "WEB3FORMS_ACCESS_KEY must be set").toBeTruthy();

    const body = {
      access_key: accessKey,
      subject: "GOTM Digital — Web3Forms API Key Test",
      from_name: "GOTM Digital Test",
      name: "Test User",
      phone: "555-0000",
      email: "test@example.com",
      message: "This is an automated API key validation test. Please ignore.",
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json() as { success: boolean; message?: string };
    expect(data.success, `Web3Forms rejected the key: ${data.message}`).toBe(true);
  });
});
