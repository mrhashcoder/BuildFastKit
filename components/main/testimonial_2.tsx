import { QuoteIcon } from "lucide-react"

export default function Testimonial_2() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="relative p-6 border rounded-lg">
        <QuoteIcon className="absolute text-gray-200 w-16 h-16 -top-8 -left-8" />
        <blockquote className="relative">
          <p className="text-lg font-medium">
            "The customer support team is exceptional. They've been incredibly helpful and responsive throughout our onboarding process."
          </p>
          <footer className="mt-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-sm font-semibold text-gray-600">EM</span>
                </div>
              </div>
              <div className="ml-4">
                <div className="text-base font-semibold">Emily Martinez</div>
                <div className="text-sm text-gray-600">Operations Manager, GlobalTech</div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
      <div className="relative p-6 border rounded-lg">
        <QuoteIcon className="absolute text-gray-200 w-16 h-16 -top-8 -left-8" />
        <blockquote className="relative">
          <p className="text-lg font-medium">
            "This platform has streamlined our entire project management process. It's been a game-changer for our team's productivity."
          </p>
          <footer className="mt-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-sm font-semibold text-gray-600">TW</span>
                </div>
              </div>
              <div className="ml-4">
                <div className="text-base font-semibold">Thomas Wilson</div>
                <div className="text-sm text-gray-600">Project Lead, InnovateNow</div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
      <div className="relative p-6 border rounded-lg">
        <QuoteIcon className="absolute text-gray-200 w-16 h-16 -top-8 -left-8" />
        <blockquote className="relative">
          <p className="text-lg font-medium">
            "I appreciate the constant updates and new features. It shows that the team is committed to improving the product based on user feedback."
          </p>
          <footer className="mt-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-sm font-semibold text-gray-600">SL</span>
                </div>
              </div>
              <div className="ml-4">
                <div className="text-base font-semibold">Sarah Lee</div>
                <div className="text-sm text-gray-600">UX Researcher, DesignHub</div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  )
}