import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 10000;

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "LearnLoop <onboarding@resend.dev>";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "LearnLoop" });
});

app.post("/api/register", async (req, res) => {
  try {
    const {
      name,
      email,
      skill,
      mode,
      experience,
      message
    } = req.body;

    if (!name || !email || !skill || !mode) {
      return res.status(400).json({
        success: false,
        message: "Please complete all required fields."
      });
    }

    const safeName = String(name).trim();
    const safeEmail = String(email).trim();
    const safeSkill = String(skill).trim();
    const safeMode = String(mode).trim();
    const safeExperience = String(experience || "Not specified").trim();
    const safeMessage = String(message || "").trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(safeEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address."
      });
    }

    if (!resend) {
      return res.status(500).json({
        success: false,
        message:
          "Email service is not configured yet. Add RESEND_API_KEY in Render Environment Variables."
      });
    }

    const registrationId =
      "LL-" +
      new Date().toISOString().slice(0, 10).replaceAll("-", "") +
      "-" +
      Math.random().toString(36).slice(2, 8).toUpperCase();

    const confirmationHtml = `
      <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto;color:#24304a;line-height:1.6">
        <div style="background:#24304a;color:white;padding:28px;border-radius:18px 18px 0 0">
          <h1 style="margin:0">Welcome to LearnLoop!</h1>
          <p style="margin:8px 0 0">Your registration has been received successfully.</p>
        </div>
        <div style="padding:28px;border:1px solid #e5e7eb;border-top:0;border-radius:0 0 18px 18px">
          <p>Hi <strong>${escapeHtml(safeName)}</strong>,</p>
          <p>Thank you for joining LearnLoop. Here are your registration details:</p>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:9px 0"><strong>Registration ID</strong></td><td>${registrationId}</td></tr>
            <tr><td style="padding:9px 0"><strong>Skill / Program</strong></td><td>${escapeHtml(safeSkill)}</td></tr>
            <tr><td style="padding:9px 0"><strong>Learning mode</strong></td><td>${escapeHtml(safeMode)}</td></tr>
            <tr><td style="padding:9px 0"><strong>Experience</strong></td><td>${escapeHtml(safeExperience)}</td></tr>
          </table>
          <p style="margin-top:22px">Our team can use your registration details to help you get started with the selected program.</p>
          <p><strong>LearnLoop — Share your skills. Learn something new.</strong></p>
        </div>
      </div>
    `;

    const emails = [
      resend.emails.send({
        from: FROM_EMAIL,
        to: [safeEmail],
        subject: `LearnLoop registration successful — ${registrationId}`,
        html: confirmationHtml,
        replyTo: ADMIN_EMAIL || undefined
      })
    ];

    if (ADMIN_EMAIL) {
      emails.push(
        resend.emails.send({
          from: FROM_EMAIL,
          to: [ADMIN_EMAIL],
          subject: `New LearnLoop registration — ${safeName}`,
          html: `
            <div style="font-family:Arial,sans-serif">
              <h2>New LearnLoop registration</h2>
              <p><strong>Registration ID:</strong> ${registrationId}</p>
              <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
              <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
              <p><strong>Skill/Program:</strong> ${escapeHtml(safeSkill)}</p>
              <p><strong>Mode:</strong> ${escapeHtml(safeMode)}</p>
              <p><strong>Experience:</strong> ${escapeHtml(safeExperience)}</p>
              <p><strong>Message:</strong> ${escapeHtml(safeMessage || "—")}</p>
            </div>
          `
        })
      );
    }

    const results = await Promise.all(emails);
    const failed = results.find((r) => r?.error);

    if (failed?.error) {
      console.error("Email provider error:", failed.error);
      return res.status(502).json({
        success: false,
        message: "Registration was received, but the confirmation email could not be sent."
      });
    }

    return res.json({
      success: true,
      registrationId,
      message: "You have successfully joined the LearnLoop program."
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again."
    });
  }
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`LearnLoop running on port ${PORT}`);
});

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
