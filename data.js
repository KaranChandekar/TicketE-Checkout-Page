import ChatsCircle from "@/components/svg/ChatsCircle";
import CircleWavyCheck from "@/components/svg/CircleWavyCheck";
import FeatCalendarBlank from "@/components/svg/FeatCalendarBlank";
import FeatShieldCheckered from "@/components/svg/FeatShieldCheckered";

export const questionnaireData = [
  {
    question: "Are my tickets transferable?",
    answer:
      "No. The tickets can only be used by the person(s) whose details are indicated on the voucher. If you're booking for friends and family, make sure to key in their details.",
  },
  {
    question: "How long will it take to receive my ticket?",
    answer:
      "The tickets will hit your inbox as soon as you complete making the payment.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "We use a PCI compliant payment gateway that is internationally recognized and protects against fraud and unauthorized transactions. In short, your payment is a 100% secure and you have nothing to worry!",
  },
  {
    question: "What type of payment options do you offer?",
    answer:
      "We accept payments via all major international debit cards, credit cards, Google Pay and Apple Pay. Please note that Tickete being an online marketplace does not accept cash payments.",
  },
  {
    question: "When will I be charged for my booking?",
    answer:
      "Your account will be charged immediately upon booking. If the booking is cancelled from your end or by our local tour operator, we will refund the entire amount to your account at no extra cost.",
  },
  {
    question: "Why am I being charged in USD?",
    answer:
      "All payments on Tickete are charged in USD. Your accounted will be debited with the spot rate for the conversion rate from your local currency to USD. We understand this is less than ideal but, we're working on accepting payments in currencies across the world.",
  },
  {
    question: "Will I get a complete refund if I cancel this ticket?",
    answer:
      "The cancellation and refund policy varies per ticket. While some can be canceled up to 24, 48, or 72 hours before they start, several others can't be canceled once the reservation has been confirmed. For the ones that can cancelled within the permissible cancellation period, you will receive a full refund.",
  },
  {
    question: "How long does it take for a refund to reflect in my account?",
    answer:
      "Depending on your bank, it typically takes anywhere between 2-7 working days for the refunded amount to reflect in your account.",
  },
];

export const features = [
  {
    icon: <CircleWavyCheck className="w-6 sm:w-auto" />,
    title: "Official tickets",
    description: "Authorized reseller to top attraction",
  },
  {
    icon: <ChatsCircle className="w-6 sm:w-auto" />,
    title: "24/7 dedicated support",
    description: "We're here to help, talk to an expert",
  },
  {
    icon: <FeatCalendarBlank className="w-6 sm:w-auto" />,
    title: "Flexible bookings",
    description: "Book stress-free with easy cancellation",
  },
  {
    icon: <FeatShieldCheckered className="w-6 sm:w-auto" />,
    title: "100% secure payments",
    description: "Internationally recognized encrypted payment process",
  },
];
