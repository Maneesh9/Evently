import {  SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
