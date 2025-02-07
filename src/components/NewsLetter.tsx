import { useForm } from "react-hook-form";
import Button from "./Button";
import EmailInput from "./EmailInput";
import Row from "./Row";
import Col from "./Col";

const Newsletter = () => {
  const { register, handleSubmit, formState : { errors } } = useForm();

  return (
    <Col className="bg-white sm:flex-row gap-4 px-2 md:px-12 lg:px-20 py-4 justify-between items-center border-t border-b border-gray-200 text-medium-b3">
      <h2 className="text-gray-900 text-medium-b1">Get News & Updates</h2>
      <p className="hidden text-dark-gray-300 md:block">
        Get the latest developments and exciting news on how we are shaping the future!
      </p>

      <div>
        <form className="flex flex-col sm:flex-row" onSubmit={handleSubmit(() => {})}>
          <EmailInput
            className="text-medium-b3"
            register={register}
            required={false}
            isError={!!errors.email}
            label=''
          />
          <Button type="submit" variant="outline" className="text-medium-b3">
            JOIN THE NEWSLETTER
          </Button>
        </form>
      </div>
    </Col>
  );
}

export default Newsletter;