
import { Mail, MailCheck } from 'lucide-react';
import Head from 'next/head';

function Aboutus() {
  return (
    <div>
      <Head>
        <title>ServiceSphere - About Us</title>
      </Head>
      <div className='md:w-1/2 mx-auto p-4'>
        <h1 className='text-4xl font-bold text-center '><u>ServiceSphere</u></h1>
        <img src="cusService.jpg" alt="image" className="w-full object-cover rounded-md" />
      </div>
      <div className="md:w-1/2 mx-auto p-4">
        <p className="mb-4">
          Welcome to ServiceSphere, your go-to platform for all your home service and repair needs. We are dedicated to connecting homeowners with the best service professionals in their area, ensuring top-quality repairs and maintenance for your home. Our mission is to make it easy for you to find trusted, skilled professionals who can help with everything from plumbing and electrical work to landscaping and cleaning.
        </p>
        <p className="mb-4">
          At ServiceSphere, we understand that your home is your sanctuary, and maintaining it should not be a hassle. Our platform is designed to streamline the process of finding reliable service providers, making it convenient and stress-free. Whether you need a quick fix or a major renovation, we have a wide range of professionals ready to assist you.
        </p>
        <p className="mb-4">
          Our team is committed to quality and customer satisfaction. We carefully vet all our service providers to ensure they meet our high standards of professionalism, expertise, and reliability. You can trust that when you choose ServiceSphere, you are getting the best service available. 
        </p>
        <p className='mb-4 text-red-600'>
          If anything like product damaged or broken, only the product company is responsible, not ServiceSphere nor employee. And if any robbery happens by our employee, we are responsible, also if anything is damaged in the customer's house by our employee, we are responsible.
        </p>
        <p className="mb-4">
          Thank you for choosing ServiceSphere. We look forward to helping you keep your home in top condition.
        </p>
        <p className="mb-4">
          For any inquiries or support, please feel free to contact us at support :
        </p>
        <a href="mailto:22oo1cs1o3somaraju@gmail.com" className="text-blue-500">
          <Mail></Mail>
          &nbsp;
          <span className="text-gray-500">Email:</span>
          &nbsp;
          <span className="text-blue-500">22oo1cs1o3somaraju@gmail.com</span>
        </a> 
        <p className="text-blue-500">or call us at +91 9014216240</p>
      </div>
    </div>
  );
}

export default Aboutus;
