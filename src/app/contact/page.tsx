import { Button } from "@/components/ui/button";
import { paths } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="row-start-2 flex max-w-(--max-content) flex-col items-center gap-[32px]">
      <Image
        src="https://eightyaday.s3.ca-central-1.amazonaws.com/contact.jpg"
        height={400}
        width={400}
        alt="Portrait of me holding cotton candy, standing in front of a ferris wheel at a local fair."
        className="border-secondaryBlack rounded-base border-2 border-solid"
      />
      <h1 className="text-text text-center text-lg font-semibold">
        Get in touch to say hello!
      </h1>

      <div className="flex w-full flex-col gap-5 md:w-auto">
        <Button asChild className="w-full md:w-auto">
          <Link href={paths.email()}>send me an email</Link>
        </Button>

        <Button asChild className="w-full md:w-auto">
          <Link href={paths.instagram()} target="_blank">
            dm me on instagram
          </Link>
        </Button>
      </div>
    </main>
  );
}
