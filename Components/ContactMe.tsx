import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid"
import {useForm, SubmitHandler} from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

type Props = {}

function ContactMe({}: Props) {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:bigyanpatel07769@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-5'>
            <h4 className='text-1xl font-semibold text-center md:text-3xl'>
                I have got just what you need.{' '}
                <span className='decoration-[#0ea5e9]/50 underline'>Lets Talk.</span>
            </h4>

            <div className='space-y-5'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#0ea5e9] h-7 w-7 animate-pulse'/>
                    <p className='text-1xl md:text-2xl'>+91 7978059880</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#0ea5e9] h-7 w-7 animate-pulse'/>
                    <p className='text-1xl md:text-2xl'>bigyanpatel07769@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#0ea5e9] h-7 w-7 animate-pulse'/>
                    <p className='text-1xl md:text-2xl'>Bolangir, Odisha, India</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                    <div className='flex justify-center space-x-2'>
                        <input {...register("name")} placeholder='Name' className='contactInput w-[10rem] md:w-auto' type="text" />
                        <input {...register("email")} placeholder='Email' className='contactInput w-[10rem] md:w-auto' type="email" />
                    </div>

                    <input {...register("subject")} placeholder='Subject' className='contactInput w-[21rem] md:w-auto'type="text" />

                    <textarea {...register("message")} placeholder='Message' className='contactInput w-[21rem] md:w-auto'></textarea>

                    <button type='submit' className='bg-[#0ea5e9] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactMe