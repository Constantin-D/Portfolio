import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import PageTransition from "../../components/PageTransition/PageTransition";
import "./contact.scss";

const Contact = () => {
    const [formStatus, setFormStatus] = useState(""); 

    const formFields = [
        {
            id: "name",
            label: "Nom",
            type: "text",
            placeholder: "Votre nom",
            name: "name",
            autocomplete: "family-name",
        },
        {
            id: "firstname",
            label: "Prénom",
            type: "text",
            placeholder: "Votre prénom",
            name: "firstname",
            autocomplete: "given-name",
        },
        {
            id: "email",
            label: "Email",
            type: "email",
            placeholder: "Votre email",
            name: "email",
            autocomplete: "email",
        },
    ];

    // Variants Framer Motion
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.2,
            },
        },
    };

    const fieldVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    };

    // Utilisation de l'API Web3Forms
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "fde7cf8f-e400-42d5-997e-bf695f93cf5b");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            }).then((res) => res.json());

            if (res.success) {
                setFormStatus("success"); 
            } else {
                setFormStatus("error"); 
            }
        } catch (error) {
            setFormStatus("error"); 
        }
    };

    return (
        <PageTransition>
            <section className="contact">
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={fieldVariants}
                >
                    Contactez-moi
                </motion.h1>
                <motion.form
                    className="contact__form"
                    onSubmit={onSubmit}
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.fieldset
                        className="contact__form-fieldset"
                        variants={fieldVariants}
                    >
                        <legend>Vos informations</legend>
                        {formFields.map((field) => (
                            <motion.div
                                className="contact__form-fieldset--group"
                                key={field.id}
                                variants={fieldVariants}
                            >
                                <label
                                    id={`label-${field.id}`}
                                    htmlFor={field.id}
                                >
                                    {field.label}
                                </label>
                                <input
                                    id={field.id}
                                    type={field.type}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    required
                                    autoComplete={field.autocomplete}
                                    aria-labelledby={`label-${field.id}`}
                                />
                            </motion.div>
                        ))}
                    </motion.fieldset>

                    <motion.fieldset
                        className="contact__form-fieldset"
                        variants={fieldVariants}
                    >
                        <legend>Votre message</legend>
                        <motion.div
                            className="contact__form-fieldset--group"
                            variants={fieldVariants}
                        >
                            <label htmlFor="message" id="label-message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Votre message"
                                required
                                aria-labelledby="label-message"
                            ></textarea>
                        </motion.div>
                    </motion.fieldset>

                    <motion.button
                        type="submit"
                        className="button"
                        variants={buttonVariants}
                    >
                        <FaPaperPlane aria-hidden="true" /> ENVOYER
                    </motion.button>

                    {formStatus === "success" && (
                        <p className="form-status success">
                            Votre message a été envoyé avec succès !
                        </p>
                    )}
                    {formStatus === "error" && (
                        <p className="form-status error">
                            Une erreur s'est produite. Veuillez réessayer plus
                            tard.
                        </p>
                    )}
                </motion.form>
            </section>
        </PageTransition>
    );
};

export default Contact;
