import React from 'react';
import Accordion from "src/components/Accordion/Accordion";
import {Rating} from "src/components/Rating/Rating";


function App() {
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <Rating value={3}/>
            <Accordion title={'Menu'}/>
            <PageTitle title={'My friends'}/>
            <Rating value={4}/>
            <Accordion title={'Burger'}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
