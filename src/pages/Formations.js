import React from "react";

const Formations=() => {

    const studies=[
        {
            id:1,
            dateStart: "Déc. 2021",
            dateEnd: "Avril 2022",
            school: "Alta-RH Consulting",
            sturdyName: "Développeur Web et Mobile",
            modules:[
                {
                    id:1,
                    name: "HTML5"
                },
                {
                    id:2,
                    name: "CSS3"
                },
                {
                    id:3,
                    name: "Algorithmique"
                },
                {
                    id:4,
                    name: "JavaScript"
                },
                {
                    id:5,
                    name: "ReactJS"
                },
                {
                    id:6,
                    name: "UML"
                },
                {
                    id:7,
                    name: "Git"
                },
                {
                    id:8,
                    name: "PHP / PHM Orienté objet"
                },
                {
                    id:9,
                    name: "AJAX"
                },
                {
                    id:10,
                    name: "WordPress pour les développeurs"
                },
                {
                    id:11,
                    name: "Symfony"
                },
                {
                    id:12,
                    name: "Merise / MySQL"
                }
            ]
        },
        {
            id:1,
            dateStart: "Sept. 2011",
            dateEnd: "Sept 2013",
            school: "Université de Poitiers et ENSMA",
            sturdyName: "Master Informatique",
            modules:[
                {
                    id:1,
                    name: "Ingénerie des données"
                },
                {
                    id:2,
                    name: "Architecture Client-Server"
                },
                {
                    id:3,
                    name: "Architecture des applications web"
                },
                {
                    id:4,
                    name: "IHM (Interaction Homme Machine)"
                },
                {
                    id:5,
                    name: "Synthèse d'image"
                },
                {
                    id:6,
                    name: "Sécurité des réseaux"
                },
                {
                    id:7,
                    name: "Conduite de projet"
                },
                {
                    id:8,
                    name: "Théorie des langages et compilation"
                },
                {
                    id:9,
                    name: "Programmation Orientée Objet"
                }
            ]
        }
    ];

    return(
        <div className="cvContent">
            <div className="contentForm">
                <h2>Formations</h2>

                {studies.map(study => {
                    return(
                        <div>
                            <h3>
                                <div className="titleFormation">
                                    <div>
                                        <span>{study.dateStart}</span>
                                        &nbsp; - &nbsp;
                                        <span>{study.dateEnd}</span>
                                    </div>

                                    <div>{study.school}</div>
                                </div>
                            </h3>

                            <h4>{study.sturdyName}</h4>

                            <ul>
                                {study.modules.map(module => {
                                    return(
                                        <li>{module.name}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Formations