import { Users, MessageSquare, Award, Rocket } from 'lucide-react';

export default function Community() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Discussion Forums',
      description: 'Connect with peers and industry experts'
    },
    {
      icon: Award,
      title: 'Mentorship',
      description: 'Find mentors to guide your career journey'
    },
    {
      icon: Users,
      title: 'Study Groups',
      description: 'Join groups based on your interests'
    },
    {
      icon: Rocket,
      title: 'Events',
      description: 'Virtual meetups and workshops'
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Community</h1>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Coming Soon
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
            Join our thriving community of professionals and accelerate your career growth together.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-center group hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-600 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-white/10">
                  <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm group-hover:text-white/90">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
            Join the Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}