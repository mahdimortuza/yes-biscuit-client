import lottie from '../../assets/404.json'
import Lottie from 'lottie-react';

const ErrorElement = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <Lottie className='w-72' animationData={lottie}></Lottie>
            </div>
        </div>
    );
};

export default ErrorElement;