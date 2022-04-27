import React, { useState} from "react";



function Dashboard(props) {
    const [subjects, csubjects] = useState([])
    

    const refreshList = () => {
        props.client.postSubjects().then((response) => csubjects(response.data))
    }}

    export default Dashboard
