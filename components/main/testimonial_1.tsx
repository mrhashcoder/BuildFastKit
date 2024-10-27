import { Card, CardContent } from "@/components/ui/card"

export default function Testimonial_1() {
    
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