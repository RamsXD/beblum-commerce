import { SignIn } from "@clerk/nextjs";

type SignInPageProps = {
  searchParams: {
    forceRedirectUrl: string;
  };
};

export default function SignInPage({
  searchParams: { forceRedirectUrl },
}: SignInPageProps) {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <SignIn signInUrl="/sign-up" forceRedirectUrl={forceRedirectUrl} />
        </div>
      </div>
    </section>
  );
}
