const images = [
    'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/03/will-smith-oscar.jpg?w=1200&h=675&crop=1',
    'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2022/04/will-smith-2019.jpg',
    'https://tm.ibxk.com.br/2019/10/11/11114539490099.jpg?ims=1120x420',
    'https://i.uai.com.br/2gBlqh6pZFY6vo6O4HaFzH4QggM=/750x0/imgsapp2.uai.com.br/app/noticia_133890394703/2022/06/05/286887/imagem_1_36266.jpg'
];

const imagesDOM = document.getElementsByTagName('img');
const timeForUpdate = 3 * 1000;
let counter = 0;

const isValidImage = (image) => {
    let isValid = false;
    images.forEach((img) => {
        if (image === img) {
            isValid = true;
        }
    });

    return isValid;
}

const updateImages = () => {
    console.log('update images');
    for (let i = 0; i < imagesDOM.length; i++) {
        const randomImage = images[Math.floor(Math.random() * images.length)];

        const imageAlreadyUpdated = isValidImage(imagesDOM[i].src);

        if (!imageAlreadyUpdated) {
            imagesDOM[i].src = randomImage;
        }
    }
}

const execute = () => {
    updateImages();
    setTimeout(() => {
        execute();
    }, timeForUpdate)
}

execute();
