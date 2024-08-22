import Section from './Section';

import { service1, check } from '../assets';
import { bluetoservices } from '../constants';

const HomeAbout = () => {
  return (
    <Section id='how-to-use'>
      <div className='container '>
        <div className='max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center'>
          <h2 className='h2 text-white text-2xl tracking-widest'>
            Blueto: Your Software Product Company
          </h2>
        </div>

        <div className='relative'>
          <div className='relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-stone-700 rounded-3xl overflow-hidden lg:p-20 xl:h-[39rem]'>
            <div className='absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto '>
              <img
                className='w-full h-full object-cover md:object-right '
                width={600}
                alt='about-blueto'
                height={700}
                src={service1}
              />
            </div>

            <div className='relative z-1 max-w-[32rem] ml-auto prose prose-invert prose-slate prose-lg'>
              {/* <p className='h4 mb-4 '>Blueto: Your Software Product Company</p> */}
              <p className='my-0  '>
                <blockquote class='border-l-4 border-blue-500 pl-4 italic text-white text-bold tracking-widest'>
                  <span>At Blueto,</span> "you are not just a client—you are the
                  CEO of your project."{' '}
                </blockquote>
              </p>

              <div className='prose prose-lg prose-invert '>
                <p className=''>
                  Transform your ideas into real-world applications with the
                  authority to make decisions and lead your project. You’ll
                  steer the direction while we manage the technical execution.
                </p>
                <ul className=' '>
                  {bluetoservices.map((item, index) => (
                    <li
                      key={index}
                      className='flex items-start my-0 border-t   border-dotted border-gray-500  '
                    >
                      <img width={24} height={24} src={check} alt='check-tag' />
                      <p className='ml-4'>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HomeAbout;
