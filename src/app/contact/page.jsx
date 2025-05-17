// app/contact/page.jsx
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const people = [
  {
    name: 'Rishabh Gupta',
    role: 'Full-Stack Developer',
    image: '/a.jpg', // Replace with actual image path in /public
    socials: {
      linkedin: 'https://www.linkedin.com/in/rishabh19g/',
      github: 'https://github.com/rishabh21g',
      twitter: 'https://x.com/rishabh21g',
    },
  },
  {
    name: 'Ayush Das',
    role: 'Frontend Developer',
    image: '/b.jpg',
    socials: {
      github: 'https://github.com/ayushd150',
      twitter: 'https://x.com/Ayushd150',
    },
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Meet the Developers</h1>
        <div className="grid md:grid-cols-2 gap-12">
          {people.map((person, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-teal-500"
                />
                <div>
                  <h2 className="text-xl font-semibold">{person.name}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{person.role}</p>
                </div>
              </div>
              <div className="flex gap-4 mt-4 ml-1">
                {person.socials.linkedin && (
                  <a
                    href={person.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaLinkedin size={24} />
                  </a>
                )}
                {person.socials.github && (
                  <a
                    href={person.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 dark:text-gray-200 hover:text-gray-600"
                  >
                    <FaGithub size={24} />
                  </a>
                )}
                {person.socials.twitter && (
                  <a
                    href={person.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-500 hover:text-sky-700"
                  >
                    <FaTwitter size={24} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}