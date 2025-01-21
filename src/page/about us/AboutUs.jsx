import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className='mt-32 md:w-10/12 space-y-2 mx-auto'>
          <p className=''> <span className='text-xl font-bold'>Hello! </span>👋 <span className='text-xl font-medium '>I'm Md.Shoriful Islam,</span> a passionate Full Stack Developer specializing in the MERN Stack (MongoDB, Express.js, React, Node.js). I enjoy building innovative, user-friendly web applications that solve real-world problems and make life easier.</p>

<p className='text-md '>Where I'm From <br />
I'm based in Gaibandha,Rangpur,Bangladesh. where I blend my love for technology and creativity to craft meaningful digital experiences.</p>

<ul>
<h1 className='text-xl font-bold underline uppercase'>My Skills :</h1>
<li className='list-disc ml-8'><span className='font-semibold'>Frontend</span>: React.js, HTML5, CSS3, JavaScript (ES6+),  TailwindCSS</li>

<li className='list-disc ml-8'><span className='font-semibold'>Database</span>: MongoDB</li>
<li className='list-disc ml-8'><span className='font-semibold'>Tools & Platforms</span>:  Git, GitHub, VS Code</li>
<li className='list-disc ml-8'><span className='font-semibold'>Others</span>:  React Router, DaisyUI, HeadlessUI,TailwindUI etc</li>
</ul>
<p>
Projects I've Worked On <br />
Here are a few of my favorite projects:
</p>

<div>
<h1 className='font-semibold'><span className='text-xl font-semibold'>1 .</span> Gadget Heaven</h1>
<p>A modern e-commerce platform showcasing gadgets with a responsive UI and robust backend.</p>
<li className='list-disc ml-8'><span className='font-semibold'><Link className='text-green' to={'https://gadgetheaven0360.netlify.app'}>Live Demo</Link></span></li>
<li className='list-disc ml-8'><span className='font-semibold'><Link className='text-green' to={'https://github.com/Shoriful0360/gadget-heaven-assing-8'}>GitHub</Link></span></li>
</div>

<div>
<h1 className='font-semibold'><span className='text-xl font-semibold'>1 .</span> Historical Artifacts Tracker</h1>
<p>A platform to explore and track historical artifacts with rich details and intuitive search functionality.</p>
<li className='list-disc ml-8'><span className='font-semibold'><Link className='text-green' to={'https://artifact-odyssey.web.app'}>Live Demo</Link></span></li>
<li className='list-disc ml-8'> <span className='font-semibold'><Link className='text-green' to={'https://github.com/Shoriful0360/Artifact-odessy-client'}>GitHub-client</Link></span></li>
<li className='list-disc ml-8'> <span className='font-semibold'><Link className='text-green' to={'https://github.com/Shoriful0360/artifact-odessy-server'}>GitHub-Server</Link></span></li>
</div>



<p>Let's Connect! <br />
I'm always excited to collaborate on interesting projects or discuss innovative ideas. Feel free to reach out to me via:</p>

<span className='text-base font-semibold'>Email</span> : shorifulbba0360@gmail.com <br />
<span className='text-base font-semibold'>phone</span> : 01307177507 <br />
<span className='text-base font-semibold'>LinkedIn</span> : <Link className='text-green' to={'https://www.linkedin.com/in/shoriful-islam-35b67a345'}>LinkedIn</Link> <br />
<span className='text-base font-semibold'>GitHub</span>: <Link className='text-green'  to={'https://github.com/Shoriful0360'}>GitHub</Link> <br />
Let’s build something amazing together! 🚀 
        </div>
    );
};

export default AboutUs;