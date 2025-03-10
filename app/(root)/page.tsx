import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
// import 

export default function Home() {
  return (
    <>
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-4 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-5">
            <h1 className="h1-bold "> 
              Host,Connect,celebrate:Your Evevnts, Our Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Book and learn
              helpful tips from 3,190+ mentors in world-class companies 
              with our global community.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>
          <Image 
          src="/assets/images/hero.png"
          alt="logo"
          width={1000}
          height={1000}
          className="max-h-[60vh] object-contain object-center 2xl:max-h-[50vh] 2xl:object-right" />

      </div>

    </section>
    <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="h2-bold">Trusted by <br/>Thousands of Events</h2>
      <div className="flex w-full flex-col gap-5 md:flex-row">
        Search 
        CategoryFilter
      </div>
    </section>
    </>
  );
}
