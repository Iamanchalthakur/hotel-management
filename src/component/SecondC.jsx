function SecondComp(props) {

    const TeenAge = () =>{
        return <h1>junior</h1>

    }

    const Adult = () =>{
        return <h1>senior</h1>
    }

    const isSelected = props.isSelected;
    // if(isSelected)
    //     {
    //         return <Adult/>;
    //     }
    //     {
    //     return <TeenAge/>;
    // }

    //ternary condition............................................. 
    return (
        <>
            { isSelected ? <Adult/> : <TeenAge/>};

        </>
    )
    
    
}



export default SecondComp;

