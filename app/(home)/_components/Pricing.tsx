import { Check } from "lucide-react"

const PricingCard = ({
  tier,
  price,
  description,
  features,
  isPopular = false,
}: {
  tier: string
  price: string
  description: string
  features: string[]
  isPopular?: boolean
}) => {
  return (
    <div
      className={`relative rounded-2xl p-0.5 ${isPopular ? "bg-gradient-to-br from-blue-600 to-purple-600" : "bg-[#1a1b35]"}`}
    >
      <div className="h-full rounded-2xl bg-[#13142d] p-6 sm:p-8">
        {isPopular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full py-1 px-3">
              <span className="text-xs font-medium text-white">Most Popular</span>
            </div>
          </div>
        )}

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white">{tier}</h3>
            <p className="mt-2 text-sm text-gray-400">{description}</p>
          </div>

          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-white">{price}</span>
            {price !== "Custom" && <span className="ml-1 text-gray-400">/month</span>}
          </div>

          <button
            className={`w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors
              ${
                isPopular
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
                  : "bg-[#1a1b35] text-white hover:bg-[#2a2b45]"
              }`}
          >
            Get Started
          </button>

          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-400">
                <Check className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Pricing() {
  const pricingPlans = [
    {
      tier: "Starter",
      price: "$29",
      description: "Perfect for small projects and individual creators",
      features: [
        "Up to 1,000 words per month",
        "Basic voice selection",
        "Standard support",
        "2 voice styles",
        "Basic analytics",
      ],
    },
    {
      tier: "Professional",
      price: "$99",
      description: "Ideal for growing businesses and content creators",
      features: [
        "Up to 10,000 words per month",
        "Premium voice selection",
        "Priority support",
        "10 voice styles",
        "Advanced analytics",
        "Custom pronunciations",
        "API access",
      ],
      isPopular: true,
    },
    {
      tier: "Enterprise",
      price: "Custom",
      description: "For large organizations with custom needs",
      features: [
        "Unlimited words",
        "Full voice library access",
        "24/7 dedicated support",
        "Unlimited voice styles",
        "Custom voice creation",
        "Advanced API features",
        "Custom integration support",
        "Service level agreement",
      ],
    },
  ]

  return (
    <div className=" min-h-screen py-16 px-4"
    style={{
        background: "linear-gradient(to bottom, #24244b, #090932)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">Choose Your Plan</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select the perfect plan for your needs. All plans include our core features with different levels of
            processing power and support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              tier={plan.tier}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            All prices are in USD and billed monthly. Need a custom plan?{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

