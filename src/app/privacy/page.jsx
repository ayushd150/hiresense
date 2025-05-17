// app/privacy/page.jsx
export default function Privacy() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          We value your privacy. This policy outlines how we collect, use, and protect your data.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>We collect only the information necessary to provide our services.</li>
          <li>Your data is securely stored and never sold to third parties.</li>
          <li>You can request to delete your account and data at any time.</li>
        </ul>
        <p className="mt-6">For further queries, feel free to reach out to us via our Contact page.</p>
      </div>
    </main>
  );
}
