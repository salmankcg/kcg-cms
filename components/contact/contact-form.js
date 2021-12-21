import { useState, useEffect } from "react"
import classes from "./contact-form.module.css"
import Notification from "../ui/notification"
function ContactForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [requestStatus, setRequestStatus] = useState() // 'pending','success','error'
  const [requestError, setRequestError] = useState()

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null)
        setRequestError;
      }, 3000);
      return () => clearTimeout(timer)
    }
  }, [requestStatus]);

  async function sendContactData(msg) {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(msg),
      header: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!")
    }
  }
  async function sendMessageHandler(event) {
    event.preventDefault();
    setRequestStatus("pending")
    try {
      await sendContactData({ email, name, message })
      setRequestStatus("success")
      setRequestError()
      setEmail('')
      setName('')
      setMessage('')
    } catch (error) {
      setRequestError(error.message)
      setRequestStatus("error")
    }
  }
  let notification
  switch (requestStatus) {
    case "success":
      notification = {
        status: "success",
        title: "Success!",
        message: "Message sent successfully!",
      };
      break
    case "error":
      notification = {
        status: "error",
        title: "Error!",
        message: requestError,
      };
      break
    case "pending":
      notification = {
        status: "pending",
        title: "Pending!",
        message: "Sending...",
      };
      break
    default:
      notification = null;
  }
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {
        notification &&
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      }
    </section>
  );
}

export default ContactForm;
