import React, { useRef } from "react";
import Title from "./Title";
import "./scss/ContactMe.scss";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2/dist/sweetalert2.js';


const ContactMe = () => {
    const serviceID = "default_service";
    const templateID = "template_20so0xm";
    const publicKeyID = "moJbnxicpB91S_Poz";
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(serviceID, templateID, form.current, {
                publicKey: publicKeyID,
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    Swal.fire({
                        // position: "top-end",
                        icon: "success",
                        title: "El correo fue enviado correctamente",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      form.current.reset();
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    Swal.fire({
                        // position: "top-end",
                        icon: "error",
                        title: "El correo no fue enviado, Intenta nuevamente",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            );
    };

    return (
        <div className="contactMeContainer" data-aos="flip-up">
            <Title title={"Contacto"} />
            <div className="contactMeContent">
                <div className="form-card1">
                    <div className="form-card2">
                        <form
                            className="form"
                            id="form"
                            onSubmit={sendEmail}
                            ref={form}
                        >
                            <div className="form-field">
                                <input
                                    required
                                    placeholder="Nombre"
                                    className="input-field"
                                    type="text"
                                    name="name"
                                    id="name"
                                />
                            </div>

                            <div className="form-field">
                                <input
                                    required
                                    placeholder="Correo Electronico"
                                    className="input-field"
                                    type="email"
                                    name="email"
                                    id="email"
                                />
                            </div>

                            <div className="form-field">
                                <input
                                    required
                                    placeholder="Asunto"
                                    className="input-field"
                                    type="text"
                                    name="subject"
                                    id="subject"
                                />
                            </div>

                            <div className="form-field">
                                <textarea
                                    required
                                    placeholder="Mensaje"
                                    cols="30"
                                    rows="10"
                                    className="input-field"
                                    name="message"
                                    id="message"
                                ></textarea>
                            </div>

                            <button
                                className="sendMessage-btn"
                                type="submit"
                                id="button"
                                value="Send Email"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <script
                type="text/javascript"
                src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
            ></script>

            <script type="text/javascript">
                emailjs.init('moJbnxicpB91S_Poz')
            </script>
        </div>
    );
};

export default ContactMe;
