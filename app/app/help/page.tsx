export default function HelpPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Help & Support</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-4 border rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Documentation</h2>
          <p className="text-muted-foreground mb-3">
            Explore our comprehensive documentation to learn how to use all
            features.
          </p>
          <a href="#" className="text-primary hover:underline">
            View Documentation →
          </a>
        </div>

        <div className="p-4 border rounded-lg">
          <h2 className="text-lg font-semibold mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mb-3">
            Find quick answers to common questions about the platform.
          </p>
          <a href="#" className="text-primary hover:underline">
            View FAQs →
          </a>
        </div>
      </div>

      <div className="p-4 border rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-2">Contact Support</h2>
        <p className="text-muted-foreground mb-3">
          Need personalized help? Our support team is ready to assist you.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
            Contact Support
          </button>
          <button className="border border-input bg-background px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground">
            Schedule a Call
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Popular Help Topics</h2>
        <ul className="space-y-2">
          <li className="p-3 border rounded-lg hover:bg-accent cursor-pointer">
            Getting Started with the Platform
          </li>
          <li className="p-3 border rounded-lg hover:bg-accent cursor-pointer">
            Managing Your Account Settings
          </li>
          <li className="p-3 border rounded-lg hover:bg-accent cursor-pointer">
            Understanding Analytics Data
          </li>
          <li className="p-3 border rounded-lg hover:bg-accent cursor-pointer">
            Project Management Best Practices
          </li>
          <li className="p-3 border rounded-lg hover:bg-accent cursor-pointer">
            Team Collaboration Features
          </li>
        </ul>
      </div>
    </div>
  );
}
