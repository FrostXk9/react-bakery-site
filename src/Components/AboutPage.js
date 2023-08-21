import { Link } from "react-router-dom";

const AboutPage = () => {
  
const establishmentYear = 2005;

const proudBakers = ["John", "Sarah", "Michael"];

const bakeryName = ["Sweet Delights Bakery"];

const aboutImage = "https://i.postimg.cc/J7D4bHRz/bakery-about.jpg";

  return (
    <>
      <h1 className="page-heading">About Us</h1>
      
      <Link to="/">

        <img className="Link" src="https://i.postimg.cc/fLFt3T8V/icon.png"></img>

      </Link>


      <div className="About">


        <p>

         Welcome {bakeryName}! We have been serving delicious baked goods since {establishmentYear}. Our team of proud bakers, including {proudBakers.join(", ")}, is dedicated to providing the best quality treats for our customers.

        </p>


        <p>

         Whether you're craving cakes, cheesecakes, milk-tarts, cookies, or muffins, we have a wide variety of options to satisfy your sweet tooth. Each item on our menu is carefully crafted with love and attention to detail.

        </p>


        <p>

        We believe that baking is an art, and we take pride in every creation that comes out of our ovens. From classic flavors to unique and innovative combinations, we strive to deliver a memorable experience with every bite.

        </p>


        <p>

         Thank you for choosing our bakery. We look forward to serving you and making your day a little sweeter!

        </p>


        <div className="about-section-2">
          <img src={aboutImage} alt="bakery-image" />
          <p>Sweet Delights Bakery is the epitome of excellence when it comes to the selection of the best quality baked goods. With a rich history spanning over three generations, this family-owned bakery has perfected the art of creating delectable treats that are sure to tantalize your taste buds. From the moment you step foot into our charming bakery, you are greeted with the irresistible aroma of freshly baked bread and pastries. Our skilled bakers, who have honed their craft through years of experience, use only the finest ingredients to ensure that every bite is a burst of flavor. Whether you're craving a flaky croissant, a moist cake, or a warm loaf of bread, Sweet Delights Bakery is the place to indulge in pure culinary bliss.</p>
        </div>


      </div>
      
    </>
  );
}

export default AboutPage;