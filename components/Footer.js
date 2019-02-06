//===========//
// Footer.js //
//===========//
import Link  from 'next/link'
import React from 'react'

const Footer = () => (
<footer>
	<div>
    <p style={{
      fontWeight: '900',
      marginBottom: '1rem'
      }}><em>Nick Hulea</em></p>
    <p>Contact: <a target="_blank" rel="noopener noreferrer" title="Contact" alt="Contact" href="mailto:naeluh@gmail.com">naeluh@gmail.com</a></p>
    <p>Github: <a target="_blank" rel="noopener noreferrer" title="Github" alt="Github" href="https://github.com/naeluh">https://github.com/naeluh</a></p>
    <p> <Link title="About" alt="About" to="/about">About</Link></p>
    <p> <Link title="Contact" alt="Contact" to="/contact">Contact</Link></p>
	</div>
	<div></div>
</footer>
)

export default Footer