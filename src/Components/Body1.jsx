import React from "react";
import img7 from "../assets/heading-img.png";
import img8 from "../assets/text-circle.png";
import img9 from "../assets/circle-img.png";
import img10 from "../assets/real-history-book.jpg";
import img11 from "../assets/real-history-boy.jpg";
function Body1() {
  return (
    <>
      
        <section className="position-relative">
          <div class="container1 my-10">
            <div class="heading">
              <img src={img7} alt="icon" />
              <p>Welcome to the Islamic Center</p>
              <h2>Know The Real History of Islam</h2>
            </div>
            <div class="row">
              <div class="col-lg-5">
                <div class="islamic-history">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscsed do
                    eiusmod tempor incididunt ut labore etedum dolor sit a ad
                    minim veniam, quis nostr incididunt ut laborcitationn tempor
                    incididunt ut labore um dolor sit amet, consectetur
                    adipiscsed do eiu agna a liqua. Ut enim ad minim veniam,
                    quis nostr incididunt ut laborcitation.
                  </p>
                  <ul class="list">
                    <li>Astonishing Facilities</li>
                    <li>Helping CommunitiesLeads </li>
                    <li>Charity EventsSchooling Children</li>
                    <li>Feeding Hungry People</li>
                  </ul>
                  <a href="#" class="btn">
                    Read Our History
                  </a>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="row align-items-end">
                  <div class="col-lg-5 col-6">
                    <div class="circle-text">
                      <img
                        src={img8}
                        class="circle-text-img"
                        alt="circle-img"
                      />
                      <figure class="circle-img">
                        <img src={img9} alt="circle-img" />
                      </figure>
                    </div>
                    <div class="real-history-book hoverimg">
                      <figure>
                        <img src={img10} alt="img" />
                      </figure>
                    </div>
                  </div>
                  <div class="col-lg-7 col-6">
                    <div class="real-history-book two hoverimg">
                      <figure>
                        <img src={img11} alt="real-history-boy" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="container2">
            <div class="community-hoverimg">
              <div className="salahimg">
                <figure>
                  <img src={img12} alt="img" />
                </figure>
              </div>
              <div class="community-text1">
                <p>Community</p>
                <svg src={svg} />
              </div>
              <div className="salahimg2">
                <figure>
                  <img src={img13} alt="img" />
                </figure>
                <div class="community-text2">
                  <p>Sample text</p>
                </div>
              </div>
              <div className="salahimg3">
                <figure>
                  <img src={img14} alt="img" />
                </figure>
                <div class="community-text3">
                  <p>Sample text</p>
                </div>
              </div>
            </div>
          </div> */}
        </section>
      
    </>
  );
}

export default Body1;
