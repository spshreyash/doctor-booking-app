import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import logo2 from './logo2.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    logo2
}

export const specialityData = [
    {
      speciality: 'General Physician',
      image: General_physician,
      description: 'Provides routine health checkups, diagnoses, and treats common illnesses. Your first point of contact for most health issues.'
    },
    {
      speciality: 'Gynecologist',
      image: Gynecologist,
      description: 'Specializes in women’s reproductive health and pregnancy care. Offers diagnosis and treatment for gynecological conditions.'
    },
    {
      speciality: 'Dermatologist',
      image: Dermatologist,
      description: 'Treats skin,                hair, and nail disorders. Offers solutions for acne, rashes, infections, and cosmetic concerns.'
    },
    {
      speciality: 'Pediatricians',
      image: Pediatricians,
      description: 'Cares for infants, children, and adolescents. Provides vaccinations, growth monitoring, and illness treatment.'
    },
    {
      speciality: 'Neurologist',
      image: Neurologist,
      description: 'Diagnoses and treats disorders of the brain and nervous system. Handles migraines, epilepsy, stroke, and more.'
    },
    {
      speciality: 'Gastroenterologist',
      image: Gastroenterologist,
      description: 'Specialist in digestive system issues. Manages problems related to the stomach, intestines, liver, and pancreas.'
    }
  ]
  

  export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Sanket Deshmukh',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: 'Kothrud',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Anjali Mehta',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
        fees: 60,
        address: {
            line1: 'Baner',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr.Mahesh pawar',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
        fees: 30,
        address: {
            line1: 'Wakad',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Yash Pawar',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
        fees: 40,
        address: {
            line1: 'Hinjewadi',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Neha Kulkarni',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
        fees: 50,
        address: {
            line1: 'Viman Nagar',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Sameer Patil',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
        fees: 50,
        address: {
            line1: 'Hadapsar',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Rohan Joshi',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
        fees: 50,
        address: {
            line1: 'Shivaji Nagar',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Smita Bhave',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
        fees: 60,
        address: {
            line1: 'Deccan',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Kavita Nair',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
        fees: 30,
        address: {
            line1: 'Kharadi',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Amit Bansal',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
        fees: 40,
        address: {
            line1: 'Pimple Saudagar',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Meera Iyer',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
        fees: 50,
        address: {
            line1: 'Aundh',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Nikhil Jain',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
        fees: 50,
        address: {
            line1: 'Bibvewadi',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Shweta Rao',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
        fees: 50,
        address: {
            line1: 'Sinhagad Road',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Manish Gokhale',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
        fees: 60,
        address: {
            line1: 'Erandwane',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Aishwarya Shetty',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
        fees: 30,
        address: {
            line1: 'Camp',
            line2: 'Pune, Maharashtra'
        }
    },
];



export const faqData = [
    {
      question: "What is your medical care?",
      answer: "Our medical care includes regular health checkups, chronic condition management, and referrals to specialists if needed."
    },
    {
      question: "What happens if I need to go to a hospital?",
      answer: "If hospital care is required, we will assist with the referral process and ensure your records are shared with the hospital for continuity of care."
    },
    {
      question: "Can I visit your medical office?",
      answer: "Yes, you can schedule an appointment to visit our medical office for consultations, checkups, or follow-ups."
    },
    {
      question: "Do you provide urgent care?",
      answer: "Yes, we provide urgent care for non-life-threatening conditions. For emergencies, please visit the nearest emergency room."
    }
  ];
  