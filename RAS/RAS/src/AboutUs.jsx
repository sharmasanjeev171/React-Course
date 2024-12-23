import "bootstrap/dist/css/bootstrap.min.css";
export default function AboutUs() {
  return (
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-12 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">About Us</h1>
        <p className="lead">
          Welcome to RAS Infotech Pvt Limited. We specialize in Salesforce
          Marketing Cloud (SFMC) and Full Stack development, offering tech
          solutions that drive business success. Our team delivers customized,
          scalable services tailored to your unique needs. From enhancing
          marketing strategies with SFMC to building responsive web
          applications, we’re your trusted partner in digital transformation.
          Our mission: empower businesses through technology to foster growth
          and efficiency. Let’s build a connected future together.
        </p>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
        <img
          className="rounded-lg-3"
          src="bootstrap-docs.png"
          alt=""
          width="720"
        />
      </div>
    </div>
  );
}
