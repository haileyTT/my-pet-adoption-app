import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({destination = '/'}) => {
    return (
        <div className = 'flex'>
            <Link to={destination} clasName = "w-fit"> 
                <BsArrowLeft className = 'text-2xl' />
            </Link>
        </div>
    )
}

export default BackButton