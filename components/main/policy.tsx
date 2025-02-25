import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { termsData } from "@/config/content";

type Term = {
  title: string;
  content: string | string[];
};

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Terms and Conditions</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-screen p-4 border rounded-lg">
            {termsData.map((term: Term, index: number) => (
              <div key={index}>
                <h2 className="text-lg font-semibold mt-4">{term.title}</h2>
                {Array.isArray(term.content) ? (
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {term.content.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-600">{term.content}</p>
                )}
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
