import { Button } from "@/components/ui/button";
import { paths } from "@/lib/utils";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageWithPlaceholder } from "@/components/imageWithPlaceholder";

export default function Contact() {
  return (
    <main className="flex min-h-[90vh] max-w-(--max-content) flex-col items-center justify-center gap-[32px] px-5 py-6">
      <ImageWithPlaceholder
        src="https://eightyaday.s3.ca-central-1.amazonaws.com/contact.jpg"
        height={400}
        width={400}
        alt="Portrait of me holding cotton candy, standing in front of a ferris wheel at a local fair."
      />
      <Card className="w-full max-w-[400px]">
        <CardHeader>
          <CardTitle className="text-center">
            Get in touch to say hello!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex w-full flex-col gap-5 md:w-auto">
            <Button asChild className="w-full md:w-auto">
              <Link href={paths.email()}>
                <span className="hidden">Opens email application</span>
                send me an email
              </Link>
            </Button>

            <Button asChild className="w-full md:w-auto">
              <Link href={paths.instagram()} target="_blank">
                <span className="hidden">Opens in new tab</span>
                dm me on instagram
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
