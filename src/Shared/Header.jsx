import moment from 'moment';
import headerImg from '../assets/logo.png'
const Header = () => {
    return (
        <div>
            <div className='my-5 text-center space-y-4'>
                <img className='mx-auto' src={headerImg} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;