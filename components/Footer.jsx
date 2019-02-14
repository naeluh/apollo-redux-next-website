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
    <p>Contact: <a prefetch="true" target="_blank" rel="noopener noreferrer" title="Contact" alt="Contact" href="mailto:naeluh@gmail.com">naeluh@gmail.com</a></p>
    <p>Github: <a prefetch="true" target="_blank" rel="noopener noreferrer" title="Github" alt="Github" href="https://github.com/naeluh">https://github.com/naeluh</a></p>
    <p> <Link  href="/about"><a title="About" alt="About" prefetch="true">About</a></Link></p>
    <p> <Link  href="/contact"><a title="Contact" alt="Contact" prefetch="true">Contact</a></Link></p>
	</div>
	<div></div>
</footer>
)

export default Footer