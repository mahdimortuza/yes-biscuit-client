import person from '../../../assets/images/about_us/person.jpeg'
import parts from '../../../assets/images/about_us/parts.jpeg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h2 className='text-xl font-bold text-orange-500'>About Us</h2>
                    <h1 className="text-5xl font-bold">Our artisan bakers pour heart and soul.</h1>
                    <p className="py-6">We understand the importance of sharing, and our cookies are perfect for gifting your loved ones or as delightful treats at special events and gatherings. </p>
                    <p className="py-6">At our Cookies Website, we value authenticity and transparency. Our production process is carried out in a state-of-the-art facility, adhering to the highest standards of hygiene and quality. You can trust that every cookie that leaves our bakery is made with love and a commitment to excellence. </p>
                    <button className="btn bg-orange-500 hover:bg-orange-700 text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;