import React from 'react';
import Title from "../Title";

export default function Contact() {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="Contact Us" />
                    <form className="mt5" action="https://formspree.io/moqnrdlv" method="POST">
                        <div className="form-group" style={{marginTop:"1rem"}}>
                            <input type="text" name="firstName" placeholder="First Name" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="abc@mail.com" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="subject" placeholder="Topic/Subject" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <textarea name="message" className="form-control" id="" cols="30" rows="10" placeholder="Type your message here:"></textarea>
                        </div>
                        <div className="form-group mt-3">
                            <input type="submit" value="Submit" className="form-control bg-light text-grey"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
