import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

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
        if (error instanceof Error) {
            console.error("Error sending email:", error.message);
        } else {
            console.error("Unknown error:", error);
        }

        return NextResponse.json({ error: "Error sending message" }, { status: 500 });
    }

}
