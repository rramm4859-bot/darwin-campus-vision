import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are there scholarships based on merit, sports, or economic background?",
    answer: "Yes, we offer scholarships up to 100% based on merit, sports achievements, and economic background. Please contact our admissions office for detailed information.",
  },
  {
    question: "Is the hostel facility good and safe for students?",
    answer: "Absolutely! Our fully-equipped, air-conditioned hostel facilities provide a safe and comfortable environment for students with 24/7 security.",
  },
  {
    question: "Is there a dedicated placement or career development cell?",
    answer: "Yes, we have a dedicated placement cell that provides 100% placement assistance through tie-ups with Fortune 500 companies and leading tech firms.",
  },
  {
    question: "Does the campus have advanced computing labs, data science labs, or AI centres?",
    answer: "Yes, our campus features state-of-the-art computing labs, data science labs, AI centers, and cybersecurity labs equipped with the latest technology.",
  },
  {
    question: "Is it a free Wifi Campus?",
    answer: "Yes, our entire campus is 100% WiFi-enabled, providing students with seamless connectivity across all areas.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              FAQ's
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-foreground font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
