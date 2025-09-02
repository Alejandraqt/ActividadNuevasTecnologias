// Colección de objetos de "Articulos"-Miguel Correa
//1 = Articulo1
var articulos = {
  1: {
    resumen: `
    Background: It has been considered that the preclinical education may be inadequate 
    in the development of preparation skills of dental students. With technological 
    developments, there is an increase in the use of computer-aided simulations in 
    dental education. Virtual reality (VR) patient simulators promise practice in a 
    realistic environment with detailed, frequent and objective feedback, but it remains 
    unclear whether these features lead to better or faster skill acquisition.

    This study aims to investigate the impact of virtual reality simulations on students’ 
    clinical preparation skills.

    Methods: In this study, tooth preparation data of 100 fourth-year students who 
    practiced preparation with a virtual reality device and had real patient experience, 
    as well as a group of 100 fifth-year students who had no prior virtual reality 
    experience but had real patient experience, were transferred to the exocad® DentalCAD 
    program, a CAD software, for the measurement of TOC (Total Occlusal Convergence) angles.

    The data obtained from these measurements were analyzed using the SPSS program. In 
    addition, 25 random individuals from both groups underwent preparation in a phantom 
    model in order to make a comparison between different experience environments.

    Finally, a questionnaire was administered to the group trained in the simulator to   
    evaluate the students’ perspective on this new training method. Independent sample 
    T test and single sample analysis of variance (ANOVA), which are parametric test 
    methods, and Tukey HSD, which is a post hoc test, were used in statistical analyses.

    Results: In the descriptive statistical analysis, it was determined that the average 
    preparation angles of the 4th-year students were lower than those of the 5th-year 
    students. Accordingly, it is possible to say that grade levels affect all surface 
    preparation results in a statistically significant way.

    Conclusions: According to the results of this study, students who used virtual reality 
    simulators were more successful in terms of tooth preparation angles compared to students 
    who did not use them. This study demonstrated that the use of virtual reality simulators 
    contributes to tooth preparation skills.
    ` ,

    palabrasclave: ['Tooth Preparation', 'Dental education','Virtual reality'],
    citar: `
    Dündar, B., Gönüldaş, F., Akat, B., Orhan, K. (2025). The effect of virtual reality simulators on tooth preparation skills of dental students. BMC Oral Health, (1-9). https://doi.org/10.1186/s12903-025-05812-x.  
    `
  },
//Articulo 2
  2:{
    resumen:  `
     Interpersonal skills such as empathy, intuition and sensing, emotional intelligence,
     and effective communication, are crucial for teachers working with infants (aged birth to 2 year)
     in Early Childhood Education and Care (ECEC). However, due to the intimate and vulnerable nature 
     of this relationship for infants, opportunities for students to rehearse these skills in real life
     ECE contexts are limited. We co-designed an immersive virtual reality (VR) environment to simulate
     an ECEC context, with a virtual baby prototype, furniture such as a changing table and a cot, and 
     toys a user could interact with. A pilot user study tested its efficacy with 17 participants made 
     up of 12 students of a tertiary ECE program and 5 qualified ECE teachers. A questionnaire was used 
     to collect data on usability, experience, and overall feedback on the VR baby experience. Results
     show that - while the majority of the participants appraised the audio-visual component of the VR environment,
     the limited haptic feedback and interaction options were a source of fear and discomfort. 
     Participants reported to being immersed in the learning environment, but would appreciate more realistic
     feedback mechanisms like touch and breath. We suggest that further research looks into the effect of advanced 
     haptic feedback in VR when used for learning in ECE.
    `,
    palabrasclave: ['Virtual reality','Virtual baby','Early childhood education','Immersive learning'],
    citar: `Heide K, L., Cara ,S., Rene, N., Jayne, W. (2025). Exploring virtual encounters in early childhood esduction: Results of a pilot study. Computers & Education: X Reality, (7), 1-8. https://doi.org/10.1016/j.cexr.2025.100104. `
  },
 //Articulo 3
  3:{
      resumen: `
      More virtual reality (VR) scenarios have become more prevalent in recent years. More and more people are getting into VR, meaning that objective physiological measures to assess a user's emotional state automatically are
      becoming more critical. Individuals’ emotional states impact their behaviour, opinions, emotions, and decisions.
      They may be used to analyze VR experiences and make systems react to and engage with the user’s emotions.
      VR environments require users to wear head-mounted displays (HMDs), blocking off their upper faces. That
      makes traditional Facial Expression Recognition (FER) approaches very limited in their usefulness. Thus, a
      Deep Learning (DL) solution combined with image processing is utilized to classify universal emotions: sadness,
      happiness, disgust, anger, fear and surprise. Hence, this paper suggests the Deep Automatic Facial Expression
      Recognition Model (DAFERM) for interactive virtual reality (VR) applications such as intelligent education,
      social networks, and virtual training. Two main parts comprise the system: one that uses deep neural networks
      (DNNs) for facial emotion identification and another that automatically tracks and segments faces. The system
      begins by following a marker on the front of the head-mounted display (HMD). With the help of the spatial data
      that has been retrieved, the positions and rotations of the face are estimated to segment the mouth. Finally, the
      system interacts with DNN using the pixels processed by the lips. It obtains the facial expression results in real
      time using an adaptive method for histogram-based mouth segmentation.
      `,
      palabrasclave: ['Facial expression recognition','Deep learning','Virtual reality','Image processing','Deep neural network'],
      citar: `Quinzhen, G., Xuefang, L., Yongqiang, M. (2025). Real-Time Facial Expression Recognition Based on Image Processing in Virtual Reality. Int J comput Intell Syst, (18:8), 1-16. https://doi.org/10.1007/s44196-024-00729-9. `

  }
}

function mostrarinfo(idArticulo,element,idDiv){
      let articulo = articulos[idArticulo];
      let contenido = document.getElementById(idDiv);
      
      if(element === "resumen"){
         contenido.innerHTML = '<h3>Resumen</h3>'+'<p>'+articulo.resumen+'</p>';
      }
      if(element === "palabrasclave"){
        let lista = '<ul>';
        
         for(let i=0; i<articulo.palabrasclave.length;i++){
             lista += '<li>'+articulo.palabrasclave[i]+'</li>';
            }
            lista+='</ul>';

         contenido.innerHTML += '<h3>Palabras Clave</h3>'+lista;
      }

}

function limpiarDatos(idDiv){
     let contenido = document.getElementById(idDiv);
     contenido.innerHTML = "";
}

function copiarCita(idArticulo,idDiv){
   let articulo = articulos[idArticulo]; 
   let cita = articulo.citar;  
   navigator.clipboard.writeText(cita);
   alert("Cita copiada en portapapeles");

   let contenido = document.getElementById(idDiv);
   contenido.innerHTML += '<h3>Cita</h3>'+'<p>'+cita+'</p>';
}