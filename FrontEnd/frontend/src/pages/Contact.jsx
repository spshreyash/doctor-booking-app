import React, { useState } from 'react';
import emailjs from  "@emailjs/browser"
import { toast } from 'react-toastify';
export const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const data={
    email:email,
    subject:subject,
    message:message
  }
  const handleSubmit = (e) => {
    e.preventDefault();
     
    

      const ServiceId =import.meta.env.VITE_SERVICE_ID
      const TemplateId =import.meta.env.VITE_TEMPLATEID

      const PublicKey =import.meta.env.VITE_PUBLIC_KEY
  
       const templateParams={
        
        from_email:email,
        from_subject:subject,
         message:message,
        to_name: 'shreyash sanjay pawar'
       }

      //  send tht email here 
        emailjs.send(ServiceId,TemplateId,templateParams,PublicKey) 
        .then((res)=>{
           toast.success('email successfully send')
          console.log('email send successfully ',res)
          setEmail('');
            setMessage('');
           setSubject('');
        })
      .catch((err)=>
      {
         toast.error('email not send ')
        console.log('error sending mail ',err)
      })
    console.log(data);

    // You can add your API call here
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-2 text-center">Contact Us</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Got a technical issue? Want to send feedback about a beta feature? Let us know.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Your Email</label>
            <input
              type="email"
              placeholder="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              placeholder="Let us know how we help you"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Your Message</label>
            <textarea
              rows="4"
              placeholder="Leave a comment..."
              className="w-full border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
