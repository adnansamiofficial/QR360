import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workspace",
  description: "QR360 account and business tools workspace.",
};

export default function WorkspacePage() {
  return (
    <main className="workspace-shell">
      <iframe
        className="workspace-frame"
        src="/qr360-app.html"
        title="QR360 workspace"
        allow="camera; clipboard-read; clipboard-write"
      />
    </main>
  );
}
