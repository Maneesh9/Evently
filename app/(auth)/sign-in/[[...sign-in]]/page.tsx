import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
      <SignIn />
    </div>
  );
};

export default SignInPage;
