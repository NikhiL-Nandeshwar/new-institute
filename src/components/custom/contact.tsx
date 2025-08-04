import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-sky-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-slate-800">Get in Touch</h2>
          <p className="text-slate-600 mb-6 text-base leading-relaxed">
            We&apos;d love to hear from you. Whether you have questions about courses, admissions, or anything else — our team is ready to help.
          </p>
          <ul className="space-y-5 text-slate-600 text-base">
            <li className="flex items-center gap-3">
              <Mail className="text-indigo-600 w-5 h-5" />
              <a href="mailto:admin@mohim.in" className="hover:underline">admin@mohimacademy.in</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-indigo-600 w-5 h-5" />
              <a href="tel:+918149304666" className="hover:underline">+91 8149304666</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-indigo-600 w-5 h-5" />
              <a
                href="https://www.google.com/maps?q=F-05,06+DC+Plaza+Nagala+Park,+Kolhapur"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                F-05,06 DC Plaza, Nagala Park, Kolhapur
              </a>
            </li>
          </ul>


        </div>

        {/* Contact Form */}
        <form className="bg-white border border-indigo-200 p-8 rounded-2xl space-y-5 shadow-md">
          <Input type="text" placeholder="Your Name" required className="text-sm" />
          <Input type="email" placeholder="Your Email" required className="text-sm" />
          <Textarea placeholder="Your Message" rows={5} required className="text-sm" />
          <div className="text-right">
            <Button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-6 py-2 rounded-md"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
