import { amazon, google, meta, netflix, microsoft, apple } from "../../data";

const Connections = () => {
   const images = [amazon, google, meta, netflix, microsoft, apple];

   return (
      <section className="carousel" id="carousel">
         <h2 className="capitalize dark:text-white ">our connections</h2>
         <div className="carousel-container" id="carouselContainer">
            {images.map((image, index) => (
               <div key={index} className="carousel-slide">
                  <img src={image} alt={`brand ${index}`} className="object-contain h-12 mx-auto" loading="lazy" />
               </div>
            ))}

            {images.map((image, index) => (
               <div key={index} className="carousel-slide p-4 ">
                  <img src={image} alt={`brand ${index}`} className="object-contain h-12 mx-auto" loading="lazy" />
               </div>
            ))}
         </div>
      </section>
   );
};

export default Connections;
