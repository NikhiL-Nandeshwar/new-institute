'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("https://formspree.io/f/xeozrwbq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      toast.success("Your message was sent successfully. Thank you!");
      setForm({ name: "", email: "", message: "" });
    } else {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-16 px-4 bg-sky-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start p-3 sm:p-0">
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-indigo-800">Get in Touch</h2>
          <p className="text-slate-600 mb-6 text-base leading-relaxed">
            We&apos;d love to hear from you. Whether you have questions about courses, admissions, or anything else — our team is ready to help.
          </p>
          <ul className="space-y-5 text-slate-600 text-base">
            <li className="flex items-center gap-3">
              <Mail className="text-yellow-500 w-5 h-5" />
              <a href="mailto:admin@mohim.in" className="hover:underline">admin@mohimacademy.in</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-yellow-500 w-5 h-5" />
              <a href="tel:+918149304666" className="hover:underline">+91 8149304666</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-yellow-500 w-5 h-5" />
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
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-indigo-200 p-8 rounded-2xl space-y-5 shadow-md"
        >
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="text-sm"
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="text-sm"
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="text-sm"
          />
          <div className="text-right">
            <Button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer transition text-white px-6 py-2 rounded-md"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
