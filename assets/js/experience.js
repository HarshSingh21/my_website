AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Engineer Intern",
    cardImage: "assets/images/experience-page/11.png" ,
    place: "Navodita Infotech Pvt.Ltd",
    time: "(Oct, 2023 - Dec 2023)",
    desp: "<li>Worked to migrate Authtication system  lite’s product page to AMP pages so that they load up instantly.</li> <li>Made changes in the current progressive web app of Ineurion to react to different actions performed on AMP page.</li> <li>Created a node module called “fk-amp” which abstracts all the files and middlewares and can be easily imported and used from express server.</li>",
  },
  {
    title: "Summer Research Intern",
    cardImage: "assets/images/experience-page/IIT_BHU.jpg",
    place: "IIT, BHU",
    time: "(May 22 - July 22)",
    desp: "<li>Collaborated with Dr. Pratik Chattopadhyay, Assistant Professor at IIT BHU, to lead the development of a secure FTP server, optimizing data transfer and enhancing collaboration.</li><li>Integrated advanced video microscopy techniques for precise virus testing under guidance from Dr. Pratik Chattopadhyay and Dr. Prodyut Dhar which results in Improved testing accuracy by 31% and also established a streamlined pipeline for result analysis within the department’s FTP server infrastructure.</li>"
  },
  {
    title: "Freelancing",
    cardImage: "assets/images/experience-page/gsoc.jpg",
    place: "Mindwell Councel , Csepathshala , Risingtechpro",
    time: "(Mar- 2023, Current)",
    desp: "<li>Worked for Mindwell councel to design and interact their councelling system .</li><li>Worked on Extension Activity Monitor which is a privileged extension for payment system that uses the activityLog API (privileged API) to monitor the activities of the other installed extensions.</li><li>The activityLog API listens for logs from other installed extensions and listen to the payment system</li>",
  },
 
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards


const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Hackober Fest 2022",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Contributed to open source reposirty haivng issues related to poblem solving and frontend related issues  " 
    ,
  },
  {
    title: "StudentCode-in 2023",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2023",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "PClub Summer Of Code 2023",
    cardImage: "assets/images/experience-page/IIT_BHU.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen."
  },

  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
