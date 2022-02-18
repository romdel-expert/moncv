import React from "react";
import { v4 as uuidv4 } from "uuid"

const Experiences=() => {

    const jobs=[
        {
            id:uuidv4(),
            title: "Ingénieur Concepteur Développeur",
            company: "Indépendant",
            dateStart: "Mars 2014",
            dateEnd:"Présent",
            titleProject: "Création du site internet de la société DRIVIGO",
            resumeProject: "Il permet à la clientèle de Drivigo de commander un Véhicule de Transport avec Chauffeur (VTC) en ligne. Il s’agit de:",
            specFunction:[
                {
                    id:uuidv4(),
                    title: "La gestion de la clientèle"
                },
                {
                    id:uuidv4(),
                    title: "La gestion des commandes"
                },
                {
                    id:uuidv4(),
                    title: "La gestion du flot de véhicule"
                }
            ],

            titleRole:"Liste des taches (Développer le front-office, Développer le back-office)",
            listRoles:[
                {
                    id:uuidv4(),
                    title:"Etude du cahier des charges"
                },
                {
                    id:uuidv4(),
                    title:"Conception de l’architecture de l’application"
                },
                {
                    id:uuidv4(),
                    title: "Maquettage de l’application"
                },
                {
                    id:uuidv4(),
                    title:"Installation et configuration de l’environnement technique de travail (Server, IDE, SGBD, ..)"
                },
                {
                    id:uuidv4(),
                    title:"Conception du modèle de données et génération du schéma de données en utilisant MySQLWorkbench"
                },
                {
                    id:uuidv4(),
                    title: "Création de la base de données"
                },
                {
                    id:uuidv4(),
                    title: "Déploiement de la base de données sur le server"
                },
                {
                    id:uuidv4(),
                    title: "Administration de la base de données"
                },
                {
                    id:uuidv4(),
                    title: "Conception et développement de la couche métier de l’application + Tests unitaires"
                },
                {
                    id:uuidv4(),
                    title: "Développement du portail web"
                },
                {
                    id:uuidv4(),
                    title: "Hébergement de l’application"
                },
                {
                    id:uuidv4(),
                    title: "Prise en charge des maintenances corrective et évolutive"
                },
                {
                    id:uuidv4(),
                    title: "Rédaction des documents fonctionnel et technique"
                },
                {
                    id:uuidv4(),
                    title: "Formation sur le back-office"
                }
            ],
            titleSpecTech: "Environnement technique",
            specTechs:[
                {
                    id:uuidv4(),
                    title:"Conception (UML, Outil: BoUML)"
                },
                {
                    id:uuidv4(),
                    title: "Maquettage (Figma)"
                },
                {
                    id:uuidv4(),
                    title: "Front-end (HTML,  CSS 3, JavaScript, AngularJS 1.6)"
                },
                {
                    id:uuidv4(),
                    title: "Back-end (PHP 7, server: Apache, Rest API)"
                },
                {
                    id:uuidv4(),
                    title: "SGBD(MySQL)"
                },
                {
                    id:uuidv4(),
                    title:"Outil de versioning (Git)"
                },
                {
                    id:uuidv4(),
                    title: "IDE (NetBeans)"
                }
            ]
        }
    ];




    return(
        <div className="cvContent">
            <div className="contentExp">
                <h2>Expériences professionnelles</h2>

                {jobs.map(job => {
                    return(
                        <div key={job.id}>
                            <h3>{job.title}</h3>
                            
                            <div>
                                <span>{job.company}</span>
                                &nbsp; | &nbsp;
                                <span>{job.dateStart}</span>
                                &nbsp; - &nbsp;
                                <span>{job.dateEnd}</span>
                            </div>

                            <h4 className="colorCvText">{job.titleProject}</h4>
                            <p>{job.resumeProject}</p>

                            <ul>
                                {job.specFunction.map(fonct => {
                                    return(
                                        <li key={fonct.id}>{fonct.title}</li>
                                    )
                                })}
                            </ul>

                            <h4>{job.titleRole}</h4>
                            <ul>
                                {job.listRoles.map(role => {
                                    return(
                                        <li key={role.id}>{role.title}</li>
                                    )
                                })}
                            </ul>

                            <h4>{job.titleSpecTech}</h4>
                            <ul>
                                {job.specTechs.map(spec => {
                                    return(
                                        <li key={spec.id}>{spec.title}</li>
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

export default Experiences