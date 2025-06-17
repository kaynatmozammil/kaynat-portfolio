export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { password } = req.body;
  const correctPassword = process.env.GALLERY_PASSWORD;

  if (password === correctPassword) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ success: false, error: "Incorrect password" });
  }
}
