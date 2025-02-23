import { Github, Globe } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

interface TeamMember {
  name: string
  role: string
  github?: string
  website?: string
}

const moderators: TeamMember[] = [

]

const developers: TeamMember[] = [
 {
    name: "Nayan Acharya",
    role: "Moderator",
    github: "https://github.com/Nayan135",
    website: "https://nayan135.night-owls.tech",
  },
  {
    name: "Narayan Bhusal",
    role: "Moderator",
    github: "https://github.com/",
    website: "https://naranbhusal02.night-owls.tech",
  },
  {
    name: "Dilip Acharya",
    role: "Moderator",
    github: "https://github.com/",
    website: "https://jct-b.night-owls.tech",
  },
  {
    name: "Shasank Shrestha",
    role: "Developer",
    github: "https://github.com/",
    website: "https://shasankshrestha.night-owls.tech",
  },
  {
    name: "Sanjog Pandey",
    role: "Developer",
    github: "https://github.com/",
    website: "https://sanjogpandey.night-owls.tech",
  },
  {
    name: "Rabin Chudali",
    role: "Developer",
    github: "https://github.com/",
    website: "https://rabinchudali.night-owls.tech",
  },
    {
    name: "Prazwol Roka",
    role: "Developer",
    github: "https://github.com/",
    website: "https://prazwolroka.night-owls.tech",
  },
  
 /* {
    name: "Nishan Regmi",
    role: "Developer",
    github: "https://github.com/",
    website: "https://example.com",
  },*/
]

export default function MaintenancePage() {
  return (
    <> 
      <Head>
        <title>Night Owls | Home</title>
        <meta name="description" content="Join Night Owls: A community where developers collaborate and innovate." />
        <meta name="keywords" content="Night Owls, Developer Community, Collaboration, Open Source Projects, Tech Community" />
        <meta property="og:title" content="Night Owls | Home" />
        <meta property="og:description" content="Join Night Owls: A community where developers collaborate and innovate." />
        <meta property="og:url" content="https://nightowls.tech" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Night Owls" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Night Owls | Home" />
        <meta name="twitter:description" content="Join Night Owls: A community where developers collaborate and innovate." />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Under Maintenance</h1>
            <p className="text-xl text-gray-300 mb-8">We&apos;re currently updating our systems to serve you better.</p>
            <div className="inline-block border border-yellow-500 rounded-lg px-6 py-3 text-yellow-500">
              Expected downtime: A few hours
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-center">Our Development Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {developers.map((dev) => (
                  <div key={dev.name} className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm border border-gray-700">
                    <h3 className="font-medium mb-2">{dev.name}</h3>
                    <p className="text-sm text-gray-400 mb-3">{dev.role}</p>
                    <div className="flex gap-3">
                      {dev.github && (
                        <Link
                          href={dev.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </Link>
                      )}
                      {dev.website && (
                        <Link
                          href={dev.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <Globe className="h-5 w-5" />
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          
          </div>

          <footer className="text-center mt-16 text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Light Owls. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  )
}

