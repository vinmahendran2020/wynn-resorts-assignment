import { FaFacebookF, FaTwitter, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import cn from './utils/classnames';
import Link from 'next/link';
import Col from './Col';

type LinkItem = {
  href?: string;
  label: string;
};

type LinkSection = {
  title: string;
  items: LinkItem[];
};

const links: LinkSection[] = [
  {
    title: '',
    items: [
      { href: '#', label: 'Shop Home Collection' },
      { href: '#', label: 'Gift Cards' },
      { href: '#', label: 'Wynn Stories' },
      { href: '#', label: 'Wynn Slots App' },
      { href: '#', label: 'Mobile App' },
      { href: '#', label: 'Responsible Gaming' },
    ],
  },
  {
    title: '',
    items: [
      { href: '#', label: 'About Us' },
      { href: '#', label: 'Careers' },
      { href: '#', label: 'Investor Relations' },
      { href: '#', label: 'Privacy Notice' },
      { href: '#', label: 'Cookie Notice' },
      { href: '#', label: 'Terms of Use' },
      { href: '#', label: 'Hotel Information & Directory' },
    ],
  },
  {
    title: '',
    items: [
      { href: '#', label: 'Wynn Palace Cotai' },
      { href: '#', label: 'Encore Boston Harbor' },
      { href: '#', label: 'Wynn Macau' },
    ],
  }
];

const Footer = ({ className }: { className: string }) => {
  return (
    <div className={cn('text-regular-b4', className)}>
      <div className='mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-regular-b4'>
        {links.map((section, index) => (
          <Col key={index} className='space-y-2'>
            {section.title && <p className='font-semibold'>{section.title}</p>}
            {section.items.map((item, idx) => (
              item.href ? (
                <Link key={idx} href={item.href} className='hover:underline'>{item.label}</Link>
              ) : (
                <p key={idx}>{item.label}</p>
              )
            ))}
          </Col>
        ))}
        <Col className="space-y-2">
          <p className="font-semibold">Wynn and Encore Las Vegas</p>
          <p>3131 Las Vegas Blvd. Las Vegas, NV 89109</p>
          <p>+1 (702) 770-7000</p>

          <div className='flex space-x-4 mt-4'>
            <div className='bg-white p-2 bg-transparent rounded-2xl'><FaFacebookF size={20} className='text-green-180' /></div>
            <div className='bg-white p-2 bg-transparent rounded-2xl'><FaTwitter size={20} className='text-green-180' /></div>
            <div className='bg-white p-2 bg-transparent rounded-2xl'><FaInstagram size={20} className='text-green-180' /></div>
            <div className='bg-white p-2 bg-transparent rounded-2xl'><FaXTwitter size={20} className='text-green-180' /></div>
          </div>
        </Col>
      </div>

      <div className='text-center text-xs mt-6'>
        <p className='mb-2 hover:underline cursor-pointer'>Do Not Sell Or Share My Data</p>
        <p>© 2024 Wynn Resorts Holdings, LLC. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer

{/* <div className='flex flex-col space-y-2'>
          <div className='flex space-x-4 mt-4'>
            <div className='bg-white p-2 bg-transparent rounded-2xl'><FaFacebookF size={20} className='text-black' /></div>
            <div className='bg-white p-2 bg-transparent rounded-2xl'><FaTwitter size={20} className='text-black' /></div>
            <div className='bg-white p-2 bg-transparent rounded-2xl'><FaInstagram size={20} className='text-black' /></div>
            <div className='bg-white p-2 bg-transparent rounded-2xl'><FaXTwitter size={20} className='text-black' /></div>
          </div>
        </div> */}