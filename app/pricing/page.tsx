import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: 'Basic',
      price: 29,
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 5 team members',
        'Unified Inbox (2 channels)',
        '1,000 messages/month',
        'Basic templates',
        'Email support',
        '5 GB storage',
        'Basic analytics'
      ],
      cta: 'Start Free Trial',
      highlighted: false
    },
    {
      name: 'Pro',
      price: 99,
      description: 'For growing teams with advanced needs',
      features: [
        'Up to 25 team members',
        'Unified Inbox (all channels)',
        '10,000 messages/month',
        'Advanced templates',
        'Priority support',
        '50 GB storage',
        'Advanced analytics',
        'AI Assistant',
        'Cloud Phone',
        'Social media scheduling',
        'Ad campaign management'
      ],
      cta: 'Start Free Trial',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: null,
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited team members',
        'Unified Inbox (all channels)',
        'Unlimited messages',
        'Custom templates',
        'Dedicated support',
        'Unlimited storage',
        'Custom analytics',
        'AI Assistant',
        'Cloud Phone',
        'Social media scheduling',
        'Ad campaign management',
        'Custom integrations',
        'API access',
        'SLA guarantee',
        'Training & onboarding'
      ],
      cta: 'Contact Sales',
      highlighted: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 backdrop-blur-sm bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">E</span>
              </div>
              <span className="text-xl font-bold text-slate-900">EngageCloud360</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-slate-600 hover:text-slate-900">
                Home
              </Link>
              <Link href="/login" className="text-slate-600 hover:text-slate-900 px-4 py-2 rounded-lg hover:bg-slate-100">
                Login
              </Link>
              <Link href="/signup" className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Choose the perfect plan for your business. All plans include a 14-day free trial.
        </p>
        <div className="flex items-center justify-center space-x-4 mb-4">
          <span className="text-slate-600">Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
          </label>
          <span className="text-slate-600">Yearly <span className="text-green-600 font-semibold">(Save 20%)</span></span>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-2xl scale-105'
                  : 'bg-white text-slate-900 shadow-lg border border-slate-200'
              } p-8 relative`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.highlighted ? 'text-primary-100' : 'text-slate-600'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                {plan.price ? (
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className={`ml-2 ${plan.highlighted ? 'text-primary-100' : 'text-slate-600'}`}>
                      /month
                    </span>
                  </div>
                ) : (
                  <div className="text-4xl font-bold">Custom</div>
                )}
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 flex items-center justify-center space-x-2 ${
                  plan.highlighted
                    ? 'bg-white text-primary-600 hover:bg-slate-100'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight size={20} />
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <Check
                      size={20}
                      className={`flex-shrink-0 ${
                        plan.highlighted ? 'text-primary-100' : 'text-green-600'
                      }`}
                    />
                    <span className={`text-sm ${plan.highlighted ? 'text-primary-50' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Can I change my plan later?',
                a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.'
              },
              {
                q: 'Is there a setup fee?',
                a: 'No setup fees for any plan. You only pay the monthly or yearly subscription.'
              },
              {
                q: 'What happens after the free trial?',
                a: "After 14 days, you'll be charged based on your selected plan. You can cancel anytime during the trial."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl shadow-xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Start your 14-day free trial today. No credit card required.
          </p>
          <Link
            href="/signup"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-slate-100 font-semibold text-lg inline-flex items-center"
          >
            Start Free Trial
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
