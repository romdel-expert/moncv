import React from "react";
import { v4 as uuidv4 } from "uuid"

const Competences = () => {
    const skills = [
        {
            id: uuidv4(),
            catSkill: "Compétences techniques",
            blocComp: [
                {
                    id: uuidv4(),
                    title: "Langages de programmation",
                    levels: [
                        {
                            id: uuidv4(),
                            label: "Maitrisés",
                            listComp: [
                                {
                                    id: uuidv4(),
                                    title: "Java",
                                },
                                {
                                    id: uuidv4(),
                                    title: "Java JEE",
                                },
                                {
                                    id: uuidv4(),
                                    title: "PHP",
                                },
                                {
                                    id: uuidv4(),
                                    title: "C#",
                                },
                            ],
                        },
                        {
                            id: uuidv4(),
                            label: "Débutant",
                            listComp: [
                                {
                                    id: uuidv4(),
                                    title: "C",
                                },
                                {
                                    id: uuidv4(),
                                    title: "C++",
                                },
                                {
                                    id: uuidv4(),
                                    title: "Python",
                                },
                                {
                                    id: uuidv4(),
                                    title: "C#",
                                },
                            ],
                        },
                    ],
                },

                {
                    id: uuidv4(),
                    title: "Système de Gestion de Basse de Données (SGBD)",
                    levels: [
                        {
                            id: uuidv4(),
                            label: "Maitrisés",
                            listComp: [
                                {
                                    id: uuidv4(),
                                    title: "MySQL",
                                },
                                {
                                    id: uuidv4(),
                                    title: "SQL Server",
                                },
                                {
                                    id: uuidv4(),
                                    title: "SQL Server Compact",
                                },
                                {
                                    id: uuidv4(),
                                    title: "Oracle",
                                },
                            ],
                        },
                        {
                            id: uuidv4(),
                            label: "Débutant",
                            listComp: [
                                {
                                    id: uuidv4(),
                                    title: "SQLIte",
                                },
                            ],
                        },
                    ],
                },

                {
                    id: uuidv4(),
                    title: "Technologies Web",
                    levels: [
                        {
                            id: uuidv4(),
                            label: "Maitrisés",
                            listComp: [
                                {
                                    id: uuidv4(),
                                    title: "HTML",
                                },
                                {
                                    id: uuidv4(),
                                    title: "CSS",
                                },
                                {
                                    id: uuidv4(),
                                    title: "JavaScript",
                                },
                                {
                                    id: uuidv4(),
                                    title: "Ajax",
                                },
                                {
                                    id: uuidv4(),
                                    title: "JQuery",
                                },
                                {
                                    id: uuidv4(),
                                    title: "PHP",
                                },
                                {
                                    id: uuidv4(),
                                    title: "XML",
                                },
                            ],
                        },
                        {
                            id: uuidv4(),
                            label: "Débutant",
                            listComp: [
                                {
                                    id: uuidv4(),
                                    title: "JSP",
                                },
                            ],
                        },
                    ],
                },

                {
                    id: uuidv4(),
                    title: "Framework",
                    levels: [
                        {
                            id: uuidv4(),
                            label: "Maitrisés",
                            listComp: [
                                {
                                    id: uuidv4(),
                                    title: "Spring MVC",
                                },
                                {
                                    id: uuidv4(),
                                    title: "Spring Boot",
                                },
                                {
                                    id: uuidv4(),
                                    title: "Bootstrap",
                                },
                                {
                                    id: uuidv4(),
                                    title: "jQuery",
                                },
                                {
                                    id: uuidv4(),
                                    title: "ReactJS, React Native",
                                },
                                {
                                    id: uuidv4(),
                                    title: "Symfony",
                                },
                            ],
                        },
                        {
                            id: uuidv4(),
                            label: "Débutant",
                            listComp: [
                                {
                                    id: uuidv4(),
                                    title: "Angular",
                                },
                                {
                                    id: uuidv4(),
                                    title: "VueJS",
                                },
                                {
                                    id: uuidv4(),
                                    title: ".Net FrameWork",
                                },
                                {
                                    id: uuidv4(),
                                    title: ".Net Core",
                                },
                            ],
                        },
                    ],
                },

                {
                    id: uuidv4(),
                    title: "Web service",
                    levels: [
                        {
                            id: uuidv4(),
                            label: "Maitrisés",
                            listComp: [
                                {
                                    id: uuidv4(),
                                    title: "SOAP",
                                },
                                {
                                    id: uuidv4(),
                                    title: "REST",
                                },
                                {
                                    id: uuidv4(),
                                    title: "Bootstrap",
                                },
                            ],
                        },
                        {
                            id: uuidv4(),
                            label: "Débutant",
                            listComp: [
                                {
                                    id: uuidv4(),
                                    title: "Angular",
                                },
                                {
                                    id: uuidv4(),
                                    title: "VueJS",
                                },
                                {
                                    id: uuidv4(),
                                    title: ".Net FrameWork",
                                },
                                {
                                    id: uuidv4(),
                                    title: ".Net Core",
                                },
                            ],
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: "Web service",
                    levels: [
                        {
                            id: uuidv4(),
                            label: "Maitrisés",
                            listComp: [
                                {
                                    id: uuidv4(),
                                    title: "SOAP",
                                },
                                {
                                    id: uuidv4(),
                                    title: "REST",
                                },
                            ],
                        },
                        {
                            id: uuidv4(),
                            label: "Débutant",
                            listComp: [],
                        },
                    ],
                },

                {
                    id: uuidv4(),
                    title: "Mobile",
                    levels: [
                        {
                            id: uuidv4(),
                            label: "Maitrisés",
                            listComp: [
                                {
                                    id: uuidv4(),
                                    title: "Anndroid",
                                },
                                {
                                    id: uuidv4(),
                                    title: "Windows Embeded Handheld",
                                },
                            ],
                        },
                        {
                            id: uuidv4(),
                            label: "Débutant",
                            listComp: [
                                {
                                    id: uuidv4(),
                                    title: "iOS",
                                },
                            ],
                        },
                    ],
                },

                {
                    id: uuidv4(),
                    title: "Web service",
                    levels: [
                        {
                            id: uuidv4(),
                            label: "Maitrisés",
                            listComp: [
                                {
                                    id: uuidv4(),
                                    title: "Apache",
                                },
                                {
                                    id: uuidv4(),
                                    title: "Tomcat",
                                },
                                {
                                    id: uuidv4(),
                                    title: "Glassfish",
                                },
                                {
                                    id: uuidv4(),
                                    title: "JBoss",
                                },
                            ],
                        },
                        {
                            id: uuidv4(),
                            label: "Débutant",
                            listComp: [
                                {
                                    id: uuidv4(),
                                    title: "Node",
                                },
                            ],
                        },
                    ],
                },

                {
                    id: uuidv4(),
                    title: "Pack Office",
                    levels: [
                        {
                            id: uuidv4(),
                            label: "Maitrisés",
                            listComp: [
                                {
                                    id: uuidv4(),
                                    title: "Word",
                                },
                                {
                                    id: uuidv4(),
                                    title: "Excel",
                                },
                                {
                                    id: uuidv4(),
                                    title: "Power point",
                                },
                                {
                                    id: uuidv4(),
                                    title: "MS project",
                                },
                            ],
                        },

                        {
                            id: uuidv4(),
                            label: "Débutant",
                            listComp: [
                                {
                                    id: uuidv4(),
                                    title: "Access",
                                },
                                {
                                    id: uuidv4(),
                                    title: "MS project",
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        {
            id: uuidv4(),
            catSkill: "Compétences fonctionnelles",
            blocComp: [
                {
                    id: uuidv4(),
                    title: "Conception et développement ",
                    levels: [
                        {
                            id: uuidv4(),
                            label: "Maitrisés",
                            listComp: [
                                {
                                    id: uuidv4(),
                                    title: "Conception"
                                },
                                {
                                    id: uuidv4(),
                                    title: "Modélisation"
                                },
                                {
                                    id: uuidv4(),
                                    title: "architecture d’applications"
                                }
                            ]
                        },
                        {
                            id: uuidv4(),
                            label: "Débutant",
                            listComp: []
                        }
                    ]
                },

                {
                    id: uuidv4(),
                    title: "Conception d'ouvrages, produits ou événements",
                    levels: [
                        {
                            id: uuidv4(),
                            label: "Maitrisés",
                            listComp: [
                                {
                                    id: uuidv4(),
                                    title: "Maitrise des méthodes"
                                },
                                {
                                    id: uuidv4(),
                                    title: "Normes et outils standards de conception"
                                }
                            ]
                        },
                        {
                            id: uuidv4(),
                            label: "Débutant",
                            listComp: []
                        }
                    ]
                },

                {
                    id: uuidv4(),
                    title: "Architecture fonctionnelle SI",
                    levels: [
                        {
                            id: uuidv4(),
                            label: "Maitrisés",
                            listComp: [
                                {
                                    id: uuidv4(),
                                    title: "Conception des cartographies fonctionnelles et applicatives"
                                }
                            ]
                        },
                        {
                            id: uuidv4(),
                            label: "Débutant",
                            listComp: []
                        }
                    ]
                },

                {
                    id: uuidv4(),
                    title: "Gestion des contrôles, tests et diagnostics",
                    levels: [
                        {
                            id: uuidv4(),
                            label: "Maitrisés",
                            listComp: [
                                {
                                    id: uuidv4(),
                                    title: "Ecriture de dysfonctionnement"
                                },
                                {
                                    id:uuidv4(),
                                    title: "Incident ou accident"
                                },
                                {
                                    id:uuidv4(),
                                    title: "Analyse et compréhension de l'origine d'un dysfonctionnement, incident ou accident (spécifications du produit, processus…)"
                                }
                            ]
                        },
                        {
                            id: uuidv4(),
                            label: "Débutant",
                            listComp: []
                        }
                    ]
                },

                {
                    id: uuidv4(),
                    title: "Mise en exploitation / production et maintenance",
                    levels: [
                        {
                            id: uuidv4(),
                            label: "Maitrisés",
                            listComp: [
                                {
                                    id: uuidv4(),
                                    title: "Rédaction de documentation technique (guides utilisateur, guides métier, schémas d’architecture...)"
                                },
                                {
                                    id:uuidv4(),
                                    title: "Réalisation de paramétrage et le debugging de période de lancement"
                                }
                            ]
                        },
                        {
                            id: uuidv4(),
                            label: "Débutant",
                            listComp: []
                        }
                    ]
                }
            ]
        },
    ];

    return (
        <div className="cvContent">
            <div className="contentSkills">
                <h2>Compétences</h2>

                {skills.map((skill) => {
                    return (
                        <div key={skill.id}>
                            <h3>{skill.catSkill}</h3>

                            {skill.blocComp.map((bloc) => {
                                return (
                                    <div key={bloc.id} className="blocSkill">
                                        <div className="titleComp">{bloc.title}</div>

                                        <div className="caseSkill">
                                            {bloc.levels.map((level) => {
                                                return (
                                                    <div key={level.id}>
                                                        <div className="titleLevel">{level.label}</div>
                                                        <ul>
                                                            {level.listComp.map((comp) => {
                                                                return <li key={comp.id}>{comp.title}</li>;
                                                            })}
                                                        </ul>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Competences;
