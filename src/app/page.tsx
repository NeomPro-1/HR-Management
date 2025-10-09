
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const features = [
  "Comprehensive Employee Management",
  "AI-Powered Recruitment Tools",
  "Automated Payroll Processing",
  "Intelligent HR Helpdesk",
  "Attendance & Leave Tracking",
  "In-depth Analytics & Reporting",
];

const testimonials = [
  {
    name: "Sarah L.",
    role: "HR Director, TechCorp",
    quote: "SynergyHR has revolutionized our HR processes. The AI-powered recruitment feature alone has saved us countless hours.",
    avatarId: "emp1-avatar",
  },
  {
    name: "Michael B.",
    role: "CEO, Innovate Ltd.",
    quote: "The unified dashboard gives me a perfect overview of my entire workforce. It's powerful, intuitive, and indispensable.",
    avatarId: "emp2-avatar",
  },
  {
    name: "Jessica P.",
    role: "Payroll Manager, Solutions Inc.",
    quote: "Payroll used to be a week-long headache. With SynergyHR, it's a few clicks. I can't imagine going back.",
    avatarId: "emp3-avatar",
  },
];


export default function LandingPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === "landing-hero");
  const featureImageLg = PlaceHolderImages.find(p => p.id === "dashboard-full");

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="container grid grid-cols-1 gap-12 items-center justify-items-center text-center py-12 md:py-24">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl font-headline">
            The All-in-One Platform for Modern HR & Payroll
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            From AI-powered recruitment to seamless payroll, SynergyHR integrates everything you need to manage your workforce, all in one powerful dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/signup">Get Started for Free</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/hr/employee-dashboard">View Dashboard</Link>
            </Button>
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt="SynergyHR Dashboard"
              width={1200}
              height={800}
              className="rounded-xl shadow-2xl"
              data-ai-hint={heroImage.imageHint}
            />
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything Your HR Team Needs</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Streamline your operations with our comprehensive suite of tools designed for efficiency and growth.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center">
              {featureImageLg && (
                  <Image
                      src={featureImageLg.imageUrl}
                      alt="SynergyHR Dashboard Screenshot"
                      width={600}
                      height={450}
                      className="rounded-xl shadow-lg w-full"
                      data-ai-hint={featureImageLg.imageHint}
                  />
              )}
            </div>
            <ul className="grid gap-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-bold">{feature}</h3>
                    <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Trusted by Teams at Forward-Thinking Companies
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See what our customers have to say about their experience with SynergyHR.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {testimonials.map((testimonial) => {
              const testimonialAvatar = PlaceHolderImages.find(p => p.id === testimonial.avatarId);
              return (
                <Card key={testimonial.name}>
                  <CardContent className="p-6">
                    <p className="mb-4 text-muted-foreground">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      {testimonialAvatar && (
                        <Avatar>
                          <AvatarImage src={testimonialAvatar.imageUrl} alt={testimonial.name} data-ai-hint={testimonialAvatar.imageHint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      )}
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
    
