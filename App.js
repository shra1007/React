 //     let heading = document.createElement("h1");
    //     heading.innerHTML= "Hello World !!";
    //     let root = document.getElementById("root");
    //     root.appendChild(heading);
    
    let heading  = React.createElement("div",{
        id:"parent"
    },[React.createElement("div",{
        id:"child1"
    },React.createElement("h1",{
        id:"text"
    },"Hello World from React")),
    React.createElement("div",{
        id:"child2"
    },React.createElement("h1",{
        id:"text"
    },"Hello World from React"))
,
]);


    // to create a child element using createElement method we have to  createElelement as thrid parameter 
    //  to create two siblings we need to pass an array of createelements as thrird element


    let root = ReactDOM.createRoot(document.getElementById("root"));

//  JSX 



    root.render(heading)