
const User = ({id,name,phone,job}) => {
    
    return (
        <div>
            <h2>Users information</h2>
            <ul>
                <li><strong>id:</strong>{id}</li>
                <li><strong>name:</strong>{name}</li>
                <li><strong>phone:</strong>{phone}</li>
                <li><strong>job:</strong>{job}</li>
            </ul>
        </div>
    );
};

export default User;