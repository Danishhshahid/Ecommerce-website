import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";
import { LuMessageSquareQuote } from "react-icons/lu";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";







const Gethelppage = () => {
  return (
    <div className='w-full h-[1400px] b flex items-center'>
        <div className='w-full h-full  m-6 flex flex-col'>
            <div className=' w-full h-[100px] flex flex-col justify-center gap-5 items-center'>
                <h1 className='text-3xl'>GET HELP</h1>
                <Input placeholder='How can we help you' className='w-[30%]'></Input>

            </div>
            <div className='w-full h-full  flex mt-6'>
                <div className='w-[70%] h-full  flex flex-col gap-4'>
                    <div className='ml-2 flex flex-col gap-6'>
                    <h1 className='text-4xl'>WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
                    <p>We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
                    <div className='flex flex-col gap-4 ml-4'>
                    <p>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
                    <p>If you enter your PAN information at checkout, you&#39;ll be able to pay for your order with PayTM or a local credit or debit card.</p>
                    <p>Apple Pay</p>
                    </div>
                    <p> <Link href={'/'} className='underline font-bold'>Nike Members</Link> can store multiple debit or credit cards in their profile for faster checkout. If you&#39;re not already a Member, join us today.</p>
                    <div className='flex gap-6 ml-6 '>
                        <Link href={'/signup'}>
                        <Button className='rounded-xl w-[100px]'>JOIN US</Button>
                        </Link>
                        <Link href={'/allproducts'}>
                        <Button className='rounded-xl w-[100px]'>SHOP NIKE</Button>
                        </Link>
                    </div>
                    </div>
                    <div className='flex flex-col gap-6 ml-2'>
                        <h1 className='text-xl'>FAQs</h1>
                        <p className='font-semibold'>Does my card need international purchases enabled?</p>
                        <p>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
                        <p>Please note, some banks may charge a small transaction fee for international orders.</p>
                        <p>Can I pay for my order with multiple methods?</p>
                        <p>No, payment for Nike orders can&#39;t be split between multiple payment methods.</p>
                        <p className='font-semibold'>What payment method is accepted for SNKRS orders?</p>
                        <p>You can use any accepted credit card to pay for your SNKRS order.</p>
                        <p className='font-semibold'>Why don&#39;t I see Apple Pay as an option?</p>
                        <div>
                        <p>To see Apple Pay as an option in the Nike App or on Nike.com, you&#39;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you&#39;ll need to use Safari to use Apple Pay on Nike.com.</p>
                        </div>
                        <p className='font-semibold'>Was this answer helpful?</p>
                        <div className='flex justify-start items-center  gap-3 text-3xl'>
                        <FaThumbsDown />
                        <FaThumbsUp />




                        </div>
                        <p className='text-gray-600'>RELATED</p>
                        <div>
                        <p> <Link href={'/'} className='font-semibold underline'>WHAT ARE NIKE&#39;s DELIVERY OPTIONS?</Link></p>
                        <p><Link href={'/'} className='font-semibold underline'> HOW DO I GET FREE DELIVERY ON NIKE ORDERS?b</Link></p>
                        </div>
                    </div>

                </div>
                <div  className='w-[30%] h-full border-l-2'>
                    <div className='flex flex-col justify-center items-center gap-6'>
                        <div className='flex flex-col items-center gap-4'>
                        <h1 className='text-3xl'>CONTACT US</h1>
                        <CiMobile3 className='text-[100px]' />
                        <p className='font-semibold'>0008009190566</p>
                        <p>Products & Orders: 24 hours a day,</p>
                        <p>7 days a week</p>
                        <p>Company Info & Enquiries: 07:30 - </p>
                        <p>16:30, Monday - Friday</p>
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                        <LuMessageSquareQuote  className='text-[100px]' />
                        < p className='font-semibold'>24 hours a day</p>
                        <p>7 days a week</p>

                        </div>
                        <div className='flex flex-col items-center gap-4'>
                        <IoMdMail  className='text-[100px]'/>
                        <p className='font-semibold'>We&#39;ll reply within</p>
                        <p>five business days</p>

                        </div>
                        <div className='flex flex-col items-center gap-4'>
                        <IoLocation className='text-[100px]' />
                        <p className='font-semibold'>STORE LOCATOR</p>
                         <p >Find Nike retail stores near you</p>

                            
                

                        </div>


                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Gethelppage