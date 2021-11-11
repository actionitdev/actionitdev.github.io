import React from "react";
import Layout from "../components/layout";
import anmolImg from "../images/s2_2021/anmol.jpg";
import anneImg from "../images/s1_2021/anne.jpg";
import nanImg from "../images/s1_2021/nan.jpg";
import vickyImg from "../images/s2_2021/vicky.jpg";
import mkImg from "../images/s2_2021/mk.jpg";
import palaashImg from "../images/s1_2021/palaash.jpg";
import prithviImg from "../images/s1_2021/prithvi.jpg";
import raymondImg from "../images/s2_2021/raymond.jpg";
import sayaliImg from "../images/s1_2021/sayali.jpg";
import sidratulImg from "../images/s2_2021/sidratul.jpg";
import subbuImg from "../images/s1_2021/subbu.jpg";
import sudeshnaImg from "../images/s2_2021/sudeshna.jpg";
import suryaImg from "../images/s1_2021/surya.jpg";
import tonyImg from "../images/s2_2021/tony.jpg";
import yonasImg from "../images/s2_2021/yonas.jpg";
import yuanhongImg from "../images/s1_2021/yuanhong.jpg";
import yunkaiImg from "../images/s2_2021/yunkai.jpg";
import yuzeImg from "../images/s1_2021/yuze.jpg";
import userImg from "../images/user.png";
import Member from "../components/member";

const leads = [
  {
    img: nanImg,
    name: "Nan Xiao",
    team: "Staging Team - S1 2021",
    linkedin: "https://www.linkedin.com/in/silvia-xiao-a630ba1a6/",
  },
  {
    img: prithviImg,
    name: "Prithvi Raj",
    team: "Optimization Team - S1 2021",
    linkedin: "https://www.linkedin.com/in/prmunday/",
  },
];

const alumni = [
  {
    img: anmolImg,
    name: "Anmol Sarraf",
    team: "Optimization Team - S2 2021",
    linkedin: "https://www.linkedin.com/in/asar0011/",
  },
  {
    img: anneImg,
    name: "Anne Corby",
    team: "Translation Team - S1 2021",
    linkedin: "https://www.linkedin.com/in/anne-corby-2567b179/",
  },
  {
    img: vickyImg,
    name: "Ke (Vicky) Wang",
    team: "Staging Team - S2 2021",
    linkedin: "https://www.linkedin.com/in/ke-vicky-wang",
  },
  {
    img: mkImg,
    name: "Muthukamalesh",
    team: "VMS Team - S2 2021",
    linkedin: "https://www.linkedin.com/in/muthukamalesh/",
  },
  {
    img: palaashImg,
    name: "Palaash Srivastava",
    team: "Translation Team - S1 2021",
    linkedin: "https://www.linkedin.com/in/palaash-srivastava-moncompsci/",
  },
  {
    img: raymondImg,
    name: "Raymond Chao",
    team: "FMS Team - S2 2021",
    linkedin: "https://www.linkedin.com/in/raymondrrchao/",
  },
  {
    img: userImg,
    name: "Sao Jun Hew",
    team: "Optimization Team - S2 2021",
    linkedin: "https://www.linkedin.com/in/sao-jun-hew-433b43216/",
  },
  {
    img: sayaliImg,
    name: "Sayali Chavan",
    team: "Data Retrieval Team - S1 2021",
    linkedin: "https://www.linkedin.com/in/sayali-chavan-379b3840/",
  },
  {
    img: sidratulImg,
    name: "Sidratul Muntaha",
    team: "FMS Team - S2 2021",
    linkedin: "https://www.linkedin.com/in/sidratul-ahmed/",
  },
  {
    img: subbuImg,
    name: "Subramanian Kanagasundaram",
    team: "Optimization Team - S1 2021",
    linkedin: "https://www.linkedin.com/in/gsubbu16/",
  },
  {
    img: sudeshnaImg,
    name: "Sudeshna Jana",
    team: "Staging Team - S2 2021",
    linkedin: "https://www.linkedin.com/in/sudeshna-jana-345414110/",
  },
  {
    img: suryaImg,
    name: "Surya Surendran",
    team: "Staging Team - S1 2021",
    linkedin: "https://www.linkedin.com/in/surya-surendran-298934116/",
  },
  {
    img: tonyImg,
    name: "Tony Thomas",
    team: "VMS Team - S2 2021",
    linkedin: "https://www.linkedin.com/in/tony-thomas-40076a97/",
  },
  {
    img: yonasImg,
    name: "Yonas Mulyadi",
    team: "Staging Team - S2 2021",
    linkedin: "https://www.linkedin.com/in/yonas-mulyadi-559841140/",
  },
  {
    img: yuanhongImg,
    name: "YuanHong Li",
    team: "Optimization Team - S1 2021",
    linkedin: "https://www.linkedin.com/in/yuanhong-li-230a1a148/",
  },
  {
    img: yunkaiImg,
    name: "Yunkai Liu",
    team: "Optimization Team - S2 2021",
    linkedin: "https://www.linkedin.com/in/felix-liu-223b65204/",
  },
  {
    img: yuzeImg,
    name: "Yuze Ling",
    team: "Staging Team - S1 2021",
    linkedin: "https://www.linkedin.com/in/yuze-ling/",
  },
];

const leadList = leads.map((item) => {
  return (
    <Member
      img={item.img}
      name={item.name}
      team={item.team}
      linkedin={item.linkedin}
    ></Member>
  );
});

const alumniList = alumni.map((item) => {
  return (
    <Member
      img={item.img}
      name={item.name}
      team={item.team}
      linkedin={item.linkedin}
    ></Member>
  );
});

export default function AlumniPage() {
  return (
    <Layout>
      <section id="team">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h3>ACTION IT Delivery Leads</h3>
          </div>

          <div className="row">{leadList}</div>

          <br />
          <br />

          <div className="section-header">
            <h3>ACTION IT Alumni</h3>
          </div>

          <div className="row">{alumniList}</div>
        </div>
      </section>
    </Layout>
  );
}
