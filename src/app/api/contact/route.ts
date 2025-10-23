import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        if (!name || !email || !message)
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });

        // === 1️⃣ Send message to YOU ===
        await resend.emails.send({
            from: "Portfolio <no-reply@danielkadlec.cz>",
            to: "kontakt@danielkadlec.cz",
            subject: `📩 New message: ${subject || "(no subject)"}`,
            replyTo: email, // so you can just hit "Reply" to answer them
            html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "(none)"}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
        });

        // === 2️⃣ Send confirmation to the USER ===
        await resend.emails.send({
            from: "Daniel Kadlec <no-reply@danielkadlec.cz>",
            to: email,
            replyTo: "kontakt@danielkadlec.cz",
            subject: "✅ Your message has been received!",
            html: `
        <h2>Thanks for reaching out, ${name}!</h2>
        <p>I’ve received your message:</p>
        <blockquote>${message}</blockquote>
        <p>I’ll reply from <a href="mailto:kontakt@danielkadlec.cz">kontakt@danielkadlec.cz</a> soon.</p>
        <br/>
        <p>– Daniel</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error sending email:", error.message);
        } else {
            console.error("Unknown error:", error);
        }

        return NextResponse.json({ error: "Error sending message" }, { status: 500 });
    }

}
