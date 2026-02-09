"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Section from "@/components/ui/Section";
import { getDictionary } from "@/lib/dictionary";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

interface ContactProps {
  dict: Dictionary;
}

export default function Contact({ dict }: ContactProps) {
  const { contact_section, personal_info } = dict;

  return (
    <Section id="experience" className="min-h-screen h-auto py-24 md:py-32">
      <div className="w-[90dvw] 2xl:w-[60dvw] mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          <aside className="relative pr-8 md:pr-12 lg:pr-16 flex flex-col justify-between overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-2 self-start">
                <h2 className="font-montserrat! text-4xl font-black text-light tracking-tight">
                  {contact_section.title}
                </h2>
              </div>
              <p className="text-light/70 text-lg mb-12 leading-relaxed">
                {contact_section.description}
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 border border-base-light/50 text-accent">
                  <MapPin className="w-6 h-4/75" />
                </div>
                <div>
                  <h3 className="font-bold text-light text-sm tracking-wider mb-2 opacity-50">
                    {contact_section.info.location}
                  </h3>
                  <p className="text-lg text-light">{personal_info.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 border border-base-light/50 text-accent">
                  <Mail className="w-6 h-4/75" />
                </div>
                <div>
                  <h3 className="font-bold text-light text-sm tracking-wider mb-2 opacity-50">
                    {contact_section.info.email}
                  </h3>
                  <a
                    href={`mailto:${personal_info.email}`}
                    className="text-lg text-light hover:text-accent transition-colors"
                  >
                    {personal_info.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 border border-base-light/50 text-accent">
                  <Phone className="w-6 h-4/75" />
                </div>
                <div>
                  <h3 className="font-bold text-light text-sm tracking-wider mb-2 opacity-50">
                    {contact_section.info.phone}
                  </h3>
                  <p className="text-lg text-light">+58 (412) 297-0632</p>
                </div>
              </div>
            </div>
          </aside>

          <div className="">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="space-y-6"
            >
              <input type="hidden" name="contact-form" value="contact" />

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="name"
                  className="text-lg font-bold text-light-4"
                >
                  {contact_section.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-base-darken border border-base-light/50 px-4 py-3 text-light placeholder:text-light-4/75 outline-none transition-all"
                  placeholder="John"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="email"
                  className="text-lg font-bold text-light-4"
                >
                  {contact_section.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-base-darken border border-base-light/50 px-4 py-3 text-light placeholder:text-light-4/75 outline-none transition-all"
                  placeholder="email@example.com"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="phone"
                  className="text-lg font-bold text-light-4"
                >
                  {contact_section.form.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full bg-base-darken border border-base-light/50 px-4 py-3 text-light placeholder:text-light-4/75 outline-none transition-all"
                  placeholder="+58 (000) 000-000"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="message"
                  className="text-lg font-bold text-light-4"
                >
                  {contact_section.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-base-darken border border-base-light/50 px-4 py-3 text-light placeholder:text-light-4/75 outline-none transition-all resize-none"
                  placeholder={contact_section.form.message_placeholder + "..."}
                ></textarea>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-accent hover:bg-accent/80 text-white font-bold shadow-lg shadow-accent/20 transition-all transform active:scale-95"
                >
                  {contact_section.form.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
