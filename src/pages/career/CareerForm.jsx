import usePageTitle from "../../hooks/usePageTitle";
import { useForm } from "react-hook-form";

const CareerForm = () => {
  usePageTitle("Career | HOX");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  return (
    <div className="career">
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

export default CareerForm;
