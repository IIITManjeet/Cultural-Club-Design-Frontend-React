import React from 'react'
import './AboutUS.css';
import { FaArrowCircleUp } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import interior from './interior.jpg'
import Scrollbars from 'react-custom-scrollbars-2';
import SliderAboutUs from './SliderAboutUs';
import learnmore from './learnmore.png';
import ScrollButton from './ScrollButton';

function AboutUS() {
 return (
  <div>
   <section className="about-bg">
    <div className='row'>
     <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 mT10 mB30">
      <h1>
       <span>About Our Cultural Club</span>
      </h1>
      <p>
       <img className="about-img" src={interior} alt="Club Image" height="250px" width="235px" />
       The Europhia Cultural Centre has been actively engaged in promoting the performing arts and culture since 1953,
       the year of its foundation.
       <br />
       <br />
       Over the years the Centre's activities have widened multifold, having earned a name of
       being one of the prominent cultural organisations of Bhopal.
       <br />
       orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
       <br />
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </p>
      <p className='Button1'>
       <a href='/AboutUs' className='btn btn-primary'>Read More</a>
      </p>
     </div>
     <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="program-box">
       <h4>Yearly Programme Schedule</h4>
       <br />
       <br />
       <ul class="top-nav">
        <li><b>JAN:</b> Pt. Bhatkhande Sangeet Sabha, Yearly Award Distribution</li>
        <li><b>FEB:</b> Pt. Ratanjankar Anniversay Programme</li>
        <li><b>APR:</b> Sangeet Natya Mahotsav </li>
        <li><b>MAY:</b> Film Festival, Scholar's Programme </li>
        <li><b>JULY:</b> Gurupournima Celebration by Students </li>
        <li><b>AUG:</b> Vidvay Pt. Paluskar Sangeet Sabha </li>
        <li><b>SEP:</b> Adhyatmarang </li>
        <li><b>OCT:</b> International Music Day Programme </li>
        <li><b>NOV:</b> Sahityarang Mahotsav, Anniversay Day Programme </li>
        <li>Youth Festival of Music Organised Three Times in a Year </li>
       </ul>
      </div>
     </div>
    </div>
   </section>
   <div className='container'>
    <div className='row mT40 mB45'>
     <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
      <div className='news-box'>
       <h2 className='news-h2'>
        <span className='middle'>
         <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px"
          x="0px" y="0px" xmlSpace='preserve'
          fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
         </svg>
         What's New
        </span>
       </h2>
       <Scrollbars style={{ width: "100%", height: "300px", boxSizing: "border-box", padding: "5px 0px 10px", margin: "0px auto", maxWidth: "100%" }}>
        <div className="mT10 drops">
         <p className="fs0"><h3>Yearly Falicitation Ceremony</h3>
          <p>
           दरवर्षी दादर माटुंगा सांस्कृतिक केंद्रातर्फे संगीत, नाटक, साहित्य अशा विविध क्षेत्रांमध्ये विशेष उल्लेखनीय कामगिरी करणाऱ्या कलाकारांना पुरस्कार प्रदान केले जातात. याही वर्षी हा सोहळा २७ फेब्रुवारी रोजी सकाळी ११ वाजता केंद्राच्या  वा वा गोखले सभागृहात आयोजित करण्यात येत आहे. यावर्षी देण्यात येणारे हे पुरस्कार पुढीलप्रमाणे आहेत -
           <ul class="ol-list">
            <li> संगीत शिक्षक जीवन गौरव पुरस्कार - डॅा. माधुरी डोंगरे </li>
            <li> संगीत क्षेत्रातील ज्येष्ठ कलावंत - विदुषी माणिक भिडे </li>
            <li> ज्येष्ठ आणि श्रेष्ठ अभिनेत्री - श्रीमती नीना कुळकर्णी ( हा पुरस्कार ‘चंद्रलेखा’ चे कै. श्री. मोहन वाघ यांनी त्यांच्या मातोश्री शारदाबाई वाघ यांच्या स्मृतीप्रीत्यर्थ पुरस्कृत केला आहे.)  </li>
            <li> उत्कृष्ट नाट्य दिग्दर्शक - प्राजक्त देशमुख   </li>
            <li> विनोदी अभिनेत्री - श्रीमती नम्रता संभेराव</li>
            <li> उत्कृष्ट प्रवास वर्णन पुरस्कार - श्री. मोहन बने (पुस्तक - आपले पूर्वांचल)  </li>
            <li> संगीत नाट्य क्षेत्रातील उत्कृष्ट उदयोन्मुख अभिनेत्री - श्रीमती सिद्धी बोंद्रे </li>
            <li> संगीत विशारद परीक्षेत दादर माहीम भागात प्रथम आलेले विद्यार्थी - चिन्मय वैद्य, शिवानी गायतोंडे </li>
           </ul>
           <p>
            केंद्राचे अध्यक्ष श्री. एन्. एन्. श्रीखंडे व केंद्राचे कार्याध्यक्ष डॅा. श्रीकृष्ण जोशी यांच्या हस्ते पुरस्कार दिले जातील..</p>
          </p>
         </p>
        </div>
       </Scrollbars>
      </div>
     </div>
     <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
      <div className='news-box'>
       <h2 className='news-h2'>
        <span className='middle'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16" width="35px" height="35px" x="0px" y="0px">
          <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
          <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
         </svg>
         Monthly Events
        </span>
       </h2>
       <Scrollbars style={{ width: "100%", height: "300px", boxSizing: "border-box", padding: "5px 0px 10px", margin: "0px auto", maxWidth: "100%" }}>
        <div className="mT10 drops">
         <p className="fs0">
          <p> <span class="red2">रविवार दि. ११ सप्टेंबर २०२२, सायं. ५:०० वा.
          </span>
           <br />
           भाऊ आणि नाना राजाध्यक्ष यांच्या स्मृतिप्रीत्यर्थ राजाध्यक्ष कुटुंबीय प्रायोजित
           <br />
           <b>श्रीमती अपूर्वा गोखले आणि श्रीमती पल्लवी जोशी - </b>
           सहगायन
           <br />
           तबला - <b> स्वप्नील भिसे </b> / संवादिनी - <b> अनंत जोशी </b>
          </p>
          <h4>अध्यात्मरंग महोत्सव</h4>
          <p>
           <span class="red2">शुक्रवार दि. १६ सप्टेंबर २०२२, सायं. ५:३० वा. </span>
           <br /><b> डॉ. सच्चिदानंद शेवडे यांचे प्रवचन </b>
           <br /> विषय - <b> आद्य शंकराचार्य भाग - १ </b>
          </p>
          <p>
           <span class="red2">शनिवार दि. १७ सप्टेंबर २०२२, सायं. ५:३० वा. </span>
           <br /><b> डॉ. सच्चिदानंद शेवडे यांचे प्रवचन </b>
           <br /> विषय - <b> आद्य शंकराचार्य भाग - २ </b>
          </p>
          <p>
           <span class="red2">रविवार दि. १८ सप्टेंबर २०२२, सायं. ५:३० वा. </span>
           <br /><b> श्रीमती युगंधरा वीरकर </b>यांचे सुश्राव्य कीर्तन
          </p>
          <p>
           <span class="red2">रविवार दि. १८ सप्टेंबर २०२२, सकाळी १०:३० वा. </span>
          </p>
          <h4>वार्षिक सर्वसाधारण सभा </h4>
          <p>
           <span class="red2">रविवार दि. १८ सप्टेंबर २०२२, सकाळी १०:०० वा. </span>
           <br /> स्वरसंचित (केंद्राच्या यूट्यूब चॅनेल वर)
           <br /> <b>कै. पं. बबनराव हळदणकर </b> यांच्या गायनाची ध्वनिमुद्रित मैफिल
          </p>
         </p>
        </div>
       </Scrollbars>
      </div>
     </div>
     <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
      <div className='news-box'>
       <h2 className='news-h2'>
        <span className='middle'>
         <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" x="0px" y="0px" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16">
          <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z" />
         </svg>
         Competitions
        </span>
       </h2>
       <Scrollbars style={{ width: "100%", height: "300px", boxSizing: "border-box", padding: "5px 0px 10px", margin: "0px auto", maxWidth: "100%" }}>
        <div className="mT10 drops">
         <p className="fs0">
          <p> <span className="red">New *</span>  <b>Hindustani Khayal Gayan Competition 2022 (16 to 30 age group) </b> <br />
           Competition will be held on <b>16th October, 2022 at 10:00 am </b> at DMCC, Mahim, Mumbai. Rules are mentioned in the form. <a href="#">Click to Download Form</a>
          </p>
          <p> <span className="red">New *</span>  <b>Senior Citizen Khayal Gayan Competition 2022</b> <br />

           Competition will be held on
           <b>15th October, 2022 at 2:00 pm </b> at DMCC, Mahim, Mumbai. Rules are mentioned in the form. <a href="#">Click to Download Form</a></p>
          <p>“To promote the study of Hindustani Classical Music, its’s various branches and provide a platform to the upcoming talent.” <br />
           With this primary objective in sight DMCC started organizing various competitions since early 1980.</p><p> <a href="/Competitions">Know More</a></p>
         </p>
        </div>
       </Scrollbars>
      </div>
     </div>
     <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
      <div className='news-box'>
       <h2 className='news-h2'>
        <span className='middle'>
         <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" x="0" y="0" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16">
          <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
          <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
         </svg>
         Gallery
        </span>
       </h2>
       <Scrollbars style={{ width: "100%", height: "300px", boxSizing: "border-box", padding: "5px 0px 10px", margin: "0px auto", maxWidth: "100%" }}>
        <div className="mT20">
         <div className='bx-wrapper' style={{ maxWidth: "100%" }}>
          <SliderAboutUs />
          <p className="text-center mT20">
           <a href="/Gallery"> <img src={learnmore} width="70" height="40" alt="learn-more" class="view" /> </a>
          </p>
         </div>
        </div>
        <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
       </Scrollbars>
      </div>
     </div>
    </div>
   </div>
   <footer className='fullWidth'>
    <div className='mainfooter pos-r'>
     <div className='copyright'>
      <div className="container mB5">
       <div className="row">
        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
         <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
           <h3>Contact Us</h3>
           <div className="footlink">
            <p ><span className="middle mR5 mB60 fl"><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
             <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg></span>
             Cultural Centre<br />
             122-A , J K Sawant Marg , Opp Bombay Glass Works,<br />
             Mahim , Mumbai  - 400 016,<br />
             Maharashtra, India<br />
            </p>
           </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 bdr-left bdr-right">
           <div className="mB40"></div>
           <div className="footlink">
            <p className="mB20"> <span className="middle mR2">
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" x="0px" y="0px" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
             </svg>
            </span> +91-22-24304150  / +91-22-24329742<br />
             <span className="middle mR2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" x="0px" y="0px" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
               <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
               <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
              </svg></span>
             +91-22-24329742
             <br />
             <span className='middle mR5'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" x="0px" y="0px" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
               <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
             </span>
             <a href="#">culturalcentremail@gmail.com</a>
             <br />
             <span className='mL25'>
              <a href='#'>culturalcentrsite.gov.in</a>
             </span>
            </p>
           </div>
          </div>
         </div>
        </div>
        <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12'>
         <h3>Follow Us</h3>
         <div className='mB20 mT20'>
          <ul className='socialicon'>
           <li>
            <a href='culturalclub@facebook.com' target="_blank" className="fb">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" x="0" y="0" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
             </svg>
            </a>
            <br/>
           </li>
           <a href='culturalclub@youtube.com' target="_blank" className="you-tube">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" x="0" y="0" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
             <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
            </svg>
           </a>
           <li>
           </li>
          </ul>
         </div>
        </div>
       </div>
       <div className="elevator_item" >
       <ScrollButton />
       </div>
      </div>
     </div>
    </div >
   </footer >
  </div >
 )
}

export default AboutUS