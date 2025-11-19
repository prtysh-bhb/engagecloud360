import Link from 'next/link'
import {
  Inbox,
  Image,
  Megaphone,
  Bot,
  BarChart3,
  Phone,
  Users,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: Inbox,
      title: 'Unified Inbox',
      description: 'Manage all customer messages from WhatsApp, Email, Instagram, Messenger in one place.'
    },
    {
      icon: Image,
      title: 'Media Management',
      description: 'Central repository for all your media files with tagging and version control.'
    },
    {
      icon: Megaphone,
      title: 'Cross-Platform Ads',
      description: 'Create and manage ad campaigns across Facebook, Google, and more.'
    },
    {
      icon: Bot,
      title: 'AI Assistant',
      description: 'Automate tasks and get intelligent insights to improve customer engagement.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Suite',
      description: 'Comprehensive analytics and reporting for data-driven decisions.'
    },
    {
      icon: Phone,
      title: 'Cloud Phone',
      description: 'Make VoIP calls directly from the platform with recording and transcriptions.'
    },
    {
      icon: Users,
      title: 'Visitor Intelligence',
      description: 'Track website visitors and generate real-time insights for better conversions.'
    }
  ]

  const benefits = [
    'Save time with automation',
    'Improve customer response time by 60%',
    'Centralize all communication channels',
    'Data-driven decision making',
    'Scale efficiently across teams',
    'Maintain brand consistency'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 backdrop-blur-sm bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">E</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">EngageCloud360</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-slate-600 hover:text-slate-900 px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Integrate, Engage, Achieve
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            All-in-one platform for managing customer engagement, marketing campaigns,
            and analytics across multiple channels. Streamline your operations and boost efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/pricing"
              className="bg-white border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors font-semibold text-lg"
            >
              View Pricing
            </Link>
          </div>
          <p className="text-sm text-slate-500 mt-4">No credit card required • 14-day free trial</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">10k+</p>
              <p className="text-slate-400">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">60%</p>
              <p className="text-slate-400">Faster Response</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">15+</p>
              <p className="text-slate-400">Integrations</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">99.9%</p>
              <p className="text-slate-400">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-xl text-slate-600">
            Powerful features to manage all aspects of customer engagement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Why Choose EngageCloud360?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Unlike fragmented solutions, we offer a fully integrated platform
                that eliminates data silos and streamlines your workflow.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                    <span className="text-slate-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-yellow-400 fill-yellow-400" size={24} />
                ))}
              </div>
              <p className="text-slate-700 text-lg mb-4">
                "EngageCloud360 transformed how we manage customer interactions.
                Response time dropped by 60% and our team is more productive than ever."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-slate-300 rounded-full"></div>
                <div>
                  <p className="font-semibold text-slate-900">Sarah Johnson</p>
                  <p className="text-slate-600 text-sm">Marketing Director, TechCorp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl shadow-xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Customer Engagement?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of businesses using EngageCloud360
          </p>
          <Link
            href="/signup"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors font-semibold text-lg inline-flex items-center"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">EngageCloud360</h3>
              <p className="text-slate-400 text-sm">
                All-in-one customer engagement platform
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/dashboard" className="hover:text-white">Features</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2025 EngageCloud360. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
