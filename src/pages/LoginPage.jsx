import logo from "../assets/img/logo.svg";
import appleLogo from "../assets/img/apple.svg";
import googleLogo from "../assets/img/google.svg";
import emailLogo from "../assets/img/email.svg";
import { useState } from "react";
import CustomButton from "../components/common/CustomButton";
function LoginPage() {
  const [show, setShow] = useState(false);
  const handleShowOption = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      <div className="container mx-auto relative">
        <div className="h-screen w-full flex justify-center items-center pb-40">
          <img src={logo} alt="Logo" />
        </div>
        <div className=" absolute bottom-0 left-0 w-full ">
          <div className="flex gap-5 flex-col items-center px-6">
            <CustomButton
              imageLink={appleLogo}
              classInfo={"bg-customOrange text-white border-0"}
              content={"Tiếp tục với Apple"}
            />
            {show && (
              <>
                <CustomButton
                  imageLink={googleLogo}
                  classInfo={"bg-white border-2"}
                  content={"  Tiếp tục với Google"}
                />
                <CustomButton
                  imageLink={emailLogo}
                  classInfo={"bg-white border-2"}
                  content={"  Tiếp tục với Email"}
                />
              </>
            )}
          </div>

          {!show ? (
            <div className=" mt-4 mb-16">
              <button
                onClick={handleShowOption}
                className="underline text-xs font-light block mx-auto"
              >
                Khác
              </button>
            </div>
          ) : (
            <p className="text-center text-xs font-light mb-8 mt-28 font-medium ">
              Bằng việc tiếp tục, đồng nghĩa <br /> bạn đã đồng ý các{" "}
              <a href="#" className=" underline">
                điều khoản
              </a>{" "}
              và{" "}
              <a href="#" className=" underline">
                chính sách
              </a>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default LoginPage;
