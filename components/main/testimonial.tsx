import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon, Star } from "lucide-react"

export default function Testimonial({ index }: {index: number}) {

  const testimonialArray = [<Testimonial_1 />, <Testimonial_2 />, <Testimonial_3 />]

  let currentTestimonial = null;
  for(let i = 0; i < testimonialArray.length; i++) {
    if (i === index-1) {
      currentTestimonial = testimonialArray[i]
    }
  }

  return (
    <>
    {currentTestimonial}
    </>
  )
}

function Testimonial_1() {

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">JD</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-sm text-muted-foreground">CEO, TechCorp</p>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground">
            "This product has completely transformed our workflow. It's intuitive, powerful, and a joy to use every day."
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">AS</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Alice Smith</h3>
              <p className="text-sm text-muted-foreground">Designer, CreativeCo</p>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground">
            "I've tried many similar tools, but this one stands out. It's become an essential part of my design process."
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">RJ</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Robert Johnson</h3>
              <p className="text-sm text-muted-foreground">Freelancer</p>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground">
            "As a freelancer, efficiency is key. This tool has significantly boosted my productivity and client satisfaction."
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

function Testimonial_2() {

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

function Testimonial_3() {

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center text-center">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-xl font-medium max-w-md mb-4">
          "This tool has revolutionized how we handle our data analysis. It's powerful yet user-friendly."
        </p>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
            <span className="text-xs font-semibold text-gray-600">MJ</span>
          </div>
          <div>
            <h4 className="font-semibold">Michael Johnson</h4>
            <p className="text-sm text-gray-600">Data Scientist, AnalyticsPro</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-xl font-medium max-w-md mb-4">
          "The collaboration features are outstanding. It's made our remote work so much more efficient."
        </p>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
            <span className="text-xs font-semibold text-gray-600">LR</span>
          </div>
          <div>
            <h4 className="font-semibold">Lisa Rodriguez</h4>
            <p className="text-sm text-gray-600">Team Lead, RemoteWorks</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-xl font-medium max-w-md mb-4">
          "I'm impressed by how customizable the platform is. It fits perfectly into our existing workflow."
        </p>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
            <span className="text-xs font-semibold text-gray-600">DK</span>
          </div>
          <div>
            <h4 className="font-semibold">David Kim</h4>
            <p className="text-sm text-gray-600">CTO, TechSolutions</p>
          </div>
        </div>
      </div>
    </div>
  )
}