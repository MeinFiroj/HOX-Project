import { useForm } from "react-hook-form";
import closeImg from "../../assets/icons/close-btn.svg";
import { useNavigate } from "react-router-dom";

const JoingingForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted! Check console for data.");
  };
  return (
    <div className="joining-form">
      <button className="close-btn" onClick={() => navigate(-1)}>
        <img src={closeImg} alt="close svg" />
      </button>
      <div className="heading">
        <h2>Partner's Connect House of X</h2>
        <p>
          Join the House of X Partners Connect program and be a part of the next
          big revolution in the creator commerce industry.
        </p>
      </div>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name *</label>
          <input
            {...register("name", { required: true })}
            placeholder="Enter your name"
          />
          {errors.name && <span>This field is required</span>}
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter your email"
          />
          {errors.email && <span>This field is required</span>}
        </div>

        <div className="form-group">
          <label>Phone Number *</label>
          <input
            type="tel"
            {...register("phone", { required: true })}
            placeholder="Enter your Contact number"
          />
          {errors.phone && <span>This field is required</span>}
        </div>

        <div className="form-group">
          <label>Company Details *</label>
          <input
            {...register("companyDetails", { required: true })}
            placeholder="Company Details"
          />
          {errors.companyDetails && <span>This field is required</span>}
        </div>

        <div className="form-group">
          <label>Product and Service Offering *</label>
          <input
            {...register("productOffering", { required: true })}
            placeholder="Product and Service Offering"
          />
          {errors.productOffering && <span>This field is required</span>}
        </div>

        <div className="form-group">
          <label>Expertise and Experience *</label>
          <textarea
            rows={3}
            {...register("expertise", { required: true })}
            placeholder="Expertise and Experience"
          ></textarea>
          {errors.expertise && <span>This field is required</span>}
        </div>

        <div className="form-group">
          <label>Collaboration Expectations</label>
          <textarea
            rows={2}
            {...register("expectations")}
            placeholder="Collaboration Expectations"
          ></textarea>
        </div>

        <div className="form-group">
          <label>What is your primary role or area of expertise? *</label>
          <div className="radio-group">
            {[
              "Vendor",
              "Sourcing Mediator",
              "Sourcing Partner",
              "Marketing & Advertising Service Provider",
              "Manufacturer",
              "Logistics and Operations",
              "Other",
            ].map((role) => (
              <label key={role}>
                <input
                  className="radio"
                  type="radio"
                  value={role}
                  {...register("role", { required: true })}
                />
                {role}
              </label>
            ))}
          </div>
          {errors.role && <span>This field is required</span>}
        </div>

        <div className="form-actions">
          <button type="submit">Submit</button>
          <button type="reset">Clear form</button>
        </div>
      </form>
    </div>
  );
};

export default JoingingForm;
