import React from 'react';
import img1 from '../../../assets/asset/19f6c.jpg';
import img2 from '../../../assets/asset/144c28.jpg';
import img3 from '../../../assets/asset/21de5.jpg';
import img4 from '../../../assets/asset/4d73f.jpg';
import img5 from '../../../assets/asset/3fa0a.jpg';
import img6 from '../../../assets/asset/54003.jpg';
import img7 from '../../../assets/asset/7a1a6.jpg';
import img8 from '../../../assets/asset/61c29.jpg';
import img9 from '../../../assets/asset/256356.jpg';
import img10 from '../../../assets/asset/119ec4.jpg';
import img11 from '../../../assets/asset/20b9f7.jpg';
import img12 from '../../../assets/asset/246371.jpg';
import img13 from '../../../assets/asset/g34274.jpg';
import img14 from '../../../assets/asset/g296cc.jpg';
import img15 from '../../../assets/asset/g16dec.jpg';

const teamMembers = [
  {
    id: 1,
    name: 'Hamza Shafiq',
    role: 'Full Stack Engineer',
    roleGradient: 'linear-gradient(99.59deg, rgb(235, 21, 149) 0%, rgb(251, 108, 211) 99.13%)',
    bio: "Meet Hamza Shafiq, Speecto's composed Software Engineer. Graduating from Punjab University in 2021, he's been with Speecto for a year, appreciating its relaxed environment. A sports lover, Hamza also aspires to solve real-world problems with his own product in the future.",
    image: img1
  },
  {
    id: 2,
    name: 'Muhammad Ahmad',
    role: 'Full Stack Engineer',
    roleGradient: 'linear-gradient(99.59deg, rgb(235, 21, 149) 0%, rgb(251, 108, 211) 99.13%)',
    bio: "Introducing Muhammad Ahmed - a compelling personality and a front-end engineer by profession. Ahmed, a 2021 NCBA graduate, joined Speecto appreciating its supportive atmosphere and growth opportunities. A budding book enthusiast and Ted Talks producer, he also enjoys mentoring juniors.",
    image: img2
  },
  {
    id: 3,
    name: 'Muhammad Umar',
    role: 'Full Stack Engineer',
    roleGradient: 'linear-gradient(99.59deg, rgb(235, 21, 149) 0%, rgb(251, 108, 211) 99.13%)',
    bio: "Introducing Muhammad Umar - a consistent high-achiever and our esteemed React Native Developer. A GK University graduate, Umar joined Speecto a year ago, and despite his accomplishments, he's ever-humble and committed to learning. With two years of experience pre-graduation, Umar is fond of reading technical blogs and is passionate about technology.",
    image: img3
  },
  {
    id: 4,
    name: 'Muhammad Usman',
    role: 'UI UX Designer',
    roleGradient: 'linear-gradient(99.59deg, rgb(115, 21, 235) 0%, rgb(189, 137, 255) 99.13%)',
    bio: "Introducing Muhammad Usman, our quick-witted UI/UX Designer at Speecto. An alumnus of the University of Faisalabad, Usman not only brings insightful knowledge to the team, but also a unique interest in Holy Quran reading and F1 racing.",
    image: img4
  },
  {
    id: 5,
    name: 'Uzair Butt',
    role: 'Graphic Designer',
    roleGradient: 'linear-gradient(99.59deg, rgb(115, 21, 235) 0%, rgb(189, 137, 255) 99.13%)',
    bio: "Introducing Uzair Butt - a versatile Graphic Designer, handling more than his expertise dictates at Speecto. A 2019 NCA graduate, Uzair joined Speecto after gaining two years of experience in the field. He has an impressive track record of completing diverse tasks flawlessly, even maintaining a record of zero days off.",
    image: img5
  },
  {
    id: 6,
    name: 'Umair Akbar',
    role: 'Senior Frontend Engineer',
    roleGradient: 'linear-gradient(93.81deg, rgb(235, 66, 21) 29.28%, rgb(251, 137, 108) 95.46%)',
    bio: "Introducing Umair - a dynamic Software Engineer who's been contributing significantly to Speecto for 2 years. Despite being an extrovert, he's a man of few words but abundant action. An alumnus of Riphah International University, Umair is not only kind and humorous but also hardworking and strategic.",
    image: img6
  },
  {
    id: 7,
    name: 'Uzair Aslam',
    role: 'UI UX Designer',
    roleGradient: 'linear-gradient(99.59deg, rgb(115, 21, 235) 0%, rgb(189, 137, 255) 99.13%)',
    bio: "Meet Uzair Aslam - a testament to the friendly atmosphere at Speecto. Uzair, a 2021 graduate from the Agriculture University of Faisalabad, joined Speecto nine months ago and has since proved his mettle as an exceptional UI/UX designer.",
    image: img7
  },
  {
    id: 8,
    name: 'Asad Ijaz',
    role: 'Frontend Engineer',
    roleGradient: 'linear-gradient(93.81deg, rgb(0, 93, 252) 29.28%, rgb(0, 175, 254) 95.46%)',
    bio: "Introducing Asad Ijaz, our skilled Junior Front-End Engineer at Speecto and a champion at Counter-Strike: Global Offensive. A graduate from the Agriculture University of Faisalabad, Asad is proficient in React.js. He appreciates the supportive team, frequent events, and flexible timings at Speecto.",
    image: img8
  },
  {
    id: 9,
    name: 'Muhammad Saif',
    role: 'Backend Developer',
    roleGradient: 'linear-gradient(99.59deg, rgb(235, 21, 149) 0%, rgb(251, 108, 211) 99.13%)',
    bio: "Introducing Muhammad Saif-ur-Rehman, an adept Junior Back End Developer with one year of professional experience, is a proud graduate of the University of Faisalabad. He currently brings his skills and values to his role at Speecto.",
    image: img9
  },
  {
    id: 10,
    name: 'Mujtaba Asif',
    role: 'Frontend Engineer',
    roleGradient: 'linear-gradient(93.81deg, rgb(0, 93, 252) 29.28%, rgb(0, 175, 254) 95.46%)',
    bio: "Mujtaba Asif, a compassionate individual and graduate from National Textile University, serves as a Mern-Stack developer at Speecto, leveraging his one-year professional experience in the field. He is known for his work-life balance, love for travel, and aspiration to excel in his coding career at Speecto.",
    image: img10
  },
  {
    id: 11,
    name: 'Muhammad Jahanzaib',
    role: 'SEO Analyst',
    roleGradient: 'linear-gradient(93.81deg, rgb(56, 176, 0) 29.28%, rgb(198, 253, 173) 95.46%)',
    bio: "Muhammad Jahanzaib, our new SEO Analyst at Speecto. Armed with a BS in Software Engineering from National Textile University and over three years of experience in the field, Jahanzaib brings a wealth of knowledge and expertise. His unique skills will no doubt contribute to enhancing our platform's visibility and reach.",
    image: img11
  },
  {
    id: 12,
    name: 'Mohammad Hamza',
    role: 'Graphic Designer',
    roleGradient: 'linear-gradient(99.59deg, rgb(115, 21, 235) 0%, rgb(189, 137, 255) 99.13%)',
    bio: "Introducing Mohammad Hamza Mohammad Ali, the newest member of our Speecto team. Holding a Bachelor's degree in Commerce from the University of Karachi and an Advanced Diploma in Media Studies from Arena Multimedia, Pakistan, Hamza brings a unique blend of academic and IT expertise. With over 4 years of diverse industry experience, including notable stints at Shop Arena, Moazzam Khan Couture, Creatrix Multimedia, Technallize, and Premium Brand Digital Solution, he is all set to leave his mark at Speecto.",
    image: img12
  },
  {
    id: 13,
    name: 'Ayesha',
    role: 'Business Development Manager',
    roleGradient: 'linear-gradient(99.59deg, rgb(237, 76, 103) 0%, rgb(253, 167, 223) 99.13%)',
    bio: "Introducing Ayesha, our new Business Development Officer at Speecto. Armed with a BBA degree and over a year of professional experience, Ayesha's business acumen is set to be a great asset to our team. We're thrilled to have her on board and can't wait to see the growth she drives.",
    image: img13
  },
  {
    id: 14,
    name: 'Nimra Maqsood',
    role: 'Business Development Manager',
    roleGradient: 'linear-gradient(99.59deg, rgb(237, 76, 103) 0%, rgb(253, 167, 223) 99.13%)',
    bio: "We'd like to welcome Nimra, another addition to our Business Development team. With an impressive academic background, holding both a BS and MPhil in Computer Science, and a year of industry experience, we are excited to see how her tech-savvy approach benefits our business strategies.",
    image: img14
  },
  {
    id: 15,
    name: 'Noor Fatima',
    role: 'Human Resource Executive',
    roleGradient: 'linear-gradient(99.59deg, rgb(6, 82, 221) 0%, rgb(153, 128, 250) 99.13%)',
    bio: "Meet Noor Fatima, our new Human Resources Manager. A BBA graduate with over a year of HR experience, Fatima's expertise in fostering positive work environments is set to be a valuable addition to our company culture. We're confident she'll make a significant impact in strengthening our team.",
    image: img15
  }
];

