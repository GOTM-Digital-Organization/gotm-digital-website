import { describe, expect, it, vi } from "vitest";
import { deliverContactInquiry, type ContactFormData, validateContactForm } from "../client/src/lib/contactForm";

const validInquiry: ContactFormData = {
  name: "Tom",
  phone: "9413288891",
  email: "tom@gotmdigital.com",
  business: "GOTM Digital",
  service: "Complex Organization Digital Transformation",
  message: "I need a unified digital system.",
};

describe("contact inquiry delivery", () => {
  it("requires both a name and phone number before delivery", () => {
    expect(validateContactForm({ ...validInquiry, name: "   " })).toBe("Please enter your name.");
    expect(validateContactForm({ ...validInquiry, phone: "" })).toBe("Please enter your phone number.");
    expect(validateContactForm(validInquiry)).toBeNull();
  });

  it("attempts Web3Forms and always invokes the typed backup delivery path", async () => {
    const web3Forms = vi.fn().mockResolvedValue(undefined);
    const backup = vi.fn();

    const result = await deliverContactInquiry(validInquiry, "test-key", web3Forms, backup);

    expect(result.web3FormsAttempted).toBe(true);
    expect(web3Forms).toHaveBeenCalledWith(validInquiry, "test-key");
    expect(backup).toHaveBeenCalledWith(validInquiry);
  });

  it("still invokes the typed backup when Web3Forms is unavailable", async () => {
    const web3Forms = vi.fn().mockRejectedValue(new Error("network unavailable"));
    const backup = vi.fn();

    await expect(deliverContactInquiry(validInquiry, "test-key", web3Forms, backup)).resolves.toEqual({ web3FormsAttempted: true });
    expect(backup).toHaveBeenCalledWith(validInquiry);
  });
});
