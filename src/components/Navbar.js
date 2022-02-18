import React from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { BiMap } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa"
import { BsGithub } from "react-icons/bs"
import { FiMail } from "react-icons/fi"



const Navbar=() => {


    const links=[
        {
            id:uuidv4(),
            path:'/',
            value:'Accueil'
        },
        {
            id:uuidv4(),
            path:'/competences',
            value:'Compétences'
        },
        {
            id:uuidv4(),
            path:'/experiences',
            value:'Expériences'
        },
        {
            id:uuidv4(),
            path:'/formations',
            value:'Formations'
        },
        {
            id:uuidv4(),
            path:'/hobbies',
            value:'Hobbies'
        },
        {
            id:uuidv4(),
            path:'/langues',
            value:'Langues'
        },
        {
            id:uuidv4(),
            path:'/references',
            value:'Réferences'
        },
        {
            id:uuidv4(),
            path:'/contacts',
            value:'Contacts'
        }
    ];
    

    return(
        <nav>
            <div>
                <img src="https://www.publicdomainpictures.net/pictures/270000/nahled/avatar-people-person-business-u.jpg" alt="Poster de mon CV"></img>
            </div>


            <div className="contact">
                <div>Contact</div>
                
                <p>
                    <i><BiMap /></i>
                    <div>
                        14, Av de la Renaissance
                        95190, GOUSSAINVILLE        
                    </div>
                </p>

                <p>
                    <i><BsTelephone /></i>
                    <div>
                        +33 6 20 06 40 27
                    </div>
                </p>

                <p>
                    <i><FiMail /></i>
                    <div>
                        rjeandelince@gmail.com
                    </div>
                </p>

                <div>
                    <NavLink to={"/https://www.linkedin.com/in/jeandelince-romelus"}>
                       <FaLinkedin />
                    </NavLink>
                    
                    <NavLink to={"https://github.com/romdel-expert/"}>
                        <BsGithub />
                    </NavLink>
                </div>
            </div>



            <ul>
                {links.map(link => {
                    return(
                        <li key={link.id}>
                            <NavLink to={link.path}>
                                {link.value}
                            </NavLink>
                        </li>)
                })}
            </ul>
        </nav>
    )
}

export default Navbar