const InfoCard = () => {
  return (
    <div className="container sm:grid-cols-2 lg:grid-cols-3 grid gap-5 md:mt-[60px] mt-10 lg:mt-20 xl:mt-[100px] 2xl:mt-[150px] mb-2 md:mb-10">
      {teamMembers.map((member) => (
        <div key={member.id} className="max-w-[390px] mx-auto">
          <div className="group relative cursor-pointer rounded-[20px] overflow-hidden animate-wiggle25 transition-all duration-500">
            <div className="flex w-full">
              <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}>
                <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '100%' }}>
                  <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27780%27%20height=%27780%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px' }} />
                </span>
                <img alt="" src={member.image} decoding="async" data-nimg="intrinsic" className="object-cover group-hover:scale-110 transition-all duration-500" style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
              </span>
            </div>

            {/* Speecto.com exact single overlay structure with clean blue hover bg and user's text styles */}
            <div className="team-card-overlay absolute p-5 flex group-hover:items-center items-end justify-center text-center group-hover:text-left transition-all duration-500 bottom-0 w-full group-hover:min-h-full min-h-[300px] bg-black/80 z-10 overflow-hidden">
              <div className="max-h-max ">
                <h3 className=" font-Nunito 2xl:text-2xl lg:text-xl  text-lg font-medium text-white !font-bold">{member.name}</h3>
                <h3 className=" font-Nunito 2xl:text-2xl lg:text-xl  text-lg font-medium !bg-clip-text !font-bold !text-base !mb-1 group-hover:!text-white !text-transparent " style={{ background: member.roleGradient }}>{member.role}</h3>
                <p title={member.bio} className="text-white font-Nunito text-sm sm:text-base mt-0 h-0 opacity-0 group-hover:h-[280px] group-hover:opacity-100 group-hover:mt-2 overflow-hidden transition-all duration-500 ease-in-out group-hover:delay-200">{member.bio}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCard; // Exporting InfoCard component