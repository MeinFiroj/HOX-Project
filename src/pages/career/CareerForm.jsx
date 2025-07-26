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
      <h1>Contact Information for House of X</h1>
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

        <div className="form-group options">
          <label>Role you are applying for *</label>
          <div className="radio-group">
            {[
              "VP Operations and Supply Chain ( 5+ years Experience )",
              "VP Buying and Sourcing ( 5+ years Experience )",
              "Founders' Office - Operations Executive ( 1-3 years Experience )",
              "Founders' Office - HR ( 1-3 years Experience )",
              "Junior UI/UX Designer (1-3 years Experience)",
              "INTERN - UI/UX Designer",
              "EIR - BRAND MANAGER (2+ years Experience)",
              "Videographer and Editor (2+ years Experience)",
              "Senior Graphic Designer (2+ Years Work Experience)",
              "Other:",
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
