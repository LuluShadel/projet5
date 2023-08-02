const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let i =0

// ecoute du click sur la fleche de gauche 
let arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", () => {
	//fleche de gauche retire 1
	i--
	// permet carrousel infinis avec un retour à 3(=max du tableau)
	if(i<0){
		i=slides.length-1
	}
	
	caroussel()
	
})


//ecoute du click sur la fleche de droite 
let arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", () => {
	//fleche de droite ajoute 1
	i++
	//permet le caroussel infinis avec un retour à 0
	if(i>=slides.length){
		i=0
	}
	
	//appel de la fonction qui va afficher texte et images 
	
	caroussel()
	
	

})

// placement des dots 

	//boucle pour chaque ligne du tableau creer une div
	for([i] in slides){
		// recuperation de la div parent
		let dots = document.querySelector(".dots")
		//creation de la div 
		let dotDiv=document.createElement("div")
		//ajout de la class dot
		dotDiv.setAttribute("class","dot")
		//liaison parent/enfant
		dots.appendChild(dotDiv)	 
	}

	

// fonction pour afficher text et image 

function caroussel (){


	// recup de l'emplacement de l'image à changer 
let carousselImage = document.querySelector(".banner-img")
 //changement de l'attribut src en fonction de i 
carousselImage.setAttribute("src","./assets/images/slideshow/"+slides[i].image)


let carousselText = document.querySelector("#banner p")
carousselText.innerHTML=slides[i].tagLine

let dots = document.querySelectorAll(".dot")


dots.forEach(dot=>dot.classList.remove("dot_selected"))

dots[i].classList.add("dot_selected")

}












	

		

	
		




	


 





