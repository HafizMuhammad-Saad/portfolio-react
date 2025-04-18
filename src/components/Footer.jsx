
import { ButtonPrimary } from "./Button";

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Reviews',
      href: '#reviews'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://www.github.com/HafizMuhammad-Saad'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/hafiz-muhammad-saad-a959272b6/'
    },
    {
      label: 'Stackoverflow',
      href: 'https://stackoverflow.com/users/25592816/hafiz-muhammad-saad'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com'
    },
    {
      label: 'CodePen',
      href: 'https://codepen.io/Hafiz-Muhammad-Saad'
    }
  ];

const Footer = () => {
  return (
    <footer className="section">
        <div className="container">

            <div className="lg:grid grid-cols-2">
                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up"> 
                        Let's work together today!
                    </h2>

                    <ButtonPrimary href="mailto:studentsaad41@gmail.com" label="Start project" icon="chevron_right" className="reveal-up" />
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div>
                        <p className="mb-2 reveal-up">Sitemap</p>

                        <ul>
                            {sitemap.map(({label, href, }, key) => (
                                <li key={key}>
                                <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                                    {label}
                                </a>

                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2 reveal-up">Socials</p>

                        <ul>
                            {socials.map(({label, href, }, key) => (
                                <li key={key}>
                                <a href={href} target="_blank" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                                    {label}
                                </a>

                                </li>
                            ))}
                        </ul>
                    </div>
                </div>



            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
                <a href="" className="reveal-up">
                            <img src="/public/images/simple-elegant-letter-s-logo-design_579179-3445.avif" width={40} height={40} alt="Logo" />
                </a>

                <p className="text-zinc-500 text-sm reveal-up">
                    &copy; 2025 <span className="text-zinc-200">codewithsaad</span>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
