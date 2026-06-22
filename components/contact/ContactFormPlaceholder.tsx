"use client";

interface ContactFormPlaceholderProps {
  inquiryTypes: string[];
}

export default function ContactFormPlaceholder({
  inquiryTypes,
}: ContactFormPlaceholderProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Wire form submission to backend API or email service (e.g. Formspree, EmailJS)
    console.warn(
      "Contact form submission is not yet implemented. Connect to an API or email service."
    );
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-medium text-heading mb-2"
          >
            Full Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-heading mb-2"
          >
            Email Address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-inquiry"
          className="block text-sm font-medium text-heading mb-2"
        >
          Type of Inquiry
        </label>
        <select
          id="contact-inquiry"
          name="inquiryType"
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        >
          <option value="">Select an option</option>
          {inquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-heading mb-2"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          placeholder="How can we help you?"
        />
      </div>

      <p className="text-sm text-muted">
        Form submission is coming soon. For immediate assistance, email{" "}
        <a
          href="mailto:info@continuityoman.com"
          className="text-primary hover:underline"
        >
          info@continuityoman.com
        </a>
        .
      </p>

      <div>
        <button
          type="submit"
          className="bg-primary text-white px-8 py-2 rounded-lg hover:bg-primary-dark transition-colors w-full"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
