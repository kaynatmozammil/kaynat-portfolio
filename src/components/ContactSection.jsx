// import {
//     Instagram,
//     Linkedin,
//     Mail,
//     MapPin,
//     Phone,
//     Send,
// } from "lucide-react"; // Removed Twitter & Twitch
// import { RiTwitterXLine } from "react-icons/ri"; // X (Twitter) icon
// import { BsWhatsapp } from "react-icons/bs";     // WhatsApp icon
// import { FaGithub } from "react-icons/fa";       // ✅ Add this for GitHub icon
// import { cn } from "../lib/utils";
// import { useToast } from "../hooks/use-toast";
// import { useState } from "react";

// export const ContactSection = () => {
//     const { toast } = useToast();
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         const form = e.target;
//         const formData = new FormData(form);

//         try {
//             const response = await fetch("https://formspree.io/f/mldnlrvw", {
//                 method: "POST",
//                 body: formData,
//                 headers: {
//                     Accept: "application/json",
//                 },
//             });

//             if (response.ok) {
//                 toast({
//                     title: "Message sent!",
//                     description: "Thank you for your message. I'll get back to you soon.",
//                 });
//                 form.reset(); // Clear the form after success
//             } else {
//                 toast({
//                     title: "Error",
//                     description: "Something went wrong. Please try again later.",
//                 });
//             }
//         } catch (error) {
//             toast({
//                 title: "Network Error",
//                 description: "Please check your internet connection.",
//             });
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <section id="contact" className="py-24 px-4 relative bg-secondary/30">
//             <div className="container mx-auto max-w-5xl">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//                     Get In <span className="text-primary"> Touch</span>
//                 </h2>

//                 <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//                     Have a project in mind or want to collaborate? Feel free to reach out.
//                     I'm always open to discussing new opportunities.
//                 </p>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                     <div className="space-y-8">
//                         <h3 className="text-2xl font-semibold mb-6">
//                             {" "}
//                             Contact Information
//                         </h3>

//                         <div className="space-y-6 justify-center">

//                             <div className="flex items-start space-x-4">
//                                 <div className="p-3 rounded-full bg-primary/10">
//                                     <Mail className="h-6 w-6 text-primary" />{" "}
//                                 </div>
//                                 <div>
//                                     <h4 className="font-medium"> Email</h4>
//                                     <a
//                                         href="mailto:kaymozammil@gmail.com"
//                                         className="text-muted-foreground hover:text-primary transition-colors"
//                                     >
//                                         kaynatmozammil@gmail.com
//                                     </a>
//                                 </div>
//                             </div>

//                             <div className="flex items-start space-x-4">
//                                 <div className="p-3 rounded-full bg-primary/10">
//                                     <Phone className="h-6 w-6 text-primary" />{" "}
//                                 </div>
//                                 <div>
//                                     <h4 className="font-medium"> Phone</h4>
//                                     <a
//                                         href="tel:+919341231811"
//                                         className="text-muted-foreground hover:text-primary transition-colors"
//                                     >
//                                         +91 9341231811
//                                     </a>
//                                 </div>
//                             </div>

//                             <div className="flex items-start space-x-4">
//                                 <div className="p-3 rounded-full bg-primary/10">
//                                     <MapPin className="h-6 w-6 text-primary" />{" "}
//                                 </div>
//                                 <div>
//                                     <h4 className="font-medium"> Location</h4>
//                                     <a className="text-muted-foreground hover:text-primary transition-colors">
//                                         New Delhi, Delhi 110025
//                                     </a>
//                                 </div>
//                             </div>

//                         </div>


//                         <div className="pt-8">
//                             <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
//                             <div className="flex space-x-4 justify-center text-primary ">
//                                 <a href="https://www.linkedin.com/in/kaynatmozammil/" target="_blank" rel="noopener noreferrer">
//                                     <Linkedin />
//                                 </a>
//                                 <a href="https://x.com/kaynatXmozammil/" target="_blank" rel="noopener noreferrer">
//                                     <RiTwitterXLine size={20} />
//                                 </a>
//                                 <a href="https://www.instagram.com/kaynat_mozammil/" target="_blank" rel="noopener noreferrer">
//                                     <Instagram />
//                                 </a>

//                                 <a href="https://wa.me/919341231811" target="_blank" rel="noopener noreferrer">
//                                     <BsWhatsapp size={20} />
//                                 </a>
//                                 <a href="https://github.com/kaynatmozammil" target="_blank" rel="noopener noreferrer">
//                                     <FaGithub size={20} />
//                                 </a>
//                             </div>
//                         </div>

//                     </div>

//                     <div
//                         className="bg-card p-8 rounded-lg shadow-xs"

//                     >
//                         <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

//                         <form
//                             className="space-y-6"
//                             onSubmit={handleSubmit} // ✅ use handler
//                         >
//                             <div>
//                                 <label
//                                     htmlFor="name"
//                                     className="block text-sm font-medium mb-2"
//                                 >
//                                     Your Name
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     name="name"
//                                     required
//                                     className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
//                                     placeholder="your name..."
//                                 />
//                             </div>

//                             <div>
//                                 <label
//                                     htmlFor="email"
//                                     className="block text-sm font-medium mb-2"
//                                 >
//                                     Your Email
//                                 </label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     name="email"
//                                     required
//                                     className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
//                                     placeholder="youremail@gmail.com"
//                                 />
//                             </div>

//                             <div>
//                                 <label
//                                     htmlFor="message"
//                                     className="block text-sm font-medium mb-2"
//                                 >
//                                     Your Message
//                                 </label>
//                                 <textarea
//                                     id="message"
//                                     name="message"
//                                     required
//                                     className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
//                                     placeholder="Hello, I'd like to talk about..."
//                                 />
//                             </div>

//                             <button
//                                 type="submit"
//                                 disabled={isSubmitting}
//                                 className={cn(
//                                     "cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer "
//                                 )}
//                             >
//                                 {isSubmitting ? "Sending..." : "Send Message"}
//                                 <Send size={16} />
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };


import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { RiTwitterXLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    // Debug form data
    console.log("Sending form data:");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const response = await fetch("https://formspree.io/f/mldnlrvw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Please check your internet connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:kaynatmozammil@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    kaynatmozammil@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+919341231811"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9341231811
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">New Delhi, Delhi 110025</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
              <div className="flex space-x-4 justify-center text-primary">
                <a href="https://www.linkedin.com/in/kaynatmozammil/" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
                <a href="https://x.com/kaynatXmozammil/" target="_blank" rel="noopener noreferrer">
                  <RiTwitterXLine size={20} />
                </a>
                <a href="https://www.instagram.com/kaynat_mozammil/" target="_blank" rel="noopener noreferrer">
                  <Instagram />
                </a>
                <a href="https://wa.me/919341231811" target="_blank" rel="noopener noreferrer">
                  <BsWhatsapp size={20} />
                </a>
                <a href="https://github.com/kaynatmozammil" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your name..."
                />
              </div>

              <div>
                <label htmlFor="_replyto" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="_replyto"
                  name="_replyto"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="youremail@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
