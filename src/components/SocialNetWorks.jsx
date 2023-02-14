import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

import '../styles/components/socialNetWorks.sass'

const socialNetWorks = [
  { name: "linkedin", icon: <FaLinkedin />, social:'https://www.linkedin.com/in/lucas-barbosa-lima/' },
  { name: "github", icon: <FaGithub />, social:'https://github.com/lucas4l' },
];

const SocialNetWorks = () => {
  return (
    <section id="social-networks">
      {socialNetWorks.map((network) => (
        <a href={network.social} className='social-btn' 
          id={network.name} 
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </section> )
}

export default SocialNetWorks