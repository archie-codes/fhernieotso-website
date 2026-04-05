// components/contact-form.tsx
"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
} from "@/components/ui/combobox";

// 1. Define the validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  type: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      type: "",
      message: "",
    },
  });

  // 2. Handle the submission
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form Data:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center bg-green-50 rounded-3xl border-2 border-green-100 h-full min-h-[450px] shadow-inner animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-3xl font-bold text-green-950 mb-3">
          Message Sent!
        </h3>
        <p className="text-green-800/80 text-lg mb-8 max-w-sm">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <Button
          variant="outline"
          className="rounded-full border-green-200 text-green-700 hover:bg-green-100 px-8"
          onClick={() => setIsSuccess(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-white p-8 md:p-10 rounded-3xl border border-green-100 shadow-xl shadow-green-900/5 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -z-10" />
      
      <div className="space-y-5">
        <h3 className="text-2xl font-bold text-green-950 mb-6">Send us a message</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-green-900 font-medium">Full Name</Label>
            <Input
              id="name"
              placeholder="Juan Dela Cruz"
              {...register("name")}
              className={`h-12 bg-slate-50 border-green-100 focus-visible:ring-green-500 rounded-xl ${errors.name ? "border-red-500 bg-red-50" : ""}`}
            />
            {errors.name && (
              <p className="text-sm text-red-500 font-medium">{errors.name.message}</p>
            )}
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-green-900 font-medium">Phone Number</Label>
            <Input
              id="phone"
              placeholder="0917 123 4567"
              {...register("phone")}
              className={`h-12 bg-slate-50 border-green-100 focus-visible:ring-green-500 rounded-xl ${errors.phone ? "border-red-500 bg-red-50" : ""}`}
            />
            {errors.phone && (
              <p className="text-sm text-red-500 font-medium">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-green-900 font-medium">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="juan@example.com"
              {...register("email")}
              className={`h-12 bg-slate-50 border-green-100 focus-visible:ring-green-500 rounded-xl ${errors.email ? "border-red-500 bg-red-50" : ""}`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 font-medium">{errors.email.message}</p>
            )}
          </div>

          {/* Inquiry Type Field */}
          <div className="space-y-2">
            <Label className="text-green-900 font-medium">Inquiry Type</Label>
            <Controller
              name="type"
              control={control}
              render={({ field }) => (
                <Combobox 
                  value={field.value} 
                  onValueChange={field.onChange}
                >
                  <ComboboxInput 
                    placeholder="Select an inquiry type" 
                    className={`h-12 w-full bg-slate-50 border border-green-100 focus-within:ring-1 focus-within:ring-green-500 focus-within:border-green-500 rounded-xl ${errors.type ? "border-red-500 focus-within:border-red-500 bg-red-50" : ""}`} 
                  />
                  <ComboboxContent>
                    <ComboboxList>
                      <ComboboxItem value="general">General Inquiry</ComboboxItem>
                      <ComboboxItem value="wholesale">Wholesale & Bulk Orders</ComboboxItem>
                      <ComboboxItem value="support">Customer Support</ComboboxItem>
                      <ComboboxItem value="careers">Careers</ComboboxItem>
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              )}
            />
            {errors.type && (
              <p className="text-sm text-red-500 font-medium">{errors.type.message}</p>
            )}
          </div>
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-green-900 font-medium">How can we help you?</Label>
          <Textarea
            id="message"
            placeholder="I would like to inquire about bulk ordering..."
            rows={5}
            {...register("message")}
            className={`bg-slate-50 border-green-100 focus-visible:ring-green-500 rounded-xl py-3 ${errors.message ? "border-red-500 bg-red-50" : "resize-none"}`}
          />
          {errors.message && (
            <p className="text-sm text-red-500 font-medium">{errors.message.message}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="w-full h-14 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-green-600/20"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
    </form>
  );
}
