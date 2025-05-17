// app/terms/page.jsx
export default function Terms() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
        <p className="mb-4">
          By accessing and using Hiresense, you agree to be bound by these terms and all applicable laws and regulations.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>You must be at least 18 years old to use our platform.</li>
          <li>Don't misuse the service (e.g., spamming, uploading harmful content).</li>
          <li>We reserve the right to suspend or terminate accounts that violate our policies.</li>
        </ul>
        <p className="mt-6">These terms are subject to change at any time. It’s your responsibility to check for updates.</p>
      </div>
    </main>
  );
}
