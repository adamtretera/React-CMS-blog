
const initState = {
projects:[
    {id:'1', title:'Mojera blog', content:'Obsah blogu', perex:"Stučná popis blogu"}
    ]
}



const projcectReducer = (state = initState, action) =>{
    switch (action.type) {
        case "CREATE_PROJECT":
            console.log("create project",action.project);

            return state;
        case "CREATE_PROJECT_ERROR":
            console.log("create error", action.err);

            return state;
        default:
            return state;

    }

}
export default projcectReducer

