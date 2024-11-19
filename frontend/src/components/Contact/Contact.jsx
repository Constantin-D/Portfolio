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

            setFormStatus(res.success ? "success" : "error");
        } catch (error) {
            setFormStatus("error");
        }
    };

    return (
        <PageTransition>
            <section className="contact">
                <h2>Contactez-moi</h2>
                <form className="contact__form" onSubmit={onSubmit}>
                    <fieldset className="contact__form-fieldset">
                        {/* <legend>Vos informations</legend> */}
                        {formFields.map((field) => (
                            <div
                                className="contact__form-fieldset--group"
                                key={field.id}
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
                            </div>
                        ))}
                    </fieldset>

                    <fieldset className="contact__form-fieldset">
                        {/* <legend>Votre message</legend> */}
                        <div className="contact__form-fieldset--group">
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
                        </div>
                    </fieldset>

                    <button type="submit" className="button">
                        {/* <FaPaperPlane aria-hidden="true" /> ENVOYER */}
                        {/* <img src="/icons/mail-send.svg" alt="Send mail" className="icon" /> */}
                        Envoyer
                    </button>

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
                </form>
            </section>
        </PageTransition>
    );
};

export default Contact;
