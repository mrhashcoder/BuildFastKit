import { Star } from "lucide-react"

export default function Testimonial_3() {

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