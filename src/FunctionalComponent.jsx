
const FunctionalComponent = () => {
    let enter = prompt("please enter 1 or 2")
    return (
        <div>
          hi friends
          {enter =="1"?<h1>wellcome</h1>: <h1>please enter</h1>}
        </div>
    );
};

export default FunctionalComponent;