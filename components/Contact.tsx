import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import githubIcon from '../../../public/Images/about.png' // Replace with actual GitHub icon path
import linkedinIcon from '../../../public/Images/about.png' // Replace with actual LinkedIn icon path

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <div className='z-10'>
      <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni debitis consectetur tempora eos suscipit, molestias inventore assumenda qui in natus labore dolore culpa ut modi quaerat blanditiis quo eum laudantium?</p>
        <div className='socials flex flex-row gap-2'>
          <Link href="https://github.com" passHref>
            {/* <a target="_blank" rel="noopener noreferrer"> */}
              <Image src={githubIcon} alt='GitHub Icon' width={32} height={32}/>
            {/* </a> */}
          </Link>
          <Link href="https://linkedin.com" passHref>
            {/* <a target="_blank" rel="noopener noreferrer"> */}
              <Image src={linkedinIcon} alt='LinkedIn Icon' width={32} height={32}/>
            {/* </a> */}
          </Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col'>
          <div className='mb-6'>
            <label htmlFor='email' className='text-white mb-2 block text-sm font-medium'>Your email</label>
            <input type='email' required id='email' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='nikgil@gmail.com'/>
          </div>
          <div className="mb-6">
            <label htmlFor='subject' className='text-white mb-2 block text-sm font-medium'>Subject</label>
            <input type='text' required id='subject' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='Just saying Hi!'/>
          </div>
          <div className='mb-6'>
            <label htmlFor='message' className='text-white block text-sm mb-2 font-medium'>Message</label>
            <textarea name='message' id='message' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='Lets Talk about...'/>
          </div>
          <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default EmailSection;
