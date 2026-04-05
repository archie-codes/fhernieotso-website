"use client";

import { useState } from "react";
import Image from "next/image";
import { NavBar } from "@/components/navbar";
import { SplitText } from "@/components/split-text";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { farmInfo } from "@/lib/data";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { addContactMessage } from "@/lib/data";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
} from "@/components/ui/combobox";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: "general" as "general" | "wholesale" | "support",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      addContactMessage({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        type: formData.type,
      });
      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "We will get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        type: "general",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <NavBar />

      {/* Page Header */}
      <section className="relative w-full overflow-hidden bg-green-950 pt-36 pb-32 md:pt-44 md:pb-40">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/farm-to-table.jpg"
            alt="Farm to Table"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-green-950/80 via-green-950/60 to-green-950/95" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
           <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1] drop-shadow-lg flex flex-col justify-center items-center">
             <SplitText text="Get in Touch" delay={50} />
           </h1>
           <p className="mx-auto max-w-[800px] text-lg text-green-100/80 md:text-xl font-medium leading-relaxed drop-shadow-md">
             Have questions? We'd love to hear from you. Send us a message and
             we'll respond as soon as possible.
           </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32 bg-slate-50 flex-1 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] bg-green-400/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left side: Information */}
            <div className="w-full lg:w-1/3 xl:w-[40%] space-y-10">
              <div className="animate-in fade-in slide-in-from-left-8 duration-700">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-green-950 mb-6 leading-tight">
                  We'd love to hear from you.
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  Have a question about our farming practices, need details on logistics, or looking to start a wholesale partnership? Our team is ready to assist.
                </p>
              </div>

              <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-700 delay-150 fill-mode-both">
                {/* Contact Cards */}
                <div className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-green-50 shadow-lg shadow-green-900/5 hover:-translate-y-1 hover:border-green-200 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-all duration-300 group-hover:scale-110">
                    <Phone className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-green-950 mb-1">Call Us</h3>
                    <p className="text-slate-600 text-lg font-medium">{farmInfo.phone}</p>
                    <p className="text-sm text-slate-500 mt-1">Mon-Fri, 8am to 5pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-green-50 shadow-lg shadow-green-900/5 hover:-translate-y-1 hover:border-green-200 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-all duration-300 group-hover:scale-110">
                    <Mail className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-green-950 mb-1">Email Us</h3>
                    <p className="text-slate-600 text-lg font-medium">{farmInfo.email}</p>
                    <p className="text-sm text-slate-500 mt-1">We aim to reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-green-50 shadow-lg shadow-green-900/5 hover:-translate-y-1 hover:border-green-200 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-all duration-300 group-hover:scale-110">
                    <MapPin className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-green-950 mb-1">Visit the Farm</h3>
                    <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-[250px]">{farmInfo.address}</p>
                    <p className="text-sm text-slate-500 mt-2">Visits by appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Form Component */}
            <div className="w-full lg:w-2/3 xl:w-[60%] lg:pl-4 animate-in fade-in slide-in-from-right-8 duration-700 delay-300 fill-mode-both">
              <Card className="p-8 md:p-12 shadow-2xl shadow-green-900/10 border-4 border-white bg-white rounded-3xl">
                  <form onSubmit={handleSubmit} className="space-y-7">
                    <div className="mb-10">
                      <h3 className="text-3xl font-bold text-green-950 mb-3 tracking-tight">Send us a direct message</h3>
                      <p className="text-slate-600 text-lg leading-relaxed">Fill out the form below and we'll route your inquiry directly to the right department.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-7">
                      <div className="space-y-2.5">
                        <label className="text-sm font-bold text-slate-700 ml-1">
                          Full Name
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full h-14 px-5 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-green-500 focus:ring-green-500 transition-all duration-300 hover:bg-slate-100 text-base shadow-inner"
                        />
                      </div>
                      <div className="space-y-2.5">
                        <label className="text-sm font-bold text-slate-700 ml-1">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full h-14 px-5 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-green-500 focus:ring-green-500 transition-all duration-300 hover:bg-slate-100 text-base shadow-inner"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-7">
                      <div className="space-y-2.5">
                        <label className="text-sm font-bold text-slate-700 ml-1">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+63 900 123 4567"
                          className="w-full h-14 px-5 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-green-500 focus:ring-green-500 transition-all duration-300 hover:bg-slate-100 text-base shadow-inner"
                        />
                      </div>
                      <div className="space-y-2.5">
                        <label className="text-sm font-bold text-slate-700 ml-1">
                          Inquiry Type
                        </label>
                        <Combobox
                          value={formData.type}
                          onValueChange={(val) => setFormData((prev) => ({ ...prev, type: val as any }))}
                        >
                          <ComboboxInput 
                            placeholder="Select inquiry type"
                            className="w-full h-14 bg-slate-50 rounded-2xl border-transparent focus-within:-outline-offset-1 focus-within:bg-white focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-500 transition-all hover:bg-slate-100 shadow-inner [*_input]:h-14 [*_input]:px-5 [*_input]:text-base font-medium text-slate-700"
                          />
                          <ComboboxContent>
                            <ComboboxList>
                              <ComboboxItem value="general">General Inquiry</ComboboxItem>
                              <ComboboxItem value="wholesale">Wholesale Request</ComboboxItem>
                              <ComboboxItem value="support">Customer Support</ComboboxItem>
                            </ComboboxList>
                          </ComboboxContent>
                        </Combobox>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <label className="text-sm font-bold text-slate-700 ml-1">
                        Subject
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="How can we help you?"
                        className="w-full h-14 px-5 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-green-500 focus:ring-green-500 transition-all duration-300 hover:bg-slate-100 text-base shadow-inner"
                      />
                    </div>

                    <div className="space-y-2.5">
                      <label className="text-sm font-bold text-slate-700 ml-1">
                        Your Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us more about your needs..."
                        rows={6}
                        className="w-full p-5 rounded-3xl bg-slate-50 border-transparent focus:bg-white focus:border-green-500 focus:ring-green-500 transition-all duration-300 hover:bg-slate-100 text-base resize-y min-h-[150px] shadow-inner"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-16 text-lg font-bold rounded-full bg-green-600 hover:bg-green-500 text-white shadow-xl shadow-green-600/30 transition-all duration-300 hover:-translate-y-1 mt-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending Message..." : "Send Message"}
                    </Button>
                  </form>
              </Card>

              <Dialog open={isSubmitted} onOpenChange={setIsSubmitted}>
                <DialogContent className="sm:max-w-md border-none bg-transparent shadow-none">
                  <div className="text-center py-16 px-8 bg-white rounded-[2rem] shadow-2xl border-4 border-white relative overflow-hidden animate-in zoom-in duration-500">
                    <div className="absolute inset-0 bg-green-50/50 -z-10" />
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 ring-8 ring-green-50">
                      <CheckCircle2 className="w-12 h-12 text-green-600" />
                    </div>
                    <DialogTitle className="text-3xl font-extrabold text-green-950 mb-4 tracking-tight">
                      Message Sent!
                    </DialogTitle>
                    <p className="text-lg text-slate-600 max-w-md mx-auto leading-relaxed font-medium mb-8">
                      Thank you for reaching out. We have received your message and our team will get back to you shortly.
                    </p>
                    <Button 
                      className="rounded-full px-8 h-12 bg-green-600 text-white hover:bg-green-700 font-bold shadow-lg transition-transform hover:-translate-y-1"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Close
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
