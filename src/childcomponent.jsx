const childcomponent = ({first,children}) => {
    return (
        <div>
            <h1>childcomponent</h1>
            <div>{first}</div>
            <div>{children}</div>
        </div>
    );
};

export default childcomponent;