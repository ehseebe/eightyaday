import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="flex min-h-[90vh] max-w-(--max-content) flex-col items-center justify-center gap-[32px] px-5 py-6">
      <Card>
        <Image
          src="https://eightyaday.s3.ca-central-1.amazonaws.com/self_portrait_02.jpg"
          height={400}
          width={400}
          alt="Illustration of a man with a toque and zip-up hoodie drawing a raccoon with the name eightyaday"
          className="mx-auto py-6"
        />
        <CardHeader>
          <CardTitle className="text-center">Hey there!</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="flex flex-col items-center gap-[16px]">
            <p className="text-text text-center font-semibold">
              I&apos;m an illustrator based in Montreal, and I&apos;m all about
              creating colourful, fun art that tells a story. Not too long ago,
              I made the leap from my 9-to-5 to dive headfirst into illustration
              and design, and I haven&apos;t looked back.
            </p>
            <p className="text-text text-center font-semibold">
              I love drawing everything from comics and animals to bugs and
              bringing my illustrations to life with graphic design. I've had
              the pleasure of working with some amazing clients like Lufa Farms,
              Detroit Rapper Dopehead, Jean + Deans Bakery, CKCU FM Ottawa, and
              more. Whether it&apos;s a logo, a mural, or a limited-edition tote
              bag, I&apos;m here to make it happen.
            </p>
            <p className="text-text text-center font-semibold">
              I&apos;ve showcased my personal art at exhibitions like the Sketch
              at Saw Gallery, and solo exhibitions, like Super Happy Artworks by
              Eightyaday hosted at The Manx in Ottawa. My work has appeared in
              publications The Dionysian (NYC) and Sidewalk Plants (Montreal).
            </p>

            <p className="text-text text-center font-semibold">
              When I&apos;m not drawing, you can find me on long-haul bike
              adventures, hanging out with dogs, or practicing my French. I love
              working on commissions and love bringing visions and stories to
              life.
            </p>

            <p className="text-text text-center font-semibold">
              If you&apos;re looking for unique artwork or design,{" "}
              <Link href="/contact" className="underline">
                let&apos;s chat!
              </Link>
            </p>
          </CardDescription>
        </CardContent>
      </Card>
    </main>
  );
}
