import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <motion.section
      className="py-20 px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="contact"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="space-y-4">
          <Input type="email" placeholder="Your email" />
          <Textarea placeholder="Your message" />
          <Button>Send Message</Button>
        </div>
      </div>
    </motion.section>
  );
};
