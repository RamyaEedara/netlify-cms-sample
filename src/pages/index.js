import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
<form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" data-netlify-recaptcha="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <div data-netlify-recaptcha="true"></div>
  <p>
    <button type="submit" to="/thankYouPage/" >Send</button>
  </p>
</form>
</div>
)

export default IndexPage