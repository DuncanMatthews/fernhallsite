import Link from "next/link";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import TestimonialSlider from "../src/components/sliders/TestimonialSlider";
import Layout from "../src/layouts/Layout";
import { Accordion } from "react-bootstrap";
import Image from "next/image";
import { useState } from "react";

import OrgariumAcc from "../src/components/OrgariumAcc";
import PageBanner3 from "../src/components/PageBanner3";

// Settings for the Slider
const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,  // Enable automatic sliding
  autoplaySpeed: 2000,  // Set the delay between each slide (in milliseconds)
  arrows: false,  // Disable the next/previous buttons
};



const Services = () => {
  const [active, setActive] = useState("collapse0");
  return (
    <Layout>
      <PageBanner3 pageName={"CO-OP"} />
      <section className="about-section p-r z-1 pt-170 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content-box content-box-gap mb-50">
                <div className="section-title section-title-left wow fadeInUp mb-30">
                  <span className="sub-title">Learn</span>
                  <h2>Engaging Education at a  &amp;  Merino Wool Sheep Farm</h2>
                </div>
                <p>
                Join us in the enchanting setting of an organically run Merino wool sheep farm. Here at Fern Hall, weve collaborated with our founding parents to create an immersive, two-day educational program. Designed for children aged 6-13, our co-op blends education, fun, and growth in a unique setting.


                </p>
                <div className="choose-item-list wow fadeInDown">
                  <div className="single-choose-item mb-30">
                    <div className="text">
                      <h5>Multidisciplinary, Nature-Based Continuous Projects:</h5>
                      <p>
                      Our students experience the intersections of math, history, science, art, and technology through long-term, relevant projects.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="single-choose-item mb-30">
                    <div className="text">
                      <h5>Collaborative Work and Peer Mentoring: </h5>
                      <p>Our program fosters deeper relationships among students of all ages. Under teacher guidance, they work together and learn from each other, becoming experts in various topics.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="single-choose-item mb-30">
                    <div className="text">
                      <h5>Subject Matter Expert Exposure: </h5>
                      <p>We believe in fuelling the fire of curiosity in our students. To this end, we bring in experts passionate about their field of study, covering various scientific, technological, and trade topics.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <p>Our dedicated teachers for the year are Holly Giannico and Michael Healy. To learn more about them and to view a sample daily schedule, click here.</p>
              </div>
            </div>
            <div className="col-lg-6">
  
  <div className="about-slider">
  <Slider {...sliderSettings}>
     <div>
        <Image
              src="/assets/images/Co-Op/Nature-Based-1.JPG"
          className="about-img_one"
          alt=""
          width={1200}
          height={900}
        />
      </div>
      <div>
      <Image
      src="/assets/images/Co-Op/Nature-Based-2.JPG"
      alt="Landscape picture"
      width={1200}
          height={900}
          className="about-img_one"
    />
    </div>
    </Slider>
  </div>
 
           
             
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start Skill Section ======*/}
      
      {/*====== End Skill Section ======*/}
      {/*====== Start Service Section ======*/}
      <section className="farmers-team_two light-gray-bg pb-60 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title"></span>
                <h2>Some of Our Project Work Includes:</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="single-service-item mb-50 wow fadeInUp">
                <div className="icon">
                  <Image src="/assets/images/icon/icon-1.png" alt="Icon"
                   width={60 }
                   height={60 } />
                </div>
                <div className="text">
                  <h3>
                    <Link href="/service-details">
                      <a>Childrens garden</a>
                    </Link>
                  </h3>
                  <p>The project culminates with students building their own farm stand to display and share the fruits of their hard work.

</p>
                </div>
              </div>
              <div className="single-service-item mb-50 wow fadeInDown">
                <div className="icon">
                  <Image src="/assets/images/icon/icon-2.png" width={60 }
                   height={60 } alt="Icon" />
                </div>
                <div className="text">
                  <h3>
                    <Link href="/service-details">
                      <a>Makeblock Bot and Maze building</a>
                    </Link>
                  </h3>
                  <p>The professional software developer ensures a real-life insight into the world of coding.</p>
                </div>
              </div>
              <div className="single-service-item mb-50 wow fadeInUp">
                <div className="icon">
                  <Image src="/assets/images/icon/icon-3.png" width={60}
                   height={60 } alt="Icon" />
                </div>
                <div className="text">
                  <h3>
                    <Link href="/service-details">
                      <a>Bravewriter and creative writin</a>
                    </Link>
                  </h3>
                  <p>Harnessing the Bravewriter methodology, students are encouraged to express themselves freely and creatively through writing</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img-holder mb-50 wow fadeInDown">
                <Image
                  src="/assets/images/Co-Op/Nature-Based-3.JPG"
                  alt="Service Image"
                  width={370}
                   height={580}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-service-item mb-50 card-rtl wow fadeInDown">
                <div className="icon">
                  <Image src="/assets/images/icon/icon-4.png" width={60 }
                   height={60 } alt="Icon" />
                </div>
                <div className="text">
                  <h3>
                    <Link href="/service-details">
                      <a>Art exploration</a>
                    </Link>
                  </h3>
                  <p>Children are introduced to various art forms, techniques, and artists, fostering their creativity</p>
                </div>
              </div>
              <div className="single-service-item mb-50 card-rtl wow fadeInUp">
                <div className="icon">
                  <Image src="/assets/images/icon/icon-5.png" width={60 }
                   height={60 } alt="Icon" />
                </div>
                <div className="text">
                  <h3>
                    <Link href="/service-details">
                      <a>Melscience kits</a>
                    </Link>
                  </h3>
                  <p>Leveraging Melscience kits, students participate in safe and exciting scientific experiments. They explore various scientific concepts, fostering their curiosity and understanding of the world.</p>
                </div>
              </div>
              <div className="single-service-item mb-50 card-rtl wow fadeInDown">
                <div className="icon">
                  <Image src="/assets/images/icon/icon-6.png" width={60 }
                   height={60 } alt="Icon" />
                  
                </div>
                <div className="text">
                  <h3>
                    <Link href="/service-details">
                      <a>Rugby skills (Fall)</a>
                    </Link>
                  </h3>
                  <p>JP Smith from the Seattle Seawolves introduces the basics of Rugby, enhancing students teamwork, strategic thinking, and physical fitness.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
      
      {/*====== End Partners Section ======*/}
      {/*====== Start Portfolio Section ======*/}
  
      {/*====== End Portfolio Section ======*/}
     {/*====== Start Faq Section ======*/}
     <section className="faqs-section pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="faq-one_img-box mb-50">
                <img
                  src="/assets/images/Co-Op/Nature-Based-4.JPG"
                  className="faq-img-one wow fadeInUp"
                  alt="Faq Image"
                />
                <img
                  src="/assets/images/Co-Op/Nature-Based-5.JPG"
                  className="faq-img-two wow fadeInDown"
                  alt="Faq Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-one_content-box mb-50 pl-lg-70 wow fadeInRight">
                <div className="section-title mb-60">
                  <span className="sub-title">Why Choose Us</span>
                  <h2>Questions you may asks</h2>
                </div>
                <Accordion
                  defaultActiveKey="collapse0"
                  className="accordion"
                  id="accordionOne"
                >
   
<OrgariumAcc
      title={"How does the program handle snow days?"}
      answer={"We do not follow a traditional school district schedule for snow days. Instead, we determine whether to hold classes based on road safety. If the roads are safe for travel, we will hold classes. We aim to provide as much notice as possible if we need to close due to weather conditions."}
      event={"collapse0"}
      onClick={() => setActive("collapse0")}
      active={active}
    />
    <OrgariumAcc
      title={"What happens if a student misses a day?"}
      answer={"If a student misses a class, they have the option to contact their teacher to discuss how to catch up on what they missed. We value flexibility and understand that absences may sometimes be unavoidable."}
      event={"collapse1"}
      onClick={() => setActive("collapse1")}
      active={active}
    />
    <OrgariumAcc
      title={"Is homework required?"}
      answer={"Homework is not a requirement in our program. However, depending on ongoing projects and the individual students interest, they may wish to continue their research or work at home. We encourage students to invest age-appropriate attention and effort into their projects, but there are no penalties for incomplete assignments. Weekly communication between parents and teachers will ensure parents understand what students are working on and any optional home assignments."}
      event={"collapse2"}
      onClick={() => setActive("collapse2")}
      active={active}
    />
    <OrgariumAcc
      title={"How does the program approach grading?"}
      answer={"We do not utilize traditional grading methods. Instead, we collaborate with students to acknowledge their strengths and identify areas for growth. Our focus is on encouraging development and celebrating success rather than assigning numerical grades."}
      event={"collapse3"}
      onClick={() => setActive("collapse3")}
      active={active}
    />
    <OrgariumAcc
      title={"What is your discipline policy?"}
      answer={"We do not have a formal discipline policy. We believe in addressing each situation individually, with teachers maintaining open communication with parents. Our goal is to work together to find the best solution for each child when issues arise."}
      event={"collapse4"}
      onClick={() => setActive("collapse4")}
      active={active}
    />
<OrgariumAcc
  title={"What is your policy on student illness?"}
  answer={"We currently do not have a formal sick policy. We ask that if your child is ill, you keep them at home to recover and prevent the spread of illness. Our focus is on maintaining a healthy learning environment for all students."}
  event={"collapse5"}
  onClick={() => setActive("collapse5")}
  active={active}
/>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Faq Section ======*/}
    </Layout>
  );
};
export default Services;
