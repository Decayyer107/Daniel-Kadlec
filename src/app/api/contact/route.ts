import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const emailTimestamps = new Map<string, number>();

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();
        const ip = req.headers.get("x-forwarded-for") || "unknown";
        const now = Date.now();

        // Rate limiting
        const lastSent = emailTimestamps.get(ip);
        if (lastSent && now - lastSent < 60_000) {
            return NextResponse.json(
                { error: "Please wait a minute before sending another message." },
                { status: 429 }
            );
        }

        emailTimestamps.set(ip, now);

        if (!name || !email || !message)
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });

        await resend.emails.send({
            from: "Portfolio <no-reply@danielkadlec.cz>",
            to: "kontakt@danielkadlec.cz",
            subject: `Zpráva z portfolia: ${subject || "(Žádný předmět)"}`,
            replyTo: email,
            html: `
                <h2>Nová zpráva z portfolia</h2>
                <p><strong>Jméno:</strong> ${name}</p>
                <p><strong>E-mail:</strong> ${email}</p>
                <p><strong>Předmět:</strong> ${subject || "(žádný)"}</p>
                <p><strong>Zpráva:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error sending email:", error);

        return NextResponse.json(
            { error: "Error sending message" },
            { status: 500 }
        );
    }
}
