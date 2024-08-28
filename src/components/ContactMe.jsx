import React from "react";
import Title from "./Title";
import "./scss/ContactMe.scss";

const ContactMe = () => {
    return (
        <div className="contactMeContainer" data-aos="flip-up">
            <Title title={"Contacto"} />
            <div className="contactMeContent">
                <div className="form-card1">
                    <div className="form-card2">
                        <form className="form">

                            <div className="form-field">
                                <input
                                    required=""
                                    placeholder="Name"
                                    className="input-field"
                                    type="text"
                                />
                            </div>

                            <div className="form-field">
                                <input
                                    required=""
                                    placeholder="Email"
                                    className="input-field"
                                    type="email"
                                />
                            </div>

                            <div className="form-field">
                                <input
                                    required=""
                                    placeholder="Subject"
                                    className="input-field"
                                    type="text"
                                />
                            </div>

                            <div className="form-field">
                                <textarea
                                    required=""
                                    placeholder="Message"
                                    cols="30"
                                    rows="10"
                                    className="input-field"
                                ></textarea>
                            </div>

                            <button className="sendMessage-btn">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
