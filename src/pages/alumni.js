import React from "react";
import Layout from "../components/layout";
import anneImg from "../images/s1_2021/anne.jpg";
import nanImg from "../images/s1_2021/nan.jpg";
import palaashImg from "../images/s1_2021/palaash.jpg";
import prithviImg from "../images/s1_2021/prithvi.jpg";
import sayaliImg from "../images/s1_2021/sayali.jpg";
import subbuImg from "../images/s1_2021/subbu.jpg";
import suryaImg from "../images/s1_2021/surya.jpg";
import yuanhongImg from "../images/s1_2021/yuanhong.jpg";
import yuzeImg from "../images/s1_2021/yuze.jpg";
import Member from "../components/member";

export default function AlumniPage() {
  return (
    <Layout>
      <section id="team">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h3>Team</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
            </p>
          </div>

          <div className="row">
            <Member
              img={anneImg}
              name="Anne Corby"
              team="Translation Team - S1 2021"
              linkedin="https://www.linkedin.com/in/anne-corby-2567b179/"
            ></Member>

            <Member
              img={nanImg}
              name="Nan Xiao"
              team="Staging Team - S1 2021"
              linkedin="https://www.linkedin.com/in/silvia-xiao-a630ba1a6/"
            ></Member>

            <Member
              img={palaashImg}
              name="Palaash Srivastava"
              team="Translation Team - S1 2021"
              linkedin="https://www.linkedin.com/in/palaash-srivastava-moncompsci/"
            ></Member>

            <Member
              img={prithviImg}
              name="Prithvi Raj"
              team="Optimization Team - S1 2021"
              linkedin="https://www.linkedin.com/in/prmunday/"
            ></Member>

            <Member
              img={sayaliImg}
              name="Sayali Chavan"
              team="Data Retrieval Team - S1 2021"
              linkedin="https://www.linkedin.com/in/sayali-chavan-379b3840/"
            ></Member>

            <Member
              img={subbuImg}
              name="Subramanian Kanagasundaram"
              team="Optimization Team - S1 2021"
              linkedin="https://www.linkedin.com/in/gsubbu16/"
            ></Member>

            <Member
              img={suryaImg}
              name="Surya Surendran"
              team="Staging Team - S1 2021"
              linkedin="https://www.linkedin.com/in/surya-surendran-298934116/"
            ></Member>

            <Member
              img={yuanhongImg}
              name="YuanHong Li"
              team="Optimization Team - S1 2021"
              linkedin="https://www.linkedin.com/in/yuanhong-li-230a1a148/"
            ></Member>

            <Member
              img={yuzeImg}
              name="Yuze Ling"
              team="Staging Team - S1 2021"
              linkedin="https://www.linkedin.com/in/yuze-ling/"
            ></Member>
          </div>
        </div>
      </section>
    </Layout>
  );
}
