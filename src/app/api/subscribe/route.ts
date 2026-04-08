import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    // 1. Gửi thông báo qua Telegram
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (telegramToken && chatId) {
      const message = `🚀 *New Subscriber!*\n\n*Name:* ${name}\n*Email:* ${email}`;
      await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      });
    }

    // 2. Ghi dữ liệu vào Google Sheets
    const googleClientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const googlePrivateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (googleClientEmail && googlePrivateKey && spreadsheetId) {
      const auth = new google.auth.JWT({
        email: googleClientEmail,
        key: googlePrivateKey,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });
      
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: "Sheet1!A:C",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[new Date().toISOString(), name, email]],
        },
      });
    }

    return NextResponse.json({ success: true, message: "Subscription successful" });
  } catch (error) {
    console.error("Subscription Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
