import React from "react";
import "./Carousel.css";
import cardImage from "../../Assets/Images/card-image.jpg";

function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <div className="card-details-main-div">
        <div>
          <p className="card-details-text">{props.title}</p>
          <h3 className="card-details-text">{props.description}</h3>
        </div>
        <div>
          <button className="add-btn-in-card">Add</button>
        </div>
      </div>
    </div>
  );
}

function Carousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-container">
        <div className="card-carousel">
          <Card
            image="https://img.freepik.com/free-vector/realistic-chips-package_1284-34786.jpg?w=740&t=st=1677087851~exp=1677088451~hmac=4934cf9d7c1b532a5e0a3e8ebc92e7cd9c9072a0a349d885b6ec4e44d96f2d47"
            title="Kurkure"
            description="₹ 15 /-"
          />
          <Card
            image={
              "https://img.freepik.com/free-photo/fresh-cola-drink-glass_144627-16201.jpg?w=740&t=st=1677087908~exp=1677088508~hmac=3b8369aef03275e88382c6b352a0ca29ab1b53f7e4e55a89e9e6d84ef6652b63"
            }
            title="Pepsi"
            description="₹ 50 /-"
          />
          <Card
            image={
              "https://img.freepik.com/free-vector/realistic-ftuiys-juice-splash-burst-composition-with-spray-images-ripe-tropical-fruits-blank_1284-29364.jpg?w=740&t=st=1677087968~exp=1677088568~hmac=25eb1e7ebfa0a993f6a308e65721cf29aa189f18bf2693ed5a29238c565b98ca"
            }
            title="Juice"
            description="₹ 100 /-"
          />
          <Card
            image={
              "https://img.freepik.com/free-vector/realistic-mineral-water-bottle-composition-with-isolated-image-plastic-water-bottle-blank-background-vector-illustration_1284-67616.jpg?w=740&t=st=1677088094~exp=1677088694~hmac=61ea2772c17430b2e33cd31a1d8e6b2524453eeb186c69aa2db654483c6be3be"
            }
            title="Bisleri"
            description="₹ 70 /-"
          />
          <Card
            image={
              "https://img.freepik.com/premium-vector/soap-bar-vector-illustration-design-soap-bar-hand-drawn_266639-1928.jpg?w=740"
            }
            title="Soap"
            description="₹ 70 /-"
          />
          <Card
            image={
              "https://img.freepik.com/premium-psd/white-bottle-advertising-splash-mockup_181945-770.jpg?w=826"
            }
            title="Body Wash"
            description="₹ 200 /-"
          />
          <Card
            image="https://img.freepik.com/free-vector/realistic-chips-package_1284-34786.jpg?w=740&t=st=1677087851~exp=1677088451~hmac=4934cf9d7c1b532a5e0a3e8ebc92e7cd9c9072a0a349d885b6ec4e44d96f2d47"
            title="Kurkure"
            description="₹ 15 /-"
          />
          <Card
            image={
              "https://img.freepik.com/free-photo/fresh-cola-drink-glass_144627-16201.jpg?w=740&t=st=1677087908~exp=1677088508~hmac=3b8369aef03275e88382c6b352a0ca29ab1b53f7e4e55a89e9e6d84ef6652b63"
            }
            title="Pepsi"
            description="₹ 50 /-"
          />
          <Card
            image={
              "https://img.freepik.com/free-vector/realistic-ftuiys-juice-splash-burst-composition-with-spray-images-ripe-tropical-fruits-blank_1284-29364.jpg?w=740&t=st=1677087968~exp=1677088568~hmac=25eb1e7ebfa0a993f6a308e65721cf29aa189f18bf2693ed5a29238c565b98ca"
            }
            title="Juice"
            description="₹ 100 /-"
          />
          <Card
            image={
              "https://img.freepik.com/free-vector/realistic-mineral-water-bottle-composition-with-isolated-image-plastic-water-bottle-blank-background-vector-illustration_1284-67616.jpg?w=740&t=st=1677088094~exp=1677088694~hmac=61ea2772c17430b2e33cd31a1d8e6b2524453eeb186c69aa2db654483c6be3be"
            }
            title="Bisleri"
            description="₹ 70 /-"
          />
          <Card
            image={
              "https://img.freepik.com/premium-vector/soap-bar-vector-illustration-design-soap-bar-hand-drawn_266639-1928.jpg?w=740"
            }
            title="Soap"
            description="₹ 70 /-"
          />
          <Card
            image={
              "https://img.freepik.com/premium-psd/white-bottle-advertising-splash-mockup_181945-770.jpg?w=826"
            }
            title="Body Wash"
            description="₹ 200 /-"
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
