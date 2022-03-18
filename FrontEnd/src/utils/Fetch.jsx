

export const FetchLogin = async (user, pass) => {
    let data={
        "legajo": user,
        "password": pass
    }

    let reponse = await fetch('https://hackathon-telecom.herokuapp.com/api/usuarios/login', {
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            method: 'POST',
                            body: JSON.stringify(data)
                            })
    let JSONreponse = await reponse.json();

    if (reponse.ok) {
     
             return JSONreponse
     }else {
            alert("password o usuario incorrecto");
            return {legajo: null, nombre:null, id_usuario:null}
            
     }

}

export const FetchCourseList = async () => {
    let reponse = await fetch('https://hackathon-telecom.herokuapp.com/api/cursos', {
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            method: 'GET',
                            })
    let JSONreponse = await reponse.json();
     
    if (reponse.ok) {
             return JSONreponse;
     }else {
            alert("error al obtener el catalogo");
            return false;
            
     }
}

export const FetchCourse = async (idCourse) => {
    let reponse = await fetch('https://hackathon-telecom.herokuapp.com/api/cursos/'+idCourse, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET',
        })
    let JSONreponse = await reponse.json();

    if (reponse.ok) {
        return JSONreponse;
    }else {
        alert("error al obtener el catalogo");
    return false;

}
}

export const FetchAsign = async () => {
    return true;
}

export const FetchAsignbyUser = async (idUser) => {
    return true;
}
