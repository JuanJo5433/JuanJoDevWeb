import React from "react";
import Title from "./Title";
import "./scss/ContactMe.scss";

const ContactMe = () => {
    return (
        <div className="contactMeContainer">
            <Title title={"Contacto"} />
            <div className="contactMeContent">
                <div class="form-card1">
                    <div class="form-card2">
                        <form class="form">

                            <div class="form-field">
                                <input
                                    required=""
                                    placeholder="Name"
                                    class="input-field"
                                    type="text"
                                />
                            </div>

                            <div class="form-field">
                                <input
                                    required=""
                                    placeholder="Email"
                                    class="input-field"
                                    type="email"
                                />
                            </div>

                            <div class="form-field">
                                <input
                                    required=""
                                    placeholder="Subject"
                                    class="input-field"
                                    type="text"
                                />
                            </div>

                            <div class="form-field">
                                <textarea
                                    required=""
                                    placeholder="Message"
                                    cols="30"
                                    rows="10"
                                    class="input-field"
                                ></textarea>
                            </div>

                            <button class="sendMessage-btn">
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
