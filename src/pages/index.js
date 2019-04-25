import React from "react"

export default () => <div>
<form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
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
    <button type="submit" to="/thankPage/">Send</button>
  </p>
</form>
</div>

