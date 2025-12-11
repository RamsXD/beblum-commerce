import { SignUp } from "@clerk/nextjs";

type SignUpPageProps = {
  searchParams: {
    forceRedirectUrl: string;
  };
};

export default function SignUpPage({
  searchParams: { forceRedirectUrl },
}: SignUpPageProps) {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <SignUp signInUrl="/sign-in" forceRedirectUrl={forceRedirectUrl} />
        </div>
      </div>
    </section>
  );
}
