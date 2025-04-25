'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-12 text-xl font-medium leading-relaxed font-in'>
      Hello! my name is <input 
      className='outline-none p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent border-0 ' 
      type="text" 
      placeholder="Your name" {...register("name", {required: true})} />
      and I want to discuss a potential project.You can email me at 
      <input className='outline-none p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent border-0 ' type="email" placeholder="Your Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      Or reach out to me on
      <input 
      className='outline-none p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent border-0 ' type="tel" placeholder="Your phone number" {...register("phone number", {required: true})} />
      Here are some datails about my project <br/>
      <textarea 
      placeholder='My project is about '
      rows={3}
      className='outline-none p-0 mx-2 focus:ring-0  placeholder:text-lg border-b border-gray focus:border-gray bg-transparent border-0 ' {...register("project details", {required: true})} />
 <br/>
      <input 
      className='mt-8 font-medium inline-block capitaalize text-xl py-3 px-8 border-2 border-solid border-dark pointer-cursor'
      type="submit" value="send request"/>
    </form>
  );
}