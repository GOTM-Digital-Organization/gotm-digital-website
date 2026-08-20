export type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  business: string;
  service: string;
  message: string;
};

export function validateContactForm(form: ContactFormData): string | null {
  if (!form.name.trim()) return "Please enter your name.";
  if (!form.phone.trim()) return "Please enter your phone number.";
  return null;
}

export type Web3FormsSender = (form: ContactFormData, accessKey: string) => Promise<void>;
export type ContactBackupSender = (form: ContactFormData) => void;

export async function sendToWeb3Forms(form: ContactFormData, accessKey: string): Promise<void> {
  await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      ...form,
      subject: `GOTM inquiry: ${form.name} — ${form.service || "General inquiry"}`,
    }),
  });
}

export async function deliverContactInquiry(
  form: ContactFormData,
  accessKey: string | undefined,
  sendWeb3Forms: Web3FormsSender,
  sendBackup: ContactBackupSender,
): Promise<{ web3FormsAttempted: boolean }> {
  const web3FormsAttempted = Boolean(accessKey);
  if (accessKey) {
    try {
      await sendWeb3Forms(form, accessKey);
    } catch {
      // Delivery may still succeed via the typed server-side backup route below.
    }
  }
  sendBackup(form);
  return { web3FormsAttempted };
}
