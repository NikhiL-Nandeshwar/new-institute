import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id='contact' className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-foreground">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">
            We&apos;d love to hear from you. Reach out with any questions, feedback, or inquiries.
          </p>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-center gap-3">
              <Mail className="text-primary" /> info@institute.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-primary" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-primary" /> Kolhapur, Maharashtra, India
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form className="bg-muted p-6 rounded-xl space-y-4 shadow">
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Textarea placeholder="Your Message" rows={5} required />
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </section>
  );
}